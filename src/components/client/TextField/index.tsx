import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  Stack,
  Typography,
} from "@mui/material";
import { DARK_BLUE } from "colors";

type TextFieldProps = MuiTextFieldProps;

export default function TextField(props: TextFieldProps) {
  const { label, ...rest } = props;
  return (
    <Stack width="100%" spacing={0.5}>
      {label && (
        <Typography fontWeight="bold" variant="body2" color={DARK_BLUE}>
          {label}
        </Typography>
      )}
      <MuiTextField
        sx={{
          "&.MuiTextField-root": {
            borderRadius: 1,
            backgroundColor: "transparent",
          },
        }}
        {...rest}
        label=""
      />
    </Stack>
  );
}
