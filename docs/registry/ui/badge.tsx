"use client";

import {
  Badge as SeedBadge,
  type BadgeProps as SeedBadgeProps,
} from "@seed-design/react";
import * as React from "react";

export interface BadgeProps extends SeedBadgeProps {}

/**
 * @see https://v3.seed-design.io/docs/react/components/badge
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <SeedBadge ref={ref} {...otherProps}>
        {children}
      </SeedBadge>
    );
  },
);
Badge.displayName = "Badge";
