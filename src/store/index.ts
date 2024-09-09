import { createStore } from "zustand/vanilla";
import { AuthSlice, createAuthSlice } from "./authSlice";
import { CustomSession } from "auth";

export const createGlobalStore = ({ session }: { session: CustomSession }) => {
  return createStore<AuthSlice>()((...set) => {
    const [setState] = set;
    return ({
      ...createAuthSlice(setState, session),
    });
  });
};
