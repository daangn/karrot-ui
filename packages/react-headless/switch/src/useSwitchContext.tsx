import { createContext, useContext } from "react";
import type { UseSwitchReturn } from "./useSwitch";

export interface UseSwitchContext extends UseSwitchReturn {}

const SwitchContext = createContext<UseSwitchContext | null>(null);

export const SwitchProvider = SwitchContext.Provider;

export function useSwitchContext() {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitchContext must be used within a Switch");
  }

  return context;
}
