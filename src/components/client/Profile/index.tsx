"use client";

import { Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { useGlobalStore } from "providers/StoreProvider";
import Title from "../Title";
import UserAvatar from "../UserAvatar";
import SignoutButton from "../SignoutButton";

export default function Profile() {
  const { session } = useGlobalStore((state) => state);

  if (!session) {
    redirect("/signin");
  }

  const emailVerified = !!session.authUser.emailVerified;

  return (
    <Stack width={400} spacing={2} px={4}>
      <Title text="基本資訊" hasGoBack={false} />
      <UserAvatar />
      <Stack direction="row" spacing={2}>
        <Typography textAlign="center">帳號:</Typography>
        <Typography textAlign="center">{session.authUser.email}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography textAlign="center">使用者名稱:</Typography>
        <Typography textAlign="center">{session.authUser.name}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography textAlign="center">狀態:</Typography>
        <Typography textAlign="center">
          {emailVerified ? "已驗證" : "尚未驗證"}
        </Typography>
      </Stack>
      <SignoutButton />
    </Stack>
  );
}
