import { createContext, useContext } from "react";
import type { UseCheckboxReturn } from "./useCheckbox";

export interface UseCheckboxContext extends UseCheckboxReturn {}

const CheckboxContext = createContext<UseCheckboxContext | null>(null);

export const CheckboxProvider = CheckboxContext.Provider;

export function useCheckboxContext() {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error("useCheckboxContext must be used within a Checkbox");
  }

  return context;
}
