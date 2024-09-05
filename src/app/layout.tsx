import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { Stack } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "運動火腿",
  description: "大家一起來運動",
  keywords:
    "運動, 羽球, 籃球, 棒球, 網球, 足球, 棒球, 桌球, 撞球, 游泳, 滑板, 滑雪, 滑冰, 滑輪, 滑板, 滑水, 滑翔",
  openGraph: {
    type: "website",
    url: "https://undou.dannyisadog.com",
    title: "運動火腿",
    description: "大家一起來運動",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "運動火腿",
      },
    ],
  },
  alternates: {
    canonical: "https://undou.dannyisadog.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <body>
        <ThemeProvider theme={theme}>
          <Stack justifyContent="center">
            {children}
            <SpeedInsights />
            <Analytics />
          </Stack>
        </ThemeProvider>
      </body>
    </html>
  );
}
