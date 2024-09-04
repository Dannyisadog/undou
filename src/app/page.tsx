import SignoutButton from "components/client/SignoutButton";
import { auth, CustomSession } from "auth";
import { redirect } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import Title from "components/client/Title";
import UserAvatar from "components/client/UserAvatar";
import Provider from "providers/Provider";

export default async function Home() {
  const session = (await auth()) as CustomSession;

  if (!session || !session.user || !session.user?.email) {
    redirect("/signin");
  }

  const emailVerified = !!session.authUser.emailVerified;

  return (
    <Provider session={session}>
      <Title text="基本資訊" />
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
    </Provider>
  );
}
