import Lottie from "react-lottie";
import * as animationData from "animation/nodata.json";
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

export default function NoData() {
  return (
    <Stack spacing={2} alignItems="center">
      <Lottie options={defaultOptions} height={300} width={300} />
      <Typography color={PRIMARY.main} fontWeight="bold" fontSize={20}>
        目前沒有任何活動
      </Typography>
    </Stack>
  );
}
