import {
  list as listComments,
  create as createComment,
} from "app/repository/comment";
import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const activity = await listComments({
      activityId: id,
    });

    return NextResponse.json(activity);
  } catch (e) {
    return NextResponse.json({
      status: 400,
      message: (e as Error).message,
    });
  }
};

export const POST = auth(async (req, ctx) => {
  if (!req.auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const activityId = ctx.params?.id;
    const { comment } = await req.json();

    await createComment({
      actvitiyId: activityId as string,
      content: comment as string,
    });

    return NextResponse.json({ error: "Comment Created" }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 400 });
  }
});
