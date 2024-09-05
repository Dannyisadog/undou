import { Box, Stack } from "@mui/material";
import SendForgotPasswordLinkForm from "components/client/SendForgotPasswordLinkForm";
import Title from "components/client/Title";
import AuthLayout from "layout/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 忘記密碼",
};

export default async function Signin() {
  return (
    <AuthLayout>
      <Stack
        sx={{
          alignItems: "center",
        }}
        pt={4}
      >
        <Stack width="100%" maxWidth={400} spacing={2} px={2}>
          <Title text="忘記密碼" hasGoBack />
          <SendForgotPasswordLinkForm />
        </Stack>
      </Stack>
    </AuthLayout>
  );
}
