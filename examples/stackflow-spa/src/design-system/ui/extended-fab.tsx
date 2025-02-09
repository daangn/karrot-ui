import { ExtendedFab as SeedExtendedFab } from "@seed-design/react";
import * as React from "react";

export interface ExtendedFabProps extends SeedExtendedFab.RootProps {
  prefixIcon?: React.ReactNode;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/extended-fab
 */
export const ExtendedFab = React.forwardRef<
  HTMLButtonElement,
  ExtendedFabProps
>(({ children, prefixIcon, ...otherProps }, ref) => {
  return (
    <SeedExtendedFab.Root ref={ref} {...otherProps}>
      {prefixIcon && <SeedExtendedFab.PrefixIcon svg={prefixIcon} />}
      <SeedExtendedFab.Label>{children}</SeedExtendedFab.Label>
    </SeedExtendedFab.Root>
  );
});
ExtendedFab.displayName = "ExtendedFab";
