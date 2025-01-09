import { createContext, useContext } from "react";
import type { GetSegmentPropsReturn } from "./useSegmentedControl";

export interface UseSegmentedControlSegmentContext extends GetSegmentPropsReturn {}

const SegmentedControlSegmentContext = createContext<UseSegmentedControlSegmentContext | null>(
  null,
);

export const SegmentedControlSegmentProvider = SegmentedControlSegmentContext.Provider;

export function useSegmentedControlSegmentContext<T extends boolean | undefined = true>({
  strict = true,
}: { strict?: T } = {}): T extends false
  ? UseSegmentedControlSegmentContext | null
  : UseSegmentedControlSegmentContext {
  const context = useContext(SegmentedControlSegmentContext);
  if (!context && strict) {
    throw new Error(
      "useSegmentedControlSegmentContext must be used within a SegmentedControlSegment",
    );
  }

  return context as UseSegmentedControlSegmentContext;
}
