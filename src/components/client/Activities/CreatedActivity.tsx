"use client";

import { redirect } from "next/navigation";
import { useGlobalStore } from "providers/StoreProvider";

export default function CreatedActivity() {
  const { session } = useGlobalStore((state) => state);

  if (!session) {
    redirect("/signin");
  }

  return null;
}
