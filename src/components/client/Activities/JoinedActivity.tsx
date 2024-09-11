"use client";

import { redirect } from "next/navigation";
import { useGlobalStore } from "providers/StoreProvider";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import ActivityCard from "./ActivityCard";
import Title from "../Title";
import { ActivityWithParticipants } from "./ActivityInfo";
import NoData from "../common/NoData";

interface JoinedActivityProps {
  activities: ActivityWithParticipants[];
}

export default function JoinedActivity(props: JoinedActivityProps) {
  const { session } = useGlobalStore((state) => state);

  const { activities } = props;

  if (!session) {
    redirect("/signin");
  }

  return (
    <Stack width="100%" spacing={4}>
      <Title text="已參加的活動" hasGoBack={false} />
      {activities.length === 0 && <NoData />}
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
