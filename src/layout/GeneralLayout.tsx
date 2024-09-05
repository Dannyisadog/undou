"use client";

import { Box, Stack } from "@mui/material";
import AppBar from "components/client/common/AppBar";
import Sidebar from "components/client/common/Sidebar";
import { useScreenSize } from "hooks/useScreenSize";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export default function GeneralLayout(props: GeneralLayoutProps) {
  const { children } = props;

  const { isDesktopSize } = useScreenSize();

  return (
    <Stack pt={6}>
      <AppBar />
      <Sidebar />
      <Box
        sx={{
          pl: isDesktopSize ? "220px" : 0,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
