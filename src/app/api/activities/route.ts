import { create, list } from "app/repository/activity";
import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const type = req.nextUrl.searchParams.get("type") || "all";

  const activities = await list({ type });

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
