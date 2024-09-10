import { PrismaClient } from "@prisma/client";

interface GetParticipantParams {
  id?: number;
  userId?: number;
  activityId?: number;
}

interface CreateParticipantParams {
  userId: number;
  activityId: number;
}

const prisma = new PrismaClient();

export const get = async (params: GetParticipantParams) => {
  const { id, userId, activityId } = params;

  const conditions = {
    is_deleted: false,
  } as any;

  if (id) {
    conditions["id"] = id;
  }
  if (userId) {
    conditions["userId"] = userId;
  }
  if (activityId) {
    conditions["activityId"] = activityId;
  }

  const participant = await prisma.participant.findFirst({
    where: conditions,
  });

  return participant;
};

export const create = async (params: CreateParticipantParams) => {
  const { userId, activityId } = params;

  if (!userId || !activityId) {
    throw new Error("Invalid parameters");
  }

  return await prisma.participant.create({
    data: {
      userId,
      activityId,
    },
  });
};
