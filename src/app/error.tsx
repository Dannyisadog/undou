import React from "react";
import Error from "components/client/error";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 | 有點問題",
  description: "工程師修復中",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ErrorPage() {
  return <Error />;
}
