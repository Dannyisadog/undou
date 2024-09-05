"use client";

import { Stack, Typography } from "@mui/material";
import { useScreenSize } from "hooks/useScreenSize";
import Image from "next/image";
import Title from "../Title";
import { SigninForm } from "../SigninForm";
import GoogleSigninButton from "../GoogleSigninButton";
import FacebookSigninButton from "../FacebookSigninButton";
import LineSigninButton from "../LineSigninButton";
import SigninImage from "./signin-image.svg";

export default function Signin() {
  const { isDesktopSize } = useScreenSize();

  return (
    <Stack
      direction="row"
      spacing={8}
      justifyContent="center"
      alignItems="center"
      sx={{
        height: isDesktopSize ? "calc(100vh - 64px)" : "auto",
        pt: isDesktopSize ? 0 : 2,
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
      <Stack spacing={2} maxWidth={400} width="100%" px={2}>
        <Title text="登入" hasGoBack={false} />
        <SigninForm />
        <GoogleSigninButton />
        <FacebookSigninButton />
        <LineSigninButton />
      </Stack>
    </Stack>
  );
}
