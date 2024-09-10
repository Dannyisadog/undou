"use client";

import { Select as MuiSelect, MenuItem as MuiMenuItem } from "@mui/material";

interface SelectProps<T> {
  items: T[];
  onChange: (value: T) => void;
  label: string;
  renderLabel: (value: T) => string;
  fullWidth?: boolean;
  placeholder?: string;
}

type MenuItemValue<T> = T extends string | number ? T : never;

export default function Select<T>(props: SelectProps<T>) {
  const { items, onChange, label, renderLabel, placeholder, ...reset } = props;
  return (
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
  );
}
