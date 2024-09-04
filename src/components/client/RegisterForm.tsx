"use client";

import { Alert, Box, Stack, Typography } from "@mui/material";
import TextField from "./TextField";
import Button from "./Button";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        setLoading(true);
        e.preventDefault();

        if (username.length < 3) {
          setError("使用者名稱至少要有 3 個字元");
          setLoading(false);
          return;
        }

        if (!email.includes("@")) {
          setError("電子信箱格式錯誤");
          setLoading(false);
          return;
        }

        if (password.length < 8) {
          setError("密碼至少要有 8 個字元");
          setLoading(false);
          return;
        }

        if (password !== passwordConfirm) {
          setError("密碼不一致");
          setLoading(false);
          return;
        }
        setError("");

        const result = await fetch(`/api/register`, {
          method: "POST",
          body: JSON.stringify({
            name: username,
            email,
            password,
            passwordConfirm,
          }),
        });

        setLoading(false);

        if (result.ok) {
          setSuccess(true);
          setUsername("");
          setEmail("");
          setPassword("");
          setPasswordConfirm("");
        } else {
          setError("註冊失敗，請聯絡管理員");
        }
      }}
    >
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2">註冊成功，請前往登入</Typography>
              <Box color="primary.dark">
                <Link href="/signin">/signin</Link>
              </Box>
            </Stack>
          </Alert>
        )}
        <TextField
          value={username}
          fullWidth
          type="text"
          name="username"
          placeholder="使用者名稱"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          value={email}
          fullWidth
          type="email"
          name="email"
          placeholder="電子信箱"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
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
          <Typography color="white">註冊</Typography>
        </Button>
      </Stack>
    </form>
  );
}
