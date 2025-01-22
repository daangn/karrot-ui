"use client";

import { TextButton as SeedTextButton } from "@seed-design/react";
import * as React from "react";

export type TextButtonProps = SeedTextButton.RootProps & {
  /**
   * @default "iconFirst"
   */
  layout?: "iconFirst" | "iconLast";
  icon: React.ReactNode;
};

/**
 * @see https://v3.seed-design.io/docs/react/components/text-button
 */
export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ layout = "iconFirst", icon, children, ...otherProps }, ref) => {
    return (
      <SeedTextButton.Root ref={ref} {...otherProps}>
        {layout === "iconFirst" && <SeedTextButton.PrefixIcon svg={icon} />}
        <SeedTextButton.Label>{children}</SeedTextButton.Label>
        {layout === "iconLast" && <SeedTextButton.SuffixIcon svg={icon} />}
      </SeedTextButton.Root>
    );
  },
);
TextButton.displayName = "TextButton";
