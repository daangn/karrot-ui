"use client";

import { ControlChip as SeedControlChip } from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/controlChip.css";

export interface ControlChipToggleProps extends SeedControlChip.RootProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  count?: number;
}

export const ControlChipToggle = React.forwardRef<
  HTMLLabelElement,
  ControlChipToggleProps
>(
  (
    { className, children, prefixIcon, suffixIcon, count, ...otherProps },
    ref,
  ) => {
    return (
      <SeedControlChip.Root ref={ref} {...otherProps}>
        {otherProps.layout === "withText" ? (
          <>
            {prefixIcon && <SeedControlChip.PrefixIcon svg={prefixIcon} />}
            <SeedControlChip.Label>{children}</SeedControlChip.Label>
            {count && <SeedControlChip.Count>{count}</SeedControlChip.Count>}
            {suffixIcon && <SeedControlChip.SuffixIcon svg={suffixIcon} />}
          </>
        ) : (
          <SeedControlChip.Icon svg={children} />
        )}
      </SeedControlChip.Root>
    );
  },
);
ControlChipToggle.displayName = "ControlChip.Toggle";

export const ControlChip = Object.assign(
  () => {
    console.warn(
      "ControlChip is a base component and should not be rendered. Use ControlChip.Toggle or ControlChip.Radio instead.",
    );
  },
  {
    Toggle: ControlChipToggle,
  },
);

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
