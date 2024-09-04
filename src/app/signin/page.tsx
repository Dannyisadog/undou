import { auth } from "auth";
import GoogleSigninButton from "components/client/GoogleSigninButton";
import { SigninForm } from "components/client/SigninForm";
import { redirect } from "next/navigation";
import Title from "components/client/Title";
import FacebookSigninButton from "components/client/FacebookSigninButton";
import LineSigninButton from "components/client/LineSigninButton";

export default async function Signin() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <Title text="運動火腿" />
      <SigninForm />
      <GoogleSigninButton />
      <FacebookSigninButton />
      <LineSigninButton />
    </>
  );
}
