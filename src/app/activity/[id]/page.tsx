import { Typography } from "@mui/material";
import { Activity } from "@prisma/client";
import Title from "components/client/Title";
import GeneralLayout from "layout/GeneralLayout";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function ActivityPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const activity: Activity = await fetch(`${apiUrl}/activities/${id}`).then(
    (res) => res.json()
  );

  return (
    <GeneralLayout>
      <Title text={activity.name} />
      <Typography>{activity.description}</Typography>
      <Typography>{activity.date.toString()}</Typography>
      <Typography>{activity.location}</Typography>
      <Typography>{activity.maxParticipants}</Typography>
      <Typography>{activity.type}</Typography>
    </GeneralLayout>
  );
}
