"use client";
import { signOut } from "next-auth/react";
import Button from "./Button";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function SignoutButton() {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      isLoading={loading}
      variant="contained"
      onClick={() => {
        setLoading(true);
        signOut();
      }}
    >
      <Typography color="white">登出</Typography>
    </Button>
  );
}
