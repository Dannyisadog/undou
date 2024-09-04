import ResetPasswordForm from "components/client/ResetPasswordForm";
import Title from "components/client/Title";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <>
      <Title text="重設密碼" />
      <Suspense fallback={<></>}>
        <ResetPasswordForm />
      </Suspense>
    </>
  );
}
