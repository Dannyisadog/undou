import AuthLayout from "layout/AuthLayout";
import { Metadata } from "next";
import SigninLayout from "layout/SigninLayout";
import Privacy from "components/client/Privacy";

export const metadata: Metadata = {
  title: "運動火腿 - 隱私權政策",
};

export default function PrivacyPage() {
  return (
    <AuthLayout>
      <SigninLayout>
        <Privacy />
      </SigninLayout>
    </AuthLayout>
  );
}
