"use client";

import "@seed-design/stylesheet/progressCircle.css";
import "@seed-design/stylesheet/toggleButton.css";

import { Slot } from "@radix-ui/react-slot";
import { useToggle, type UseToggleProps } from "@seed-design/react-toggle";
import {
  toggleButton,
  type ToggleButtonVariantProps,
} from "@seed-design/recipe/toggleButton";
import clsx from "clsx";
import * as React from "react";
import { ProgressCircle } from "./progress-circle";

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    UseToggleProps,
    ToggleButtonVariantProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  loading?: boolean;

  /**
   * @default false
   */
  asChild?: boolean;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/toggle-button
 */
export const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  ToggleButtonProps
>(
  (
    {
      className,
      variant = "brandSolid",
      size = "small",
      children,
      prefixIcon,
      suffixIcon,
      loading = false,
      asChild = false,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { rootProps, stateProps, restProps } = useToggle(otherProps);
    const classNames = toggleButton({ variant, size });
    const dataProps = {
      ...stateProps,
      "data-loading": loading ? "" : undefined,
    };

    return (
      <Comp
        ref={ref}
        className={clsx(classNames.root, className)}
        {...dataProps}
        {...rootProps}
        {...restProps}
      >
        {prefixIcon && (
          <Slot aria-hidden {...dataProps} className={classNames.prefixIcon}>
            {prefixIcon}
          </Slot>
        )}
        <span {...dataProps} className={classNames.label}>
          {children}
        </span>
        {suffixIcon && (
          <Slot aria-hidden {...dataProps} className={classNames.suffixIcon}>
            {suffixIcon}
          </Slot>
        )}
        {loading ? (
          <ProgressCircle
            {...dataProps}
            className={classNames.progressCircle}
          />
        ) : null}
      </Comp>
    );
  },
);
ToggleButton.displayName = "ToggleButton";
