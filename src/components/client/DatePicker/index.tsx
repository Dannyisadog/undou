"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { Stack, Typography } from "@mui/material";
import { DARK_BLUE, PRIMARY } from "colors";

interface DateTimePickerProps extends MuiDateTimePickerProps<Dayjs> {
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

export default function DatePicker(props: DateTimePickerProps) {
  const { fullWidth, label, error, helperText, ...rest } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack width="100%" spacing={0.5}>
        {label && (
          <Typography fontWeight="bold" variant="body2" color={DARK_BLUE}>
            {label}
          </Typography>
        )}
        <MuiDateTimePicker
          format="YYYY/MM/DD HH:mm"
          sx={{
            width: fullWidth ? "100%" : "auto",
            fieldset: {
              border: error ? "1px solid #d32f2f;" : "1px solid #E0E0E0",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: error ? "#d32f2f" : "#E0E0E0",
              },
              "&.Mui-focused fieldset": {
                borderColor: error ? "#d32f2f" : PRIMARY.main,
              },
            },
          }}
          {...rest}
          label=""
          slotProps={{
            textField: {
              helperText,
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
