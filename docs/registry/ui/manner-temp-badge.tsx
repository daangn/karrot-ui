"use client";

import {
  Celcius,
  MannerTempBadge as SeedMannerTempBadge,
} from "@seed-design/react";
import * as React from "react";
import { mannerTempToLevel } from "../lib/manner-temp-level";

export interface MannerTempBadgeProps
  extends Omit<SeedMannerTempBadge.RootProps, "children" | "asChild"> {
  /**
   * The manner temperature of the badge.
   * Level will be calculated based on this value.
   * If level is provided, this will be ignored.
   */
  temperature: number;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/manner-temp-badge
 */
export const MannerTempBadge = React.forwardRef<
  HTMLSpanElement,
  MannerTempBadgeProps
>(({ temperature, level, ...otherProps }, ref) => {
  return (
    <SeedMannerTempBadge.Root
      ref={ref}
      level={level ?? mannerTempToLevel(temperature)}
      {...otherProps}
    >
      <SeedMannerTempBadge.Label>
        <Celcius value={temperature} />
      </SeedMannerTempBadge.Label>
    </SeedMannerTempBadge.Root>
  );
});
MannerTempBadge.displayName = "MannerTempBadge";
