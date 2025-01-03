"use client";

import { ActionChip as SeedActionChip } from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/actionChip.css";

export interface ActionChipProps extends SeedActionChip.RootProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  count?: number;
}

export const ActionChip = React.forwardRef<HTMLButtonElement, ActionChipProps>(
  ({ className, children, prefixIcon, suffixIcon, count, ...otherProps }, ref) => {
    return (
      <SeedActionChip.Root ref={ref} {...otherProps}>
        {otherProps.layout === "withText" ? (
          <>
            {prefixIcon && <SeedActionChip.PrefixIcon svg={prefixIcon} />}
            <SeedActionChip.Label>{children}</SeedActionChip.Label>
            {count && <SeedActionChip.Count>{count}</SeedActionChip.Count>}
            {suffixIcon && <SeedActionChip.SuffixIcon svg={suffixIcon} />}
          </>
        ) : (
          <SeedActionChip.Icon svg={children} />
        )}
      </SeedActionChip.Root>
    );
  },
);
ActionChip.displayName = "ActionChip";

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
