import { items } from "components/client/common/Sidebar";

export const getActivityItemByType = (type: string) => {
  return items.find((item) => item.type === type);
};
