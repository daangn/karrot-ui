"use client";

import { Badge as SeedBadge } from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/badge.css";

export interface BadgeProps extends SeedBadge.RootProps {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <SeedBadge.Root ref={ref} {...otherProps}>
        <SeedBadge.Label>{children}</SeedBadge.Label>
      </SeedBadge.Root>
    );
  },
);
Badge.displayName = "Badge";
