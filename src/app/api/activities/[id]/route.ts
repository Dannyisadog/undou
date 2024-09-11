import { archive, get } from "app/repository/activity";
import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const activity = await get(id);

    return NextResponse.json(activity);
  } catch (e) {
    return NextResponse.json({
      status: 404,
      message: (e as Error).message,
    });
  }
};

export const DELETE = auth(async (req, { params }) => {
  if (req.auth) {
    try {
      const id = parseInt(params?.id as string);

      await archive(id);

      return NextResponse.json(
        { message: "Activity archived" },
        { status: 201 }
      );
    } catch (e) {
      return NextResponse.json(
        { message: (e as Error).message },
        { status: 400 }
      );
    }
  } else {
  }
});
