"use client";

import { signIn } from "next-auth/react";
import Button from "./Button";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { useScreenSize } from "hooks/useScreenSize";

export default function LineSigninButton() {
  const [loading, setLoading] = useState(false);
  const { isDesktopSize } = useScreenSize();

  return (
    <Button
      isLoading={loading}
      fullWidth
      variant="outlined"
      onClick={async () => {
        setLoading(true);
        await signIn("line");
      }}
      sx={{
        maxWidth: isDesktopSize ? 400 : 375,
        height: 48,
      }}
    >
      <Stack direction="row" spacing={1}>
        <Image src="/ic-line.png" alt="Line" width={24} height={24} priority />
        <Typography>透過 Line 進行登入</Typography>
      </Stack>
    </Button>
  );
}
