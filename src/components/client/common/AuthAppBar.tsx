"use client";

import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { DARK_BLUE } from "colors";
import { useScreenSize } from "hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

export default function AuthAppBar() {
  const { isDesktopSize } = useScreenSize();
  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        "&.MuiPaper-root": {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "white",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={isDesktopSize ? 4 : 2}
        >
          <Link href="/">
            <Stack direction="row" alignItems="center">
              <Image
                priority
                width={40}
                height={40}
                src="/appbar-logo.png"
                alt="運動火腿"
              />
              <Typography color="primary" variant="h5" noWrap ml={2}>
                運動火腿
              </Typography>
            </Stack>
          </Link>
          <Link href="/">
            <Typography fontWeight={600} color={DARK_BLUE}>
              所有活動
            </Typography>
          </Link>
          {isDesktopSize && (
            <>
              <Link href="/signin">
                <Typography fontWeight={600} color={DARK_BLUE}>
                  登入
                </Typography>
              </Link>
              <Link href="/about">
                <Typography fontWeight={600} color={DARK_BLUE}>
                  關於平台
                </Typography>
              </Link>
              <Link href="/privacy">
                <Typography fontWeight={600} color={DARK_BLUE}>
                  隱私權政策
                </Typography>
              </Link>
              <Link href="/terms">
                <Typography fontWeight={600} color={DARK_BLUE}>
                  服務條款
                </Typography>
              </Link>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
