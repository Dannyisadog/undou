"use client";

import React from "react";
import GeneralLayout from "layout/GeneralLayout";
import { ErrorBoundary } from "react-error-boundary";
import * as animationData from "animation/error.json";
import { Stack, Typography } from "@mui/material";
import Lottie from "react-lottie";
import { DARK_BLUE, PRIMARY } from "colors";
import Button from "components/client/Button";
import { useRouter } from "next/navigation";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ErrorContent = () => {
  const router = useRouter();

  return (
    <Stack spacing={2} alignItems="center" pt={10}>
      <Lottie options={defaultOptions} speed={0.8} height={200} width={200} />
      <Typography fontWeight="bold" fontSize={20} textAlign="center">
        Oops 看起來出了點問題
        <br />
        工程師正在努力修復中
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          router.push("/");
        }}
      >
        <Typography color="white">回到列表</Typography>
      </Button>
    </Stack>
  );
};

export default function Error() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <GeneralLayout>
        <ErrorContent />
      </GeneralLayout>
    </ErrorBoundary>
  );
}
