"use client";

import "@seed-design/stylesheet/expandButton.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  expandButton,
  type ExpandButtonVariantProps,
} from "@seed-design/recipe/expandButton";

export interface ExpandButtonProps extends ExpandButtonVariantProps {
  suffixIcon?: React.ReactNode;

  /**
   * @default false
   */
  asChild?: boolean;
}

export interface ReactExpandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ExpandButtonProps {}

/**
 * @see https://v3.seed-design.io/docs/react/components/expand-button
 */
export const ExpandButton = React.forwardRef<
  HTMLButtonElement,
  ReactExpandButtonProps
>(
  (
    { className, children, suffixIcon, asChild = false, ...otherProps },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const classNames = expandButton({});
    return (
      <Comp
        ref={ref}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        <span className={classNames.label}>{children}</span>
        {suffixIcon && (
          <Slot className={classNames.suffixIcon}>{suffixIcon}</Slot>
        )}
      </Comp>
    );
  },
);
ExpandButton.displayName = "ExpandButton";
