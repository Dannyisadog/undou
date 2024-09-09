"use client";

import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import { Alert, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useScreenSize } from "hooks/useScreenSize";
import { useGlobalStore } from "providers/StoreProvider";
import { CustomSession } from "auth";

export function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const { updateSession } = useGlobalStore((state) => state);

  const [loading, setLoading] = useState(false);

  const { isDesktopSize } = useScreenSize();

  return (
    <form
      method="post"
      onSubmit={async (e) => {
        setLoading(true);
        e.preventDefault();

        if (!email) {
          setError("請輸入電子信箱");
          setLoading(false);
          return;
        }

        if (!email.includes("@")) {
          setError("電子信箱格式錯誤");
          setLoading(false);
          return;
        }

        if (!password) {
          setError("請輸入密碼");
          setLoading(false);
          return;
        }

        const result = await signIn("credentials", {
          callbackUrl: "/",
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          setError("電子信箱或密碼錯誤");
        }

        if (!result?.error) {
          const newSession = (await getSession()) as CustomSession;
          updateSession(newSession);
          router.push("/");
        }

        setLoading(false);
      }}
    >
      <Stack spacing={2} width="100%" maxWidth={isDesktopSize ? 400 : 375}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          fullWidth
          type="email"
          name="email"
          placeholder="電子信箱"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          fullWidth
          type="password"
          name="password"
          placeholder="密碼"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Stack direction="row" justifyContent="space-between">
          <Link href="/forgotPassword">
            <Typography variant="body2" color="primary">
              忘記密碼?
            </Typography>
          </Link>
          <Link href="/register">
            <Typography variant="body2" color="primary">
              註冊
            </Typography>
          </Link>
        </Stack>
        <Button isLoading={loading} fullWidth type="submit" variant="contained">
          <Typography color="white">登入</Typography>
        </Button>
      </Stack>
    </form>
  );
}
