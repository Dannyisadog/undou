import { get } from "app/repository/activity";
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
