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
  ({
    /**
     * @default false
     */
    asChild?: boolean;
  } & (
    | { prefixIcon?: React.ReactNode; showSuffixChevron?: never }
    | { prefixIcon?: never; showSuffixChevron?: boolean }
  ));

type ReactTextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  TextButtonProps & {};

export const TextButton = React.forwardRef<
  HTMLButtonElement,
  ReactTextButtonProps
>(
  (
    {
      className,
      variant = "brand",
      size = "medium",
      prefixIcon,
      showSuffixChevron,
      children,
      asChild = false,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const classNames = textButton({ variant, size });

    return (
      <Comp
        ref={ref}
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
      </Comp>
    );
  },
);
TextButton.displayName = "textButton";
