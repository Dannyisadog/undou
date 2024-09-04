/* eslint-disable @next/next/no-img-element */
interface VerifyEmailProps {
  firstName: string;
  token: string;
}

export const VerifyEmail = (props: VerifyEmailProps) => {
  const { firstName, token } = props;
  const url = process.env.URL;
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
            歡迎加入運動火腿！
            <br />
            請點擊下方按鈕驗證您的電子郵件。
          </p>
          <section style={btnContainer}>
            <a style={button} href={`${url}/verification?token=${token}`}>
              驗證電子郵件
            </a>
          </section>
          <p style={paragraph}>
            感謝您的加入，我們期待與您一起運動！
            <br />
            運動火腿團隊
          </p>
        </div>
      </body>
    </html>
  );
};

VerifyEmail.PreviewProps = {
  firstName: "",
} as VerifyEmailProps;

export default VerifyEmail;

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
