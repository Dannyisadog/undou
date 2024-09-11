"use client";

import { Activity, Participant, User } from "@prisma/client";
import Title from "../Title";
import { Typography } from "@mui/material";
import { useState } from "react";
import { userAgent } from "next/server";
import Button from "../Button";

export type ActivityWithParticipants = Activity & {
  participants: Participant[];
};

interface ActivityInfoProps {
  activity: ActivityWithParticipants;
  user: User;
}

export default function ActivityInfo(props: ActivityInfoProps) {
  const { activity: defaultActivity, user } = props;

  const [activity, setActivity] =
    useState<ActivityWithParticipants>(defaultActivity);

  const [loading, setLoading] = useState(false);

  const isJoined = activity.participants.some(
    (participant) => !participant.is_deleted && participant.userId === user.id
  );

  const isOwner = activity.creatorId === user.id;

  const updateActivity = async () => {
    const newActivity = await fetch(`/api/activities/${activity.id}`).then(
      (res) => res.json()
    );
    setActivity(newActivity);
  };

  const handleJoin = async () => {
    setLoading(true);
    await fetch(`/api/activities/join/${activity.id}`, {
      method: "POST",
    });
    setLoading(false);
    updateActivity();
  };
  const handleLeave = async () => {
    setLoading(true);
    await fetch(`/api/activities/disjoin/${activity.id}`, {
      method: "POST",
    });
    setLoading(false);
    updateActivity();
  };

  const handleArchive = async () => {
    setLoading(true);
    await fetch(`/api/activities/${activity.id}`, {
      method: "DELETE",
    });
    setLoading(false);
    updateActivity();
  };

  return (
    <>
      <Title text={activity.name} />
      {activity.is_active && (
        <Button isLoading={loading} variant="outlined" onClick={handleArchive}>
          封存活動
        </Button>
      )}
      {!activity.is_active && <Typography>活動已封存</Typography>}
      {isOwner && <Typography>你是活動的主辦人</Typography>}
      {!isOwner && !isJoined && activity.is_active && (
        <Button
          variant="contained"
          isLoading={loading}
          onClick={handleJoin}
          sx={{
            color: "white",
          }}
        >
          參加活動
        </Button>
      )}
      {!isOwner && isJoined && activity.is_active && (
        <Button variant="outlined" isLoading={loading} onClick={handleLeave}>
          退出活動
        </Button>
      )}
      <Typography>{activity.description}</Typography>
      <Typography>{activity.startDate.toString()}</Typography>
      <Typography>{activity.endDate.toString()}</Typography>
      <Typography>{activity.location}</Typography>
      <Typography>{activity.maxParticipants}</Typography>
      <Typography>{activity.fee}</Typography>
      <Typography>{activity.type}</Typography>
    </>
  );
}
