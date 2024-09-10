"use client";

import { Activity } from "@prisma/client";
import { redirect } from "next/navigation";
import { useGlobalStore } from "providers/StoreProvider";
import { useEffect, useState } from "react";
import ActivityListSkeleton from "./ActivityListSkeleton";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import ActivityCard from "./ActivityCard";
import Title from "../Title";

export default function CreatedActivity() {
  const { session } = useGlobalStore((state) => state);

  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchActivities = async () => {
    const response = await fetch(`/api/activities?owned=true`);
    const data = await response.json();
    setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  if (!session) {
    redirect("/signin");
  }

  return (
    <Stack width="100%" spacing={4}>
      <Title text="我發起的活動" hasGoBack={false} />
      {loading && <ActivityListSkeleton />}
      {activities.length === 0 && !loading && (
        <Typography>目前沒有任何活動</Typography>
      )}
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
