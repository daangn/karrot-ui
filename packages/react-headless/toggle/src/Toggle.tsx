import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import type * as React from "react";
import { forwardRef } from "react";
import { useToggle, type UseToggleProps } from "./useToggle";
import { ToggleProvider } from "./useToggleContext";

export interface ToggleRootProps
  extends UseToggleProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLButtonElement> {}

export const ToggleRoot = forwardRef<HTMLButtonElement, ToggleRootProps>((props, ref) => {
  const api = useToggle(props);
  return (
    <ToggleProvider value={api}>
      <Primitive.button ref={ref} {...api.rootProps} {...api.restProps} />
    </ToggleProvider>
  );
});
ToggleRoot.displayName = "ToggleRoot";
