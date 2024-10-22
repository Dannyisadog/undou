"use client";

import { Box, Stack } from "@mui/material";
import AppBar from "components/client/common/AppBar";
import Drawer from "components/client/common/Drawer";
import Sidebar from "components/client/common/Sidebar";
import { useDisclosure } from "hooks/useDisclosure";
import { useScreenSize } from "hooks/useScreenSize";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export default function GeneralLayout(props: GeneralLayoutProps) {
  const { children } = props;

  const { isDesktopSize } = useScreenSize();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack py={6}>
      <AppBar openDrawer={onOpen} />
      {isDesktopSize && <Sidebar closeDrawer={onClose} />}
      <Drawer open={isOpen} onClose={onClose} />
      <Box
        sx={{
          pl: isDesktopSize ? "250px" : 0,
        }}
      >
        <Stack
          pt={4}
          width="100%"
          maxWidth="1080px"
          alignItems="center"
          px={isDesktopSize ? 0 : 2}
          sx={{
            margin: "0 auto",
          }}
        >
          {children}
        </Stack>
      </Box>
    </Stack>
  );
}
