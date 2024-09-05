import { AppBar, Link, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

export default function AuthAppBar() {
  return (
    <AppBar position="fixed" elevation={4}>
      <Toolbar
        sx={{
          backgroundColor: "white",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Image
            priority
            width={40}
            height={40}
            src="/appbar-logo.png"
            alt="運動火腿"
          />
          <Typography
            color="primary"
            variant="h6"
            noWrap
            component="a"
            ml={2}
            href="/signin"
          >
            運動火腿
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
