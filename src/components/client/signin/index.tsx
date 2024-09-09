"use client";

import { useScreenSize } from "hooks/useScreenSize";
import Title from "../Title";
import { SigninForm } from "../SigninForm";
import GoogleSigninButton from "../GoogleSigninButton";
import FacebookSigninButton from "../FacebookSigninButton";
import LineSigninButton from "../LineSigninButton";
import SigninLayout from "layout/SigninLayout";

export default function Signin() {
  const { isDesktopSize, isMobileSize } = useScreenSize();

  return (
    <SigninLayout>
      <Title text="登入" hasGoBack={false} />
      <SigninForm />
      <GoogleSigninButton />
      <FacebookSigninButton />
      <LineSigninButton />
    </SigninLayout>
  );
}
