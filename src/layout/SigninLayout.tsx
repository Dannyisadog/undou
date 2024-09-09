"use client";

import { Stack, Typography } from "@mui/material";
import { DARK_BLUE } from "colors";
import { useScreenSize } from "hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";
import SigninImage from "./signin-image.svg";

interface SigninLayoutProps {
  children: React.ReactNode;
}

export default function SigninLayout(props: SigninLayoutProps) {
  const { children } = props;
  const { isDesktopSize, isMobileSize } = useScreenSize();

  return (
    <Stack
      direction="row"
      spacing={8}
      justifyContent="center"
      alignItems="center"
      sx={{
        height: isDesktopSize ? "calc(100vh - 64px)" : "auto",
        pt: isDesktopSize ? 0 : 2,
        pb: isDesktopSize ? 0 : 4,
      }}
    >
      {isDesktopSize && (
        <Stack alignItems="center" spacing={1}>
          <Image
            priority
            width={434}
            height={508}
            src={SigninImage}
            alt="登入頁面"
          />
          <Typography variant="h6">來當個運動火腿</Typography>
          <Typography variant="body2" textAlign="center">
            找不到人一起運動嗎 ? <br />
            趕快和大家一起找找哪邊有運動可以參加 !
          </Typography>
        </Stack>
      )}
      <Stack spacing={2} maxWidth={500} width="100%" px={2}>
        {children}
        {isMobileSize && (
          <Stack
            spacing={4}
            maxWidth={400}
            width="100%"
            direction="row"
            justifyContent="space-between"
            sx={{
              mt: "48px !important",
            }}
          >
            <Link href="/about">
              <Typography variant="body2" fontWeight={600} color={DARK_BLUE}>
                關於平台
              </Typography>
            </Link>
            <Link href="/privacy">
              <Typography variant="body2" fontWeight={600} color={DARK_BLUE}>
                隱私權政策
              </Typography>
            </Link>
            <Link href="/terms">
              <Typography variant="body2" fontWeight={600} color={DARK_BLUE}>
                服務條款
              </Typography>
            </Link>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
