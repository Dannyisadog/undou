import { auth } from "auth";
import { redirect } from "next/navigation";
import AuthLayout from "layout/AuthLayout";
import Signin from "components/client/signin";

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
