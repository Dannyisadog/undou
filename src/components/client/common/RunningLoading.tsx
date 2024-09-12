import Lottie from "react-lottie";
import * as animationData from "animation/running.json";
import { Stack, Typography } from "@mui/material";
import { PRIMARY } from "colors";
import { useScreenSize } from "hooks/useScreenSize";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function RunningLoading() {
  const { isDesktopSize } = useScreenSize();

  const width = isDesktopSize ? 600 : "100%";

  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        height: isDesktopSize ? "100%" : "auto",
      }}
    >
      <Lottie options={defaultOptions} speed={0.8} width={width} />
      <Typography color={PRIMARY.main} fontWeight="bold" fontSize={20}>
        載入中...
      </Typography>
    </Stack>
  );
}
