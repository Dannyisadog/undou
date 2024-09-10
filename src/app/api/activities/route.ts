import { Activity } from "@prisma/client";
import { create, list, listJoined } from "app/repository/activity";
import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const type = req.nextUrl.searchParams.get("type") || "all";

  const owned = req.nextUrl.searchParams.get("owned") === "true";

  const joined = req.nextUrl.searchParams.get("joined") === "true";

  let activities: Activity[] = [];

  if (joined) {
    activities = await listJoined();
  } else {
    activities = await list({ type, owned });
  }

  return NextResponse.json(activities);
};

export const POST = auth(async (req) => {
  if (req.auth) {
    try {
      const activity = await create(await req.json());

      return NextResponse.json(activity, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { message: (error as Error).message },
        { status: 400 }
      );
    }
  }

  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
