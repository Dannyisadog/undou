"use client";

import { Activity, Participant, User } from "@prisma/client";
import Title from "../Title";
import { CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { userAgent } from "next/server";
import Button from "../Button";
import { useGlobalStore } from "providers/StoreProvider";
import { redirect, useParams, useSearchParams } from "next/navigation";
import { useActivity } from "hooks/api/useActivity";
import { useJoinActivityMutation } from "hooks/api/useJoinActivityMutation";
import { useLeaveActivityMutation } from "hooks/api/useLeaveActivityMutation";
import { useArchiveActivityMutation } from "hooks/api/useArchiveActivityMutation";

export type ActivityWithParticipants = Activity & {
  participants: Participant[];
};

export default function ActivityInfo() {
  const { session } = useGlobalStore((state) => state);

  const user = session?.authUser;

  const params = useParams();

  const { id } = params;

  const {
    data: activity,
    isLoading: fetchingActivity,
    refetch,
  } = useActivity(parseInt(id as string));

  const joinActivityMutation = useJoinActivityMutation({
    onSuccess: refetch,
  });
  const leaveActivityMutation = useLeaveActivityMutation({
    onSuccess: refetch,
  });
  const archiveMutation = useArchiveActivityMutation({
    onSuccess: refetch,
  });

  const isJoined = activity?.participants.some(
    (participant) => !participant.is_deleted && participant.userId === user?.id
  );

  const isOwner = activity?.creatorId === user?.id;

  const handleJoin = async () => {
    await joinActivityMutation.mutateAsync(id as string);
  };
  const handleLeave = async () => {
    await leaveActivityMutation.mutateAsync(id as string);
  };
  const handleArchive = async () => {
    await archiveMutation.mutateAsync(id as string);
  };

  if (!id) {
    redirect("/");
  }

  return activity ? (
    <>
      <Title text={activity.name} />
      {activity.is_active && activity.creatorId === user?.id && (
        <Button
          variant="outlined"
          onClick={handleArchive}
          isLoading={archiveMutation.isLoading}
        >
          封存活動
        </Button>
      )}
      {!activity.is_active && <Typography>活動已封存</Typography>}
      {isOwner && <Typography>你是活動的主辦人</Typography>}
      {user && !isOwner && !isJoined && activity.is_active && (
        <Button
          variant="contained"
          onClick={handleJoin}
          isLoading={joinActivityMutation.isLoading}
          sx={{
            color: "white",
          }}
        >
          參加活動
        </Button>
      )}
      {user && !isOwner && isJoined && activity.is_active && (
        <Button
          variant="outlined"
          isLoading={leaveActivityMutation.isLoading}
          onClick={handleLeave}
        >
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
  ) : (
    <CircularProgress />
  );
}
