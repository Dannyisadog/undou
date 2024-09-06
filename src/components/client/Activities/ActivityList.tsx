"use client";

import { useSearchParams } from "next/navigation";
import { getActivityItemByType } from "util/activity";
import Title from "../Title";
import { useCallback, useEffect, useState } from "react";
import { Activity } from "@prisma/client";
import { Card, Stack, Typography } from "@mui/material";
import { DARK_BLUE } from "colors";
import Link from "next/link";

export default function ActivityList() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "all";

  const item = getActivityItemByType(type);

  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchActivities = useCallback(async () => {
    const response = await fetch(`/api/activities?type=${type}`);
    const data = await response.json();
    setActivities(data);
  }, [type]);

  useEffect(() => {
    fetchActivities();
  }, [type, fetchActivities]);

  return (
    <Stack width="100%" spacing={4}>
      <Title hasGoBack={false} text={item ? `${item.label}活動` : "全部活動"} />
      {activities.length === 0 && <Typography>目前沒有任何活動</Typography>}
      <Stack spacing={2}>
        {activities.map((activity) => (
          <Link href={`/activity/${activity.id}`} key={activity.id}>
            <Card
              sx={{
                boxShadow: "0px 4px 4px #33333333",
                backgroundColor: "white",
                borderRadius: 3,
                color: DARK_BLUE,
                padding: 2,
              }}
            >
              <Stack spacing={0.5}>
                <Typography variant="h5">{activity.name}</Typography>
                <p>{activity.description}</p>
                <p>{activity.location}</p>
                <p>{activity.date.toString()}</p>
                <p>{activity.maxParticipants}</p>
                <p>{activity.type}</p>
              </Stack>
            </Card>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
