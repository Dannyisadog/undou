"use client";

import { useSearchParams } from "next/navigation";
import { getActivityItemByType } from "util/activity";
import Title from "../Title";

export default function ActivityList() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "all";

  const item = getActivityItemByType(type);

  return (
    <Title hasGoBack={false} text={item ? `${item.label}活動` : "全部活動"} />
  );
}
