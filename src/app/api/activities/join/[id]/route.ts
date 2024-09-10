import { join } from "app/repository/activity";
import { auth } from "auth";
import { NextResponse } from "next/server";

export const POST = auth(async (req, { params }) => {
  if (req.auth) {
    try {
      const activityId = parseInt(params?.id as string);
      await join(activityId);
      return NextResponse.json({ message: "Activity joined" }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { message: (error as Error).message },
        { status: 400 }
      );
    }
  }

  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
