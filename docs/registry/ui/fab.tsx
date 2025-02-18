"use client";

import {
  Icon,
  Fab as SeedFab,
  type FabProps as SeedFabProps,
} from "@seed-design/react";
import * as React from "react";

export interface FabProps extends Omit<SeedFabProps, "asChild"> {}

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
      <SeedFab ref={ref} {...otherProps}>
        <Icon svg={children} />
      </SeedFab>
    );
  },
);
Fab.displayName = "Fab";

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
