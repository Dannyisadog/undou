"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";

interface DateTimePickerProps extends MuiDateTimePickerProps<Dayjs> {
  fullWidth?: boolean;
}

export default function DatePicker(props: DateTimePickerProps) {
  const { fullWidth, ...rest } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateTimePicker
        format="YYYY/MM/DD HH:mm"
        sx={{
          width: fullWidth ? "100%" : "auto",
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
}
