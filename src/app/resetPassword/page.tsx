import { Stack } from "@mui/material";
import ResetPasswordForm from "components/client/ResetPasswordForm";
import Title from "components/client/Title";
import AuthLayout from "layout/AuthLayout";
import { Suspense } from "react";

export default function ResetPasswordPage() {
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
