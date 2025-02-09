import { createContext, useContext } from "react";
import type { UseRenderStrategyReturn } from "./useRenderStrategy";

export interface UseRenderStrategyContext extends UseRenderStrategyReturn {}

const RenderStrategyContext = createContext<UseRenderStrategyContext | null>(null);

export const RenderStrategyProvider = RenderStrategyContext.Provider;

export function useRenderStrategyContext<T extends boolean | undefined = true>({
  strict = true,
}: { strict?: T } = {}): T extends false
  ? UseRenderStrategyContext | null
  : UseRenderStrategyContext {
  const context = useContext(RenderStrategyContext);
  if (!context && strict) {
    throw new Error("useRenderStrategyContext must be used within a RenderStrategy");
  }

  return context as UseRenderStrategyContext;
}
