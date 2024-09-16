import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  Stack,
  Typography,
} from "@mui/material";
import { DARK_BLUE } from "colors";

type TextFieldProps = {
  required?: boolean;
} & MuiTextFieldProps;

export default function TextField(props: TextFieldProps) {
  const { required, label, ...rest } = props;
  return (
    <Stack width="100%" spacing={0.5}>
      {(label || required) && (
        <Stack direction="row" alignItems="center" spacing={0.5}>
          {required && (
            <Typography fontWeight="bold" variant="body2" color={DARK_BLUE}>
              *
            </Typography>
          )}
          {label && (
            <Typography fontWeight="bold" variant="body2" color={DARK_BLUE}>
              {label}
            </Typography>
          )}
        </Stack>
      )}
      <MuiTextField
        sx={{
          "&.MuiTextField-root": {
            borderRadius: 1,
          },
          ".MuiInputBase-root": {
            backgroundColor: "white",
          },
        }}
        FormHelperTextProps={{
          style: {
            marginLeft: 0,
            marginRight: 0,
          },
        }}
        {...rest}
        label=""
      />
    </Stack>
  );
}
