"use client";

import "@seed-design/stylesheet/progressCircle.css";
// TODO: we have to ensure load order between actionButton.css and progressCircle.css. should we bundle them together?
import "@seed-design/stylesheet/actionButton.css";

import { ActionButton as SeedActionButton } from "@seed-design/react";
import * as React from "react";

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
      className,
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
      <SeedActionButton.Root ref={ref} loading={loading} layout={layout} {...otherProps}>
        {layout === "withText" ? (
          <>
            {prefixIcon && <SeedActionButton.PrefixIcon svg={prefixIcon} />}
            <SeedActionButton.Label>{children}</SeedActionButton.Label>
            {suffixIcon && <SeedActionButton.SuffixIcon svg={suffixIcon} />}
          </>
        ) : (
          <SeedActionButton.Icon svg={children} />
        )}
        {loading ? <SeedActionButton.ProgressCircle /> : null}
      </SeedActionButton.Root>
    );
  },
);
ActionButton.displayName = "ActionButton";

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
