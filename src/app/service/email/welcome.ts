import SigninWelcomeEmail from "components/email/SigninWelcome";
import { sendEmail } from ".";

export const sendWelcomeEmail = async (firstName: string, email: string) => {
  const subject = "歡迎加入運動火腿";

  try {
    sendEmail({
      to: [email],
      subject,
      template: SigninWelcomeEmail({ firstName }),
    });
  } catch (error) {
    console.error(error);
  }
};
