import { AppBar as MuiAppBar, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import TextField from "../TextField";
import { useScreenSize } from "hooks/useScreenSize";

export default function AppBar() {
  const { isDesktopSize } = useScreenSize();
  return (
    <MuiAppBar position="fixed" elevation={4}>
      <Toolbar
        sx={{
          backgroundColor: "white",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          width={isDesktopSize ? 220 : "auto"}
        >
          <Image
            priority
            width={40}
            height={40}
            src="/appbar-logo.png"
            alt="運動火腿"
          />
          {isDesktopSize && (
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
          )}
        </Stack>
        <TextField
          variant="outlined"
          size="small"
          placeholder="搜尋活動"
          InputProps={{ sx: { borderRadius: 8, fontSize: 14, px: 1 } }}
          sx={{
            width: isDesktopSize ? 400 : 300,
            ml: isDesktopSize ? 2 : 1,
          }}
        />
      </Toolbar>
    </MuiAppBar>
  );
}
