import SignoutButton from "components/client/SignoutButton";
import { auth, CustomSession } from "auth";
import { redirect } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import Title from "components/client/Title";
import UserAvatar from "components/client/UserAvatar";
import Provider from "providers/Provider";
import GeneralLayout from "layout/GeneralLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 個人資訊",
};

export default async function ProfilePage() {
  const session = (await auth()) as CustomSession;

  if (!session || !session.user || !session.user?.email) {
    redirect("/signin");
  }

  const emailVerified = !!session.authUser.emailVerified;

  return (
    <Provider session={session}>
      <GeneralLayout>
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
      </GeneralLayout>
    </Provider>
  );
}
