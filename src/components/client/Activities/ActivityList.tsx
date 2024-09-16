"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getActivityItemByType } from "util/activity";
import Title from "../Title";
import { alpha, Fab, Stack } from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import ActivityCard from "./ActivityCard";
import ActivityListSkeleton from "./ActivityListSkeleton";
import { useActivities } from "hooks/api/useActivities";
import NoData from "../common/NoData";
import { DARK_BLUE } from "colors";
import { useScreenSize } from "hooks/useScreenSize";

export default function ActivityList() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "all";

  const item = getActivityItemByType(type);

  const { data: activities, isLoading } = useActivities(type);

  const router = useRouter();

  const { isMobileSize } = useScreenSize();

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
      {isMobileSize && (
        <Fab
          onClick={() => router.push("/activity/create")}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            backgroundColor: alpha(DARK_BLUE, 0.9),
            color: "white",
            ":hover": {
              backgroundColor: DARK_BLUE,
            },
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </Stack>
  );
}
