import { Activity } from "@prisma/client";
import Card from "../Card";
import { DARK_BLUE } from "colors";
import { Stack, Typography } from "@mui/material";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard(props: ActivityCardProps) {
  const { activity } = props;

  return (
    <Card
      sx={{
        boxShadow: "0px 3px 3px 3px #33333322",
        backgroundColor: "white",
        borderRadius: 3,
        color: DARK_BLUE,
        padding: 2,
        height: 180,
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
  );
}
