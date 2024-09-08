import { Stack } from "@mui/material";
import { auth } from "auth";
import ResetPasswordForm from "components/client/ResetPasswordForm";
import Title from "components/client/Title";
import AuthLayout from "layout/AuthLayout";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "運動火腿 - 重設密碼",
};

export default async function ResetPasswordPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <AuthLayout>
      <Stack
        sx={{
          alignItems: "center",
        }}
        pt={4}
      >
        <Stack width="100%" maxWidth={400} spacing={2} px={2}>
          <Title text="重設密碼" />
          <Suspense fallback={<></>}>
            <ResetPasswordForm />
          </Suspense>
        </Stack>
      </Stack>
    </AuthLayout>
  );
}
