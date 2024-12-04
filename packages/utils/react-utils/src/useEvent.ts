import { useCallback } from "react";
import { useLatestRef } from "./useLatestRef";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type AnyFunction = (...args: any[]) => any;

export function useEvent<T extends AnyFunction>(callback: T | undefined): T {
  const callbackRef = useLatestRef(callback);

  return useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (...args: any[]) => {
      return callbackRef.current?.(...args);
    },
    [callbackRef],
  ) as T;
}
