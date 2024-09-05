import VerifyEmail from "components/email/Verify";
import { sendEmail } from ".";
import { generateVerificationToken } from "../verification";

export const sendVerificationEmail = async (
  firstName: string,
  email: string
) => {
  const subject = "驗證您的電子信箱";

  const token = generateVerificationToken(email);

  try {
    sendEmail({
      to: [email],
      subject,
      template: VerifyEmail({
        firstName,
        token,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};
