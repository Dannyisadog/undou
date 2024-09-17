"use client";

import { Activity, Comment, Participant, User } from "@prisma/client";
import Title from "../Title";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { userAgent } from "next/server";
import Button from "../Button";
import { useGlobalStore } from "providers/StoreProvider";
import { redirect, useParams, useSearchParams } from "next/navigation";
import { useActivity } from "hooks/api/useActivity";
import { useJoinActivityMutation } from "hooks/api/useJoinActivityMutation";
import { useLeaveActivityMutation } from "hooks/api/useLeaveActivityMutation";
import { useArchiveActivityMutation } from "hooks/api/useArchiveActivityMutation";
import RunningLoading from "../common/RunningLoading";
import { useScreenSize } from "hooks/useScreenSize";
import ActivityInfoFooter from "./ActivityInfoFooter";
import TextItem from "./TextItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AssignmentIcon from "@mui/icons-material/Assignment";
import dayjs from "dayjs";
import { items } from "../common/Sidebar";
import UserList, { UserListItem } from "./UserList";
import ShareButton from "./ShareButton";
import ActivityStatusChip from "./ActivityStatusChip";
import { getStatus } from "util/activity";
import CommentBlock from "./CommentBlock";

export type ParticipantWithUser = Participant & {
  user: User;
};

export type ActivityWithParticipants = Activity & {
  participants: ParticipantWithUser[];
  owner: User;
  comments: Comment[];
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

  const { isDesktopSize, isMobileSize } = useScreenSize();

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

  const item = items.find((item) => item.type === activity?.type);

  const joinedUser =
    activity?.participants.map((participant) => {
      return participant.user;
    }) ?? [];

  const status = getStatus(activity);

  return activity ? (
    <Stack pt={isMobileSize ? 0 : 4} width="100%" spacing={2}>
      <Title text={activity.name} />
      <ActivityStatusChip status={status} />
      <Stack direction="row" alignItems="start" justifyContent="start">
        <ShareButton />
      </Stack>
      <Stack
        mt={2}
        direction={isMobileSize ? "column" : "row"}
        spacing={isMobileSize ? 6 : 0}
        width="100%"
        maxWidth="1080px"
        sx={{
          p: 3,
          borderRadius: 4,
          backgroundColor: "white",
        }}
      >
        <Stack spacing={2} width="100%">
          <Typography variant="h5">基本資訊</Typography>
          <TextItem
            label="活動類型"
            text={item?.label ?? "未知"}
            icon={<CelebrationIcon color="primary" />}
          />
          <TextItem
            label="地點"
            text={activity.location}
            icon={<LocationOnIcon color="primary" />}
          />
          <TextItem
            label="縣市-區"
            text={activity.city + "-" + activity.area}
            icon={<LocationOnIcon color="primary" />}
          />
          <TextItem
            label="費用 (現場付款)"
            text={activity.fee.toString()}
            icon={<AttachMoneyIcon color="primary" />}
          />
          <TextItem
            label="開始時間"
            text={dayjs(activity.startDate).format("YYYY-MM-DD HH:mm")}
            icon={<CalendarMonthIcon color="primary" />}
          />
          <TextItem
            label="結束時間"
            text={dayjs(activity.endDate).format("YYYY-MM-DD HH:mm")}
            icon={<CalendarMonthIcon color="primary" />}
          />
          <TextItem
            label="活動描述"
            text={activity.description}
            icon={<AssignmentIcon color="primary" />}
          />
        </Stack>
        <Stack spacing={2} width="100%">
          <Stack spacing={2} width="100%">
            <Typography variant="h5">擁有者</Typography>
            <UserListItem user={activity.owner} />
          </Stack>
          <Stack spacing={2} width="100%">
            <Typography variant="h5">參加名單</Typography>
            <UserList users={joinedUser} />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        spacing={2}
        width="100%"
        maxWidth="1080px"
        sx={{
          mb: "80px !important",
          p: 3,
          backgroundColor: "white",
          borderRadius: 4,
        }}
      >
        <CommentBlock activityId={id as string} />
      </Stack>
      <ActivityInfoFooter
        handleJoin={handleJoin}
        handleLeave={handleLeave}
        handleArchive={handleArchive}
        activity={activity}
        user={user}
        joinLoading={joinActivityMutation.isLoading}
        leaveLoading={leaveActivityMutation.isLoading}
        archiveLoading={archiveMutation.isLoading}
      />
    </Stack>
  ) : (
    <Box pt={isMobileSize ? "20vh" : "15vh"}>
      <RunningLoading />
    </Box>
  );
}
