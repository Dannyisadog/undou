import { Stack, Typography } from "@mui/material";
import { useScreenSize } from "hooks/useScreenSize";
import Button from "../Button";
import { ActivityWithParticipants } from "./ActivityInfo";
import { User } from "@prisma/client";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { getStatus } from "util/activity";
import { ActivityStatus } from "./ActivityStatusChip";

interface ActivityInfoFooterProps {
  activity: ActivityWithParticipants;
  user?: User;
  handleJoin: () => void;
  handleLeave: () => void;
  handleArchive: () => void;
  joinLoading: boolean;
  leaveLoading: boolean;
  archiveLoading: boolean;
}

export default function ActivityInfoFooter(props: ActivityInfoFooterProps) {
  const {
    activity,
    user,
    handleJoin,
    handleLeave,
    handleArchive,
    joinLoading,
    leaveLoading,
    archiveLoading,
  } = props;
  const { isDesktopSize } = useScreenSize();
  const isJoined = activity?.participants.some(
    (participant) => !participant.is_deleted && participant.userId === user?.id
  );
  const isOwner = activity?.creatorId === user?.id;
  const currentParticipants = activity.participants.length;
  const maxParticipants = activity.maxParticipants;
  const isFull = currentParticipants >= maxParticipants;
  const isArchived = !activity.is_active;
  const status = getStatus(activity);

  return (
    <Stack
      position="fixed"
      bottom={0}
      right={2}
      width="100%"
      height={80}
      alignItems="center"
      sx={{
        pl: isDesktopSize ? "266px" : 2,
        pr: 2,
        pb: 2,
      }}
    >
      <Stack
        maxWidth={1080}
        direction="row"
        spacing={2}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent={isArchived ? "center" : "space-between"}
        sx={{
          px: isDesktopSize ? 4 : 2,
          py: 1.5,
          backgroundColor: "white",
          borderRadius: 100,
          boxShadow: `0px 4px 4px #33333311`,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {!isArchived && (
            <>
              <PeopleAltIcon />
              <Typography variant="h5">
                {currentParticipants} / {maxParticipants}
              </Typography>
            </>
          )}
          {isFull && !isArchived && (
            <Typography color="primary" fontSize="1.1rem" fontWeight="bold">
              活動人數已滿
            </Typography>
          )}
          {isArchived && (
            <Typography color="primary" fontSize="1.2rem" fontWeight="bold">
              活動已封存
            </Typography>
          )}
        </Stack>
        {activity.is_active &&
          status === ActivityStatus.ENABLED &&
          activity.creatorId === user?.id && (
            <Button
              sx={{
                height: "100%",
                color: "white",
                borderRadius: 100,
              }}
              isLoading={archiveLoading}
              variant="contained"
              onClick={handleArchive}
            >
              <Typography>封存活動</Typography>
            </Button>
          )}
        {user &&
          !isOwner &&
          isJoined &&
          status === ActivityStatus.ENABLED &&
          activity.is_active && (
            <Button
              sx={{
                height: "100%",
                color: "white",
                borderRadius: 100,
              }}
              isLoading={leaveLoading}
              variant="contained"
              onClick={handleLeave}
            >
              <Typography>退出活動</Typography>
            </Button>
          )}
        {user &&
          !isOwner &&
          !isJoined &&
          status === ActivityStatus.ENABLED &&
          activity.is_active &&
          !isFull && (
            <Button
              sx={{
                height: "100%",
                color: "white",
                borderRadius: 100,
              }}
              isLoading={joinLoading}
              variant="contained"
              onClick={handleJoin}
            >
              <Typography>參加活動</Typography>
            </Button>
          )}
      </Stack>
    </Stack>
  );
}
