"use client";

import {
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  Stack,
  Typography,
  FormHelperText,
} from "@mui/material";
import { DARK_BLUE } from "colors";

interface SelectProps<T> {
  items: T[];
  onChange: (value: T) => void;
  label: string;
  renderLabel: (value: T) => string;
  fullWidth?: boolean;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

type MenuItemValue<T> = T extends string | number ? T : never;

export default function Select<T>(props: SelectProps<T>) {
  const {
    items,
    onChange,
    label,
    renderLabel,
    placeholder,
    helperText,
    ...reset
  } = props;
  return (
    <Stack width="100%" spacing={0.5}>
      {label && (
        <Typography fontWeight="bold" variant="body2" color={DARK_BLUE}>
          {label}
        </Typography>
      )}
      <MuiSelect
        {...reset}
        displayEmpty
        onChange={(e) => {
          onChange(e.target.value as T);
        }}
        renderValue={(selected: T) => {
          if (!selected) {
            return placeholder;
          }

          return renderLabel(selected);
        }}
      >
        {items.map((item, index) => (
          <MuiMenuItem key={index} value={item as MenuItemValue<T>}>
            {renderLabel(item)}
          </MuiMenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <FormHelperText
          sx={{
            color: "#d32f2f",
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </Stack>
  );
}
