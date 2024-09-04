"use client";

import { Alert, Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Button from "./Button";
import { useSearchParams } from "next/navigation";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (!password) {
          setError("請輸入密碼");
          return;
        }

        if (password.length < 8) {
          setError("密碼長度至少為 8 個字元");
          setLoading(false);
          return;
        }

        if (!passwordConfirm) {
          setError("請輸入確認密碼");
          return;
        }

        if (password !== passwordConfirm) {
          setError("密碼不一致");
          return;
        }

        setError("");
        setLoading(true);

        const res = await fetch("/api/users/resetPassword", {
          method: "POST",
          body: JSON.stringify({
            token,
            password,
            passwordConfirm,
          }),
        });

        if (res.ok) {
          setSuccess(true);
          setLoading(false);
        } else {
          const data = await res.json();
          setError(data.message);
          setLoading(false);
        }
      }}
    >
      <Stack spacing={2}>
        {error && (
          <Alert severity="error">
            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2">{error}</Typography>
              <Box color="primary.dark">
                <Link href="/forgotPassword">/resend</Link>
              </Box>
            </Stack>
          </Alert>
        )}
        {success && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2">成功重設密碼，請重新登入</Typography>
              <Box color="primary.dark">
                <Link href="/signin">/signin</Link>
              </Box>
            </Stack>
          </Alert>
        )}
        <TextField
          value={password}
          fullWidth
          type="password"
          name="password"
          placeholder="密碼"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          value={passwordConfirm}
          fullWidth
          type="password"
          name="password-confirm"
          placeholder="確認密碼"
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        />
        <Button isLoading={loading} fullWidth type="submit" variant="contained">
          <Typography color="white">重設密碼</Typography>
        </Button>
      </Stack>
    </form>
  );
}
