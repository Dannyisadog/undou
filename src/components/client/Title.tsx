import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { PRIMARY } from "colors";
interface TitleProps {
  text: string;
  hasGoBack?: boolean;
}

export default function Title(props: TitleProps) {
  const { text, hasGoBack = true } = props;
  return (
    <Stack justifyContent="center" width="100%">
      <Stack spacing={2} width="100%">
        <Stack direction="row" justifyContent="space-between">
          {hasGoBack ? (
            <Link href="/signin">
              <ArrowBackIosNewIcon />
            </Link>
          ) : (
            <Box />
          )}
        </Stack>
        <Typography variant="h4" color="primary">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}
