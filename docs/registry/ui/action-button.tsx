"use client";

import "@seed-design/stylesheet/actionButton.css";

import { ActionButton as SeedActionButton } from "@seed-design/react";
import * as React from "react";
import { ProgressCircle } from "./progress-circle";

export interface ActionButtonProps extends SeedActionButton.RootProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/action-button
 */
export const ActionButton = React.forwardRef<
  React.ElementRef<typeof SeedActionButton.Root>,
  ActionButtonProps
>(
  (
    {
      loading = false,
      layout = "withText",
      prefixIcon,
      suffixIcon,
      children,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <SeedActionButton.Root
        ref={ref}
        loading={loading}
        layout={layout}
        {...otherProps}
      >
        {layout === "withText" ? (
          <>
            {prefixIcon && <SeedActionButton.PrefixIcon svg={prefixIcon} />}
            <SeedActionButton.Label>{children}</SeedActionButton.Label>
            {suffixIcon && <SeedActionButton.SuffixIcon svg={suffixIcon} />}
          </>
        ) : (
          <SeedActionButton.Icon svg={children} />
        )}
        {loading ? (
          <SeedActionButton.ProgressIndicator>
            <ProgressCircle size="inherit" tone="inherit" />
          </SeedActionButton.ProgressIndicator>
        ) : null}
      </SeedActionButton.Root>
    );
  },
);
ActionButton.displayName = "ActionButton";

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
