"use client";

import "@seed-design/stylesheet/extendedFab.css";

import { Slot } from "@radix-ui/react-slot";
import {
  extendedFab,
  type ExtendedFabVariantProps,
} from "@seed-design/recipe/extendedFab";
import clsx from "clsx";
import * as React from "react";

export interface ExtendedFabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ExtendedFabVariantProps {
  prefixIcon?: React.ReactNode;

  /**
   * @default false
   */
  asChild?: boolean;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/action-button
 */
export const ExtendedFab = React.forwardRef<
  HTMLButtonElement,
  ExtendedFabProps
>(
  (
    {
      className,
      variant = "neutralSolid",
      size = "medium",
      children,
      prefixIcon,
      asChild = false,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const classNames = extendedFab({ variant, size });
    const dataProps = {
      "data-disabled": otherProps.disabled ? "" : undefined,
    };

    return (
      <Comp
        ref={ref}
        className={clsx(classNames.root, className)}
        {...dataProps}
        {...otherProps}
      >
        {prefixIcon && (
          <Slot aria-hidden {...dataProps} className={classNames.prefixIcon}>
            {prefixIcon}
          </Slot>
        )}
        <span {...dataProps} className={classNames.label}>
          {children}
        </span>
      </Comp>
    );
  },
);
ExtendedFab.displayName = "ExtendedFab";
