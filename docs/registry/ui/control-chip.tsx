"use client";

import { ControlChip as SeedControlChip } from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/controlChip.css";

export interface ControlChipProps extends SeedControlChip.RootProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  count?: number;
}

export const ControlChip = React.forwardRef<HTMLLabelElement, ControlChipProps>(
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
ControlChip.displayName = "ControlChip";

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
