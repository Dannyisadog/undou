import { Activity } from "@prisma/client";
import { ActivityStatus } from "components/client/Activities/ActivityStatusChip";
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

export const getStatus = (activity?: Activity): ActivityStatus => {
  if (!activity) {
    return ActivityStatus.ARCHIVED;
  }

  if (!activity.is_active) {
    return ActivityStatus.ARCHIVED;
  }

  const now = dayjs();
  const startDate = dayjs(activity.startDate);

  if (now.isAfter(startDate)) {
    return ActivityStatus.OUT_DATE;
  }

  return ActivityStatus.ENABLED;
};

export const getStatusLabel = (status: ActivityStatus) => {
  switch (status) {
    case ActivityStatus.ENABLED:
      return "可報名";
    case ActivityStatus.OUT_DATE:
      return "已結束";
    case ActivityStatus.ARCHIVED:
      return "已封存";
  }
};

export const getStatusColorType = (status: ActivityStatus) => {
  switch (status) {
    case ActivityStatus.ENABLED:
      return "success";
    case ActivityStatus.OUT_DATE:
      return "error";
    case ActivityStatus.ARCHIVED:
      return "warning";
  }
};
