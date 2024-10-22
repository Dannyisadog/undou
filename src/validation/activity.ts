import * as yup from "yup";

export const activitySchema = yup.object().shape({
  name: yup.string().required("請輸入活動名稱"),
  description: yup.string().required("請輸入活動描述"),
  image: yup.string().url("圖片的格式有誤").nullable(),
  startDate: yup.date().required("請輸入活動開始時間"),
  endDate: yup
    .date()
    .required("請輸入活動結束時間")
    .min(yup.ref("startDate"), "結束時間必須晚於開始時間"),
  city: yup.string().required("請輸入活動城市"),
  area: yup.string().required("請輸入活動區域"),
  location: yup.string().required("請輸入活動地點"),
  address: yup.string().required("請輸入活動地址"),
  maxParticipants: yup
    .number()
    .required("請輸入最大參加人數")
    .min(1, "最大參加人數必須至少為1"),
  fee: yup.number().typeError("請輸入活動費用").required("請輸入活動費用"),
  type: yup.string().required("請選擇活動類型"),
});
