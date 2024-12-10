import type * as React from "react";

export function mergeRefs<T>(
  ...refs: React.ForwardedRef<T>[]
): React.ForwardedRef<T> {
  if (refs.length === 1) {
    return refs[0];
  }

  return (value: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    }
  };
}
