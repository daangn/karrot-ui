"use client";

import "@seed-design/stylesheet/fab.css";

import { Slot } from "@radix-ui/react-slot";
import { fab, type FabVariantProps } from "@seed-design/recipe/fab";
import clsx from "clsx";
import * as React from "react";

export interface FabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    FabVariantProps {
  /**
   * @default false
   */
  asChild?: boolean;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/fab
 */
export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  (
    { className, size = "medium", children, asChild = false, ...otherProps },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const classNames = fab({ size });
    const dataProps = {
      "data-disabled": otherProps.disabled ? "" : undefined,
    };

    if (!(otherProps["aria-label"] || otherProps["aria-labelledby"])) {
      console.warn(
        "When layout is 'iconOnly', 'aria-label' or 'aria-labelledby' should be provided.",
      );
    }

    return (
      <Comp
        ref={ref}
        className={clsx(classNames.root, className)}
        {...dataProps}
        {...otherProps}
      >
        (
        <Slot aria-hidden {...dataProps} className={classNames.icon}>
          {children}
        </Slot>
        )
      </Comp>
    );
  },
);
Fab.displayName = "Fab";
