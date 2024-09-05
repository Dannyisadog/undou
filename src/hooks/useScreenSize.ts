"use client";

import { useMediaQuery, useTheme } from "@mui/material";

export const useScreenSize = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return {
    isMobileSize: !matches,
    isDesktopSize: matches,
  };
};
