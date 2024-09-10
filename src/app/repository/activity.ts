import { Activity, PrismaClient } from "@prisma/client";
import { getAuthUser } from "util/auth";
import { activitySchema } from "validation/activity";
import {
  get as getParticipant,
  create as createParticipant,
} from "./participant";

const prisma = new PrismaClient();

interface ListParams {
  type: string;
  owned?: boolean;
}

export const list = async (params: ListParams): Promise<Activity[]> => {
  const { type, owned } = params;

  let activities: Activity[] = [];

  const conditions = {} as any;

  if (type !== "all") {
    conditions["type"] = type;
  }

  if (owned) {
    const user = await getAuthUser();
    conditions["creatorId"] = user.id;
  }

  activities = await prisma.activity.findMany({
    where: conditions,
    orderBy: {
      updatedAt: "desc",
    },
  });

  return activities;
};

export const get = async (id: string) => {
  const activity = await prisma.activity.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      participants: true,
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

export const join = async (id: number) => {
  const user = await getAuthUser();

  const participant = await getParticipant({
    userId: user.id,
    activityId: id,
  });

  if (participant) {
    throw new Error("Already joined");
  }

  const newParticipant = await createParticipant({
    userId: user.id,
    activityId: id,
  });

  return newParticipant;
};

export const disjoin = async (id: number) => {
  const user = await getAuthUser();

  const participant = await getParticipant({
    userId: user.id,
    activityId: id,
  });

  if (!participant) {
    throw new Error("Not joined");
  }

  await prisma.participant.update({
    where: {
      id: participant.id,
    },
    data: {
      is_deleted: true,
    },
  });
};
