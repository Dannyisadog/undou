"use client";

import { signIn } from "next-auth/react";
import Button from "./Button";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

export default function GoogleSigninButton() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      isLoading={loading}
      fullWidth
      variant="outlined"
      onClick={async () => {
        setLoading(true);
        await signIn("google");
      }}
      sx={{
        maxWidth: 400,
        height: 48,
      }}
    >
      <Stack direction="row" spacing={1}>
        <Image
          src="/ic-google.png"
          alt="Google"
          width={24}
          height={24}
          priority
        />
        <Typography>透過 Google 進行登入</Typography>
      </Stack>
    </Button>
  );
}
