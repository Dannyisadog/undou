import { CustomSession } from "auth";
import { StateCreator } from "zustand";

export interface AuthSlice {
  session?: CustomSession;
  updateSession: (session: CustomSession) => void;
}

export const createAuthSlice = (set: (partial: AuthSlice | Partial<AuthSlice> | ((state: AuthSlice) => AuthSlice | Partial<AuthSlice>), replace?: boolean | undefined) => void, session: CustomSession): AuthSlice => ({
  session,
  updateSession: (session: CustomSession) => set({ session }),
});
