import { auth } from "auth";
import { redirect } from "next/navigation";
import AuthLayout from "layout/AuthLayout";
import Signin from "components/client/signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 登入",
};

export default async function SigninPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <AuthLayout>
      <Signin />
    </AuthLayout>
  );
}
