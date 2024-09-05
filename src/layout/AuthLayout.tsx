import { Box } from "@mui/material";
import AuthAppBar from "components/client/common/AuthAppBar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

  return (
    <>
      <AuthAppBar />
      <Box pt={8}>{children}</Box>
    </>
  );
}
