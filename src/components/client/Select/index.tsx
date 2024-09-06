"use client";

import {
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  SelectProps as MuiSelectProps,
} from "@mui/material";

interface SelectProps<T> {
  items: T[];
  onChange: (value: T) => void;
  label: string;
  renderLabel: (value: T) => string;
  fullWidth?: boolean;
}

type MenuItemValue<T> = T extends string | number ? T : never;

export default function Select<T>(props: SelectProps<T>) {
  const { items, onChange, label, renderLabel, ...reset } = props;
  return (
    <MuiSelect
      {...reset}
      onChange={(e) => {
        onChange(e.target.value as T);
      }}
    >
      {items.map((item, index) => (
        <MuiMenuItem key={index} value={item as MenuItemValue<T>}>
          {renderLabel(item)}
        </MuiMenuItem>
      ))}
    </MuiSelect>
  );
}
