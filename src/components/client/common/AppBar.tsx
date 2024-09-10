"use client";

import {
  Box,
  IconButton,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import TextField from "../TextField";
import { useScreenSize } from "hooks/useScreenSize";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import multiavatar from "@multiavatar/multiavatar/esm";
import Button from "../Button";
import { useGlobalStore } from "providers/StoreProvider";

interface AppBarProps {
  openDrawer: () => void;
}

export default function AppBar(props: AppBarProps) {
  const { openDrawer } = props;

  const { isDesktopSize, isMobileSize } = useScreenSize();

  const { session } = useGlobalStore((state) => state);

  const authUser = session?.authUser;

  const svgCode = multiavatar(authUser?.email as string);

  return (
    <MuiAppBar
      position="fixed"
      elevation={4}
      sx={{
        "&.MuiPaper-root": {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          pr: "0 !important",
        },
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            maxWidth={isDesktopSize ? 250 : "auto"}
          >
            {isDesktopSize && (
              <Link href="/">
                <Stack direction="row" alignItems="center">
                  <Image
                    priority
                    width={40}
                    height={40}
                    src="/appbar-logo.png"
                    alt="運動火腿"
                  />
                  <Typography
                    color="primary"
                    variant="h5"
                    noWrap
                    component="a"
                    ml={2}
                  >
                    運動火腿
                  </Typography>
                </Stack>
              </Link>
            )}
            {isMobileSize && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={openDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
          <TextField
            variant="outlined"
            size="small"
            placeholder="搜尋活動類型或名稱..."
            InputProps={{ sx: { borderRadius: 8, fontSize: 14, px: 1 } }}
            sx={{
              maxWidth: isDesktopSize ? 400 : 300,
              ml: isDesktopSize ? 2 : 1,
            }}
          />
        </Stack>
        <Stack>
          {authUser ? (
            <Link href="/profile">
              <Box
                sx={{
                  ml: 1,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justifyContent="end"
                >
                  {session?.authUser.image && (
                    <Box
                      sx={{
                        borderRadius: 100,
                        overflow: "hidden",
                        width: 28,
                        height: 28,
                      }}
                    >
                      <Image
                        width={28}
                        height={28}
                        src={session?.authUser?.image}
                        alt="Profile"
                      />
                    </Box>
                  )}
                  {!session?.authUser.image && (
                    <Box
                      dangerouslySetInnerHTML={{ __html: svgCode }}
                      width={24}
                      height={24}
                    />
                  )}
                  {isDesktopSize && (
                    <Typography fontWeight="bold">
                      {session?.authUser.name}
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Link>
          ) : (
            <Link href="/signin">
              <Button
                variant="outlined"
                sx={{
                  height: 36,
                  ml: 1,
                  borderRadius: 20,
                }}
              >
                <Typography fontWeight={600}>登入</Typography>
              </Button>
            </Link>
          )}
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
}
