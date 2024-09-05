"use client";

import {
  Box,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import TextField from "../TextField";
import { useScreenSize } from "hooks/useScreenSize";
import Link from "next/link";
import Button from "../Button";
import { useProvider } from "providers/Provider";
import multiavatar from "@multiavatar/multiavatar/esm";

export default function AppBar() {
  const { isDesktopSize } = useScreenSize();

  const { session } = useProvider();

  const { authUser } = session;

  const svgCode = multiavatar(authUser.email as string);

  return (
    <MuiAppBar position="fixed" elevation={4}>
      <Toolbar
        sx={{
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Link href="/signin">
            <Stack
              direction="row"
              alignItems="center"
              maxWidth={isDesktopSize ? 220 : "auto"}
            >
              <Image
                priority
                width={40}
                height={40}
                src="/appbar-logo.png"
                alt="運動火腿"
              />
              {isDesktopSize && (
                <Typography
                  color="primary"
                  variant="h6"
                  noWrap
                  component="a"
                  ml={2}
                >
                  運動火腿
                </Typography>
              )}
            </Stack>
          </Link>
          <TextField
            variant="outlined"
            size="small"
            placeholder="搜尋活動"
            InputProps={{ sx: { borderRadius: 8, fontSize: 14, px: 1 } }}
            sx={{
              maxWidth: isDesktopSize ? 400 : 300,
              ml: isDesktopSize ? 2 : 1,
            }}
          />
        </Stack>
        <Stack>
          <Link href="/profile">
            <Button
              variant="outlined"
              sx={{
                width: 120,
                borderRadius: 12,
                ml: 1,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                {session.authUser.image && (
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
                {!session.authUser.image && (
                  <Box
                    dangerouslySetInnerHTML={{ __html: svgCode }}
                    width={24}
                    height={24}
                  />
                )}
                <Typography>{session.authUser.name}</Typography>
              </Stack>
            </Button>
          </Link>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
}
