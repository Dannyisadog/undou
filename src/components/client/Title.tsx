"use client";

import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
interface TitleProps {
  text: string;
  hasGoBack?: boolean;
}

export default function Title(props: TitleProps) {
  const { text, hasGoBack = true } = props;
  const router = useRouter();
  return (
    <Stack justifyContent="center" width="100%">
      <Stack spacing={2} width="100%">
        <Stack direction="row" justifyContent="space-between">
          {hasGoBack ? (
            <ArrowBackIosNewIcon
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                router.back();
              }}
            />
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
