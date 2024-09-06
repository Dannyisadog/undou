import { auth, CustomSession } from "auth";

export const getAuthUser = async () => {
  const session = (await auth()) as CustomSession;

  const { authUser } = session;

  return authUser;
};
