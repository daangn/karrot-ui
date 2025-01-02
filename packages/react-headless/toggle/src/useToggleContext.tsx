import { createContext, useContext } from "react";
import type { UseToggleReturn } from "./useToggle";

export interface UseToggleContext extends UseToggleReturn {}

const ToggleContext = createContext<UseToggleContext | null>(null);

export const ToggleProvider = ToggleContext.Provider;

export function useToggleContext() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggleContext must be used within a Toggle");
  }

  return context;
}
