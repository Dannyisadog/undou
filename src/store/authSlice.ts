import { CustomSession } from "auth";

export interface AuthSlice {
  session?: CustomSession;
}

export const createAuthSlice = (session: CustomSession): AuthSlice => ({
  session,
});
