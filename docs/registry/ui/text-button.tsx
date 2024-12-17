"use client";

import "@seed-design/stylesheet/textButton.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  textButton,
  type TextButtonVariantProps,
} from "@seed-design/recipe/textButton";
import { IconChevronRightLine } from "@daangn/react-monochrome-icon";

export type TextButtonProps = TextButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  ({
    /**
     * @default false
     */
    asChild?: boolean;
  } & (
    | { prefixIcon?: React.ReactNode; showSuffixChevron?: never }
    | { prefixIcon?: never; showSuffixChevron?: boolean }
  ));

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      className,
      variant = "brand",
      size = "medium",
      type = "button",
      prefixIcon,
      showSuffixChevron,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = textButton({ variant, size });

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        {prefixIcon && (
          <Slot className={classNames.prefixIcon}>{prefixIcon}</Slot>
        )}
        <span className={classNames.label}>{children}</span>
        {showSuffixChevron && (
          <IconChevronRightLine className={classNames.suffixIcon} />
        )}
      </button>
    );
  },
);
TextButton.displayName = "textButton";
