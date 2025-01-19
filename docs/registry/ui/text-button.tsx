"use client";

import { TextButton as SeedTextButton } from "@seed-design/react";
import * as React from "react";

export type TextButtonProps = SeedTextButton.RootProps &
  (
    | { prefixIcon: React.ReactNode; suffixIcon?: never }
    | { prefixIcon?: never; suffixIcon: React.ReactNode }
  );

/**
 * @see https://v3.seed-design.io/docs/react/components/text-button
 */
export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ prefixIcon, suffixIcon, children, ...otherProps }, ref) => {
    return (
      <SeedTextButton.Root ref={ref} {...otherProps}>
        {prefixIcon && <SeedTextButton.PrefixIcon svg={prefixIcon} />}
        <SeedTextButton.Label>{children}</SeedTextButton.Label>
        {suffixIcon && <SeedTextButton.SuffixIcon svg={suffixIcon} />}
      </SeedTextButton.Root>
    );
  },
);
TextButton.displayName = "TextButton";
