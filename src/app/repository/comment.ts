import { getAuthUser } from "util/auth";
import { get as getActivity } from "./activity";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ListParams {
  activityId: string;
}

interface CreateParams {
  actvitiyId: string;
  content: string;
}

export const list = async (params: ListParams) => {
  const { activityId } = params;

  const activity = await getActivity(activityId);

  if (!activity) {
    throw new Error("Activity not found");
  }

  const comments = await prisma.comment.findMany({
    where: {
      activityId: activity.id,
      isDeleted: false,
    },
    include: {
      creator: true,
      activity: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return comments;
};

export const create = async (params: CreateParams) => {
  const { actvitiyId, content } = params;

  const user = await getAuthUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const activity = await getActivity(actvitiyId);

  if (!activity) {
    throw new Error("Activity not found");
  }

  if (!content) {
    throw new Error("Content is required");
  }

  const comment = await prisma.comment.create({
    data: {
      content,
      activityId: activity.id,
      creatorId: user.id,
    },
  });

  return comment;
};
