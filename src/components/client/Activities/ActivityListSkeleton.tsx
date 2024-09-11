import { DARK_BLUE } from "colors";
import Card from "../Card";
import { Skeleton, Stack } from "@mui/material";

function ActivityItemSkeleton() {
  return (
    <Card
      sx={{
        boxShadow: "0px 3px 3px #66666611",
        borderRadius: 4,
        padding: 2,
        height: 150,
      }}
    >
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1.2rem", width: 200 }} />
        <Stack spacing={0.5}>
          <Skeleton variant="text" sx={{ fontSize: "0.8rem", width: 120 }} />
          <Skeleton variant="text" sx={{ fontSize: "0.8rem", width: 170 }} />
          <Skeleton variant="text" sx={{ fontSize: "0.8rem", width: 140 }} />
          <Skeleton variant="text" sx={{ fontSize: "0.8rem", width: 170 }} />
        </Stack>
      </Stack>
    </Card>
  );
}

export default function ActivityListSkeleton() {
  return (
    <Stack spacing={2}>
      <ActivityItemSkeleton />
      <ActivityItemSkeleton />
      <ActivityItemSkeleton />
    </Stack>
  );
}
