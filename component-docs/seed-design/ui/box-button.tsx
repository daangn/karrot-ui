"use client";

import "@seed-design/stylesheet/actionButton.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { actionButton, type ActionButtonVariantProps } from "@seed-design/recipe/actionButton";

export interface BoxButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ActionButtonVariantProps {
  prefixIcon?: React.ReactNode;
}

/**
 * @see https://component.seed-design.io/components/box-button
 */
export const BoxButton = React.forwardRef<HTMLButtonElement, BoxButtonProps>(
  (
    { className, variant = "brandSolid", size = "medium", children, prefixIcon, ...otherProps },
    ref,
  ) => {
    const classNames = actionButton({ variant, size });
    return (
      <button ref={ref} className={clsx(classNames.root, className)} {...otherProps}>
        {prefixIcon && <Slot className={classNames.prefix}>{prefixIcon}</Slot>}
        <span className={classNames.label}>{children}</span>
      </button>
    );
  },
);
BoxButton.displayName = "BoxButton";
