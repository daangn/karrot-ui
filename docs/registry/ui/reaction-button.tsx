"use client";

import "@seed-design/stylesheet/reactionButton.css";

import { ReactionButton as SeedReactionButton } from "@seed-design/react";
import * as React from "react";
import { ProgressCircle } from "./progress-circle";

export interface ReactionButtonProps extends SeedReactionButton.RootProps {
  prefixIcon?: React.ReactNode;

  count?: number;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/reaction-button
 */
export const ReactionButton = React.forwardRef<
  React.ElementRef<typeof SeedReactionButton.Root>,
  ReactionButtonProps
>(({ loading = false, prefixIcon, count, children, ...otherProps }, ref) => {
  return (
    <SeedReactionButton.Root ref={ref} loading={loading} {...otherProps}>
      {prefixIcon && <SeedReactionButton.PrefixIcon svg={prefixIcon} />}
      <SeedReactionButton.Label>{children}</SeedReactionButton.Label>
      <SeedReactionButton.Count>{count}</SeedReactionButton.Count>
      {loading ? (
        <SeedReactionButton.ProgressIndicator>
          <ProgressCircle size="inherit" tone="inherit" />
        </SeedReactionButton.ProgressIndicator>
      ) : null}
    </SeedReactionButton.Root>
  );
});
ReactionButton.displayName = "ReactionButton";

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
