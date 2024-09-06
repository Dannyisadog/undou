import * as yup from "yup";

export const activitySchema = yup.object().shape({
  name: yup.string().required("請輸入活動名稱"),
  description: yup.string().required("請輸入活動描述"),
  image: yup.string().url("圖片的格式有誤").nullable(), // 可選的圖片URL
  date: yup.date().required("請輸入活動時間"),
  location: yup.string().required("請輸入活動地點"),
  maxParticipants: yup
    .number()
    .required("請輸入最大參加人數")
    .min(1, "最大參加人數必須至少為1"),
  type: yup.string().required("請選擇活動類型"),
});
