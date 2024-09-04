/* eslint-disable @next/next/no-img-element */
interface ResetPasswordEmailProps {
  firstName: string;
  token: string;
}

const url = process.env.URL;

export const ResetPasswordEmail = (props: ResetPasswordEmailProps) => {
  const { firstName, token } = props;
  return (
    <html>
      <body style={main}>
        <div style={container}>
          <img
            src={`https://undou.dannyisadog.com/logo.png`}
            width="50"
            height="50"
            alt="運動火腿"
            style={logo}
          />
          <p style={paragraph}>Hi {firstName},</p>
          <p style={paragraph}>
            您收到此封信是因為我們收到了您的密碼重設請求。
            如果您沒有發出此請求，請忽略此封信。
          </p>
          <section style={btnContainer}>
            <a style={button} href={`${url}/resetPassword?token=${token}`}>
              重設密碼
            </a>
          </section>
          <p style={paragraph}>運動火腿團隊</p>
        </div>
      </body>
    </html>
  );
};

ResetPasswordEmail.PreviewProps = {
  firstName: "",
} as ResetPasswordEmailProps;

export default ResetPasswordEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  maxWidth: "37.5em",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#0773f7",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};
