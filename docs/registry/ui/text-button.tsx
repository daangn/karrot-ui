"use client";

import "@seed-design/stylesheet/textButton.css";

import * as React from "react";
import clsx from "clsx";
import {
  textButton,
  type TextButtonVariantProps,
} from "@seed-design/recipe/textButton";
import { Slot } from "@radix-ui/react-slot";

export type TextButtonProps = TextButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  ({
    /**
     * @default false
     */
    asChild?: boolean;
  } & (
    | { prefixIcon: React.ReactNode; suffixIcon?: never }
    | { prefixIcon?: never; suffixIcon: React.ReactNode }
  ));

/**
 * @see https://v3.seed-design.io/docs/react/components/text-button
 */
export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      asChild = false,
      className,
      tone = "brand",
      size = "medium",
      prefixIcon,
      suffixIcon,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = textButton({ tone, size });

    return (
      <button
        ref={ref}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        {prefixIcon && (
          <Slot aria-hidden className={classNames.prefixIcon}>
            {prefixIcon}
          </Slot>
        )}
        <span className={classNames.label}>{children}</span>
        {suffixIcon && (
          <Slot aria-hidden className={classNames.suffixIcon}>
            {suffixIcon}
          </Slot>
        )}
      </button>
    );
  },
);
TextButton.displayName = "TextButton";
