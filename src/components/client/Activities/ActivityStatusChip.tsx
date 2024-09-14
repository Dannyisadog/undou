import { Chip } from "@mui/material";
import { getStatusColorType, getStatusLabel } from "util/activity";

export enum ActivityStatus {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
  OUT_DATE = "OUT_DATE",
  ARCHIVED = "ARCHIVED",
}

interface ActivityStatusChipProps {
  status: ActivityStatus;
}

export default function ActivityStatusChip(props: ActivityStatusChipProps) {
  const { status } = props;

  const label = getStatusLabel(status);
  const colorType = getStatusColorType(status);

  return (
    <Chip
      label={label}
      color={colorType}
      size="small"
      sx={{
        fontWeight: "bold",
        width: 70,
        color: "white",
      }}
    />
  );
}
