import { update } from "app/repository/user";
import { auth } from "auth";
import { NextResponse } from "next/server";
import { getAuthUser } from "util/auth";

export const PATCH = auth(async (req) => {
  if (req.auth) {
    const user = await getAuthUser();
    const { name } = await req.json();

    await update({
      id: user.id,
      name,
    });

    return NextResponse.json(
      {
        message: "User name updated",
      },
      { status: 201 }
    );
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
});
