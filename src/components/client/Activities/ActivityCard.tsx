import { Activity } from "@prisma/client";
import Card from "../Card";
import { DARK_BLUE, PRIMARY } from "colors";
import { Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useTypeIcon } from "hooks/useTypeIcon";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { ActivityWithParticipants } from "./ActivityInfo";
import { useScreenSize } from "hooks/useScreenSize";

interface ActivityCardProps {
  activity: ActivityWithParticipants;
}

export default function ActivityCard(props: ActivityCardProps) {
  const { activity } = props;

  const { getIcon } = useTypeIcon();

  const { isDesktopSize } = useScreenSize();

  return (
    <Card
      sx={{
        boxShadow: "0px 3px 3px #66666611",
        borderRadius: 4,
        color: DARK_BLUE,
        position: "relative",
        p: 2,
        paddingRight: "116px !important",
      }}
    >
      <Stack spacing={1.5}>
        <Typography
          variant="h5"
          fontSize={isDesktopSize ? "1.4rem" : "1.2rem"}
          fontWeight="bold"
        >
          {activity.name}
        </Typography>
        <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnIcon fontSize="small" />
            <Typography>{activity.location}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AttachMoneyIcon fontSize="small" />
            <Typography>{activity.fee} 元</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PeopleAltIcon fontSize="small" />
            <Typography>
              {activity.participants.length} / {activity.maxParticipants}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        position="absolute"
        right={0}
        top={0}
        spacing={1}
        height="100%"
        width={100}
        justifyContent="center"
        alignItems="center"
        sx={{
          background: PRIMARY[500],
        }}
      >
        <Image
          src={getIcon(activity.type)}
          alt={activity.type}
          width={36}
          height={36}
          priority
        />
        <Typography
          color="white"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {dayjs(activity.startDate).month() + 1}月{" "}
          {dayjs(activity.startDate).date()}日
        </Typography>
        <Typography
          color="white"
          fontSize={14}
          sx={{
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {dayjs(activity.startDate).hour()}:
          {dayjs(activity.startDate).minute().toString().padStart(2, "0")}
        </Typography>
      </Stack>
    </Card>
  );
}
