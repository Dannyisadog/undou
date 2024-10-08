"use client";

import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const { fontFamily } = poppins.style;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F1712A",
    },
    success: {
      main: "#26bd8d",
    },
    warning: {
      main: "#e0bd2f",
    },
    error: {
      main: "#cf4f36",
    },
  },
  typography: {
    fontFamily,
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.3rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.9rem",
    },
    body2: {
      fontSize: "0.7rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
