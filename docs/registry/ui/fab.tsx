"use client";

import "@seed-design/stylesheet/fab.css";

import { Fab as SeedFab } from "@seed-design/react";
import * as React from "react";

export interface FabProps extends SeedFab.RootProps {}

/**
 * @see https://v3.seed-design.io/docs/react/components/fab
 */
export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ children, ...otherProps }, ref) => {
    if (!(otherProps["aria-label"] || otherProps["aria-labelledby"])) {
      console.warn(
        "'aria-label' or 'aria-labelledby' should be provided in <Fab />.",
      );
    }

    return (
      <SeedFab.Root ref={ref} {...otherProps}>
        <SeedFab.Icon svg={children} />
      </SeedFab.Root>
    );
  },
);
Fab.displayName = "Fab";
