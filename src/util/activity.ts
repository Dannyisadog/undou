import { items } from "components/client/common/Sidebar";
import dayjs from "dayjs";

export const getActivityItemByType = (type: string) => {
  return items.find((item) => item.type === type);
};

export const getDayOfDate = (date: Date) => {
  const day = dayjs(date).day();

  switch (day) {
    case 0:
      return "星期日";
    case 1:
      return "星期一";
    case 2:
      return "星期二";
    case 3:
      return "星期三";
    case 4:
      return "星期四";
    case 5:
      return "星期五";
    case 6:
      return "星期六";
  }
};
