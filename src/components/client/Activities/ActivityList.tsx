"use client";

import { useSearchParams } from "next/navigation";
import { getActivityItemByType } from "util/activity";
import Title from "../Title";
import { Stack } from "@mui/material";
import Link from "next/link";
import ActivityCard from "./ActivityCard";
import ActivityListSkeleton from "./ActivityListSkeleton";
import { useActivities } from "hooks/api/useActivities";
import NoData from "../common/NoData";

export default function ActivityList() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "all";

  const item = getActivityItemByType(type);

  const { data: activities, isLoading } = useActivities(type);

  return (
    <Stack width="100%" spacing={2}>
      <Title hasGoBack={false} text={item ? `${item.label}活動` : "全部活動"} />
      {isLoading && <ActivityListSkeleton />}
      {!isLoading && (!activities || activities.length === 0) && <NoData />}
      <Stack spacing={2}>
        {activities &&
          activities.map((activity) => (
            <Link href={`/activity/${activity.id}`} key={activity.id}>
              <ActivityCard activity={activity} />
            </Link>
          ))}
      </Stack>
    </Stack>
  );
}
