import SendForgotPasswordLinkForm from "components/client/SendForgotPasswordLinkForm";
import Title from "components/client/Title";

export default async function Signin() {
  return (
    <>
      <Title text="忘記密碼" hasGoBack />
      <SendForgotPasswordLinkForm />
    </>
  );
}
