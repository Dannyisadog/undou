import AuthLayout from "layout/AuthLayout";
import { Metadata } from "next";
import SigninLayout from "layout/SigninLayout";
import Terms from "components/client/Terms";

export const metadata: Metadata = {
  title: "運動火腿 - 服務條款",
};

export default function TermsPage() {
  return (
    <AuthLayout>
      <SigninLayout>
        <Terms />
      </SigninLayout>
    </AuthLayout>
  );
}
