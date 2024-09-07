"use client";

import { CustomSession } from "auth";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { createGlobalStore } from "store";
import { AuthSlice } from "store/authSlice";
import { useStore } from "zustand";

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;

export const GlobalStoreContext = createContext<GlobalStoreApi | undefined>(
  undefined
);

export interface GlobalStoreProviderProps {
  session: CustomSession;
  children: ReactNode;
}

export const GlobalStoreProvider = ({
  session,
  children,
}: GlobalStoreProviderProps) => {
  const storeRef = useRef<GlobalStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createGlobalStore({
      session,
    });
  }

  return (
    <GlobalStoreContext.Provider value={storeRef.current}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = <T,>(selector: (store: AuthSlice) => T): T => {
  const storeContext = useContext(GlobalStoreContext);

  if (!storeContext) {
    throw new Error(`useGlobalStore must be used within GlobalStoreProvider`);
  }

  return useStore(storeContext, selector);
};
