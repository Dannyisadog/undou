"use client";

import { useSearchParams } from "next/navigation";
import { getActivityItemByType } from "util/activity";
import Title from "../Title";
import { useCallback, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
import ActivityCard from "./ActivityCard";
import ActivityListSkeleton from "./ActivityListSkeleton";
import { ActivityWithParticipants } from "./ActivityInfo";
import NoData from "../common/NoData";

export default function ActivityList() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "all";

  const item = getActivityItemByType(type);

  const [activities, setActivities] = useState<ActivityWithParticipants[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchActivities = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/activities?type=${type}`);
    const data = await response.json();
    setActivities(data);
    setLoading(false);
  }, [type]);

  useEffect(() => {
    setActivities([]);
    fetchActivities();
  }, [type, fetchActivities]);

  return (
    <Stack width="100%" spacing={4}>
      <Title hasGoBack={false} text={item ? `${item.label}活動` : "全部活動"} />
      {loading && <ActivityListSkeleton />}
      {activities.length === 0 && !loading && <NoData />}
      <Stack spacing={2}>
        {activities.map((activity) => (
          <Link href={`/activity/${activity.id}`} key={activity.id}>
            <ActivityCard activity={activity} />
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
