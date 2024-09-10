import { Activity, PrismaClient } from "@prisma/client";
import { getAuthUser } from "util/auth";
import { activitySchema } from "validation/activity";

const prisma = new PrismaClient();

interface ListParams {
  type: string;
}

export const list = async (params: ListParams): Promise<Activity[]> => {
  const { type } = params;

  let activities: Activity[] = [];

  if (type === "all") {
    activities = await prisma.activity.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
  } else {
    activities = await prisma.activity.findMany({
      where: {
        type,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  return activities;
};

export const get = async (id: string) => {
  const activity = await prisma.activity.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!activity) {
    throw new Error("Activity not found");
  }

  return activity;
};

export const create = async (params: any): Promise<Activity> => {
  const user = await getAuthUser();

  await activitySchema.validate(params, { abortEarly: false });

  const {
    name,
    description,
    image,
    startDate,
    endDate,
    location,
    maxParticipants,
    fee,
    type,
  } = params;

  const activity = await prisma.activity.create({
    data: {
      creatorId: user.id,
      name,
      description,
      image,
      startDate,
      endDate,
      location,
      maxParticipants,
      fee,
      type,
    },
  });

  return activity;
};
