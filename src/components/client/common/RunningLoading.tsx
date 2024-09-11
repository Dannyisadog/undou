import Lottie from "react-lottie";
import * as animationData from "animation/running.json";
import { Stack, Typography } from "@mui/material";
import { PRIMARY } from "colors";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function RunningLoading() {
  return (
    <Stack spacing={2} alignItems="center">
      <Lottie options={defaultOptions} speed={0.8} width={300} />
      <Typography color={PRIMARY.main} fontWeight="bold" fontSize={20}>
        載入中...
      </Typography>
    </Stack>
  );
}
