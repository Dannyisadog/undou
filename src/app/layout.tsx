import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { Stack } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GlobalStoreProvider } from "providers/StoreProvider";
import { auth, CustomSession } from "auth";
import ReactQueryProvider from "providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "運動火腿",
  description:
    "專為運動愛好者設計的平台，讓大家聚在一起分享運動樂趣。無論是跑步、瑜伽或健身，都能在這裡找到夥伴，一同參與各種活動，享受健康生活與社交的結合。",
  keywords:
    "運動, 羽球, 籃球, 棒球, 網球, 足球, 棒球, 桌球, 撞球, 游泳, 滑板, 滑雪, 滑冰, 滑輪, 滑板, 滑水, 滑翔",
  openGraph: {
    type: "website",
    url: "https://undou.dannyisadog.com",
    title: "運動火腿 | 一起來運動",
    siteName: "運動火腿",
    description:
      "專為運動愛好者設計的平台，讓大家聚在一起分享運動樂趣。無論是跑步、瑜伽或健身，都能在這裡找到夥伴，一同參與各種活動，享受健康生活與社交的結合。",
    images: [
      {
        url: "/og-image.png",
        width: 400,
        height: 400,
        alt: "運動火腿",
      },
    ],
  },
  alternates: {
    canonical: "https://undou.dannyisadog.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await auth()) as CustomSession;

  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body>
        <ReactQueryProvider>
          <GlobalStoreProvider session={session}>
            <ThemeProvider theme={theme}>
              <Stack justifyContent="center">
                {children}
                <SpeedInsights />
                <Analytics />
              </Stack>
            </ThemeProvider>
          </GlobalStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
