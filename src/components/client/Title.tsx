import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GitHubIcon from "@mui/icons-material/GitHub";

interface TitleProps {
  text: string;
  hasGoBack?: boolean;
}

export default function Title(props: TitleProps) {
  const { text, hasGoBack = true } = props;
  return (
    <Stack justifyContent="center">
      <Stack spacing={2}>
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
