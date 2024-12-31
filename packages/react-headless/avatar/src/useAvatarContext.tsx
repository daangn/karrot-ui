import { createContext, useContext } from "react";
import type { UseAvatarReturn } from "./useAvatar";

export interface UseAvatarContext extends UseAvatarReturn {}

const AvatarContext = createContext<UseAvatarContext | null>(null);

export const AvatarProvider = AvatarContext.Provider;

export function useAvatarContext() {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatarContext must be used within a Avatar");
  }

  return context;
}
