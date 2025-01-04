"use client";

import "@seed-design/stylesheet/progressCircle.css";
// TODO: we have to ensure load order between toggleButton.css and progressCircle.css. should we bundle them together?
import "@seed-design/stylesheet/toggleButton.css";

import { ToggleButton as SeedToggleButton } from "@seed-design/react";
import * as React from "react";

export interface ToggleButtonProps extends SeedToggleButton.RootProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/toggle-button
 */
export const ToggleButton = React.forwardRef<
  React.ElementRef<typeof SeedToggleButton.Root>,
  ToggleButtonProps
>(
  (
    { loading = false, prefixIcon, suffixIcon, children, ...otherProps },
    ref,
  ) => {
    return (
      <SeedToggleButton.Root ref={ref} loading={loading} {...otherProps}>
        {prefixIcon && <SeedToggleButton.PrefixIcon svg={prefixIcon} />}
        <SeedToggleButton.Label>{children}</SeedToggleButton.Label>
        {suffixIcon && <SeedToggleButton.SuffixIcon svg={suffixIcon} />}
        {loading ? <SeedToggleButton.ProgressCircle /> : null}
      </SeedToggleButton.Root>
    );
  },
);
ToggleButton.displayName = "ToggleButton";

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
