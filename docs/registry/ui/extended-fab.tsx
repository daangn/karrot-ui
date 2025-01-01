"use client";

import "@seed-design/stylesheet/extendedFab.css";

import { ExtendedFab as SeedExtendedFab } from "@seed-design/react";
import * as React from "react";

export interface ExtendedFabProps extends SeedExtendedFab.RootProps {
  prefixIcon?: React.ReactNode;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/action-button
 */
export const ExtendedFab = React.forwardRef<
  HTMLButtonElement,
  ExtendedFabProps
>(({ className, children, prefixIcon, ...otherProps }, ref) => {
  return (
    <SeedExtendedFab.Root ref={ref} {...otherProps}>
      {prefixIcon && <SeedExtendedFab.PrefixIcon svg={prefixIcon} />}
      <SeedExtendedFab.Label>{children}</SeedExtendedFab.Label>
    </SeedExtendedFab.Root>
  );
});
ExtendedFab.displayName = "ExtendedFab";
