import { Stack } from "@mui/material";
import RegisterForm from "components/client/RegisterForm";
import Title from "components/client/Title";
import AuthLayout from "layout/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 註冊",
};

export default async function RegisterPage() {
  return (
    <AuthLayout>
      <Stack
        sx={{
          alignItems: "center",
        }}
        pt={4}
      >
        <Stack width="100%" maxWidth={400} spacing={2} px={2}>
          <Title text="註冊" hasGoBack />
          <RegisterForm />
        </Stack>
      </Stack>
    </AuthLayout>
  );
}
