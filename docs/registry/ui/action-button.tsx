"use client";

import "@seed-design/stylesheet/progressCircle.css";
import "@seed-design/stylesheet/actionButton.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  actionButton,
  type ActionButtonVariantProps,
} from "@seed-design/recipe/actionButton";
import { ProgressCircle } from "./progress-circle";

export interface ActionButtonProps extends ActionButtonVariantProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  loading?: boolean;

  /**
   * @default false
   */
  asChild?: boolean;
}

interface ReactActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ActionButtonProps {}

/**
 * @see https://v3.seed-design.io/docs/react/components/action-button
 */
export const ActionButton = React.forwardRef<
  HTMLButtonElement,
  ReactActionButtonProps
>(
  (
    {
      className,
      variant = "brandSolid",
      size = "medium",
      children,
      prefixIcon,
      suffixIcon,
      loading = false,
      layout = "withText",
      asChild = false,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const classNames = actionButton({ variant, layout, size });
    const dataProps = {
      "data-loading": loading ? "" : undefined,
    };

    if (
      layout === "iconOnly" &&
      !(otherProps["aria-label"] || otherProps["aria-labelledby"])
    ) {
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
        {layout === "withText" ? (
          <>
            {prefixIcon && (
              <Slot
                aria-hidden
                {...dataProps}
                className={classNames.prefixIcon}
              >
                {prefixIcon}
              </Slot>
            )}
            <span {...dataProps} className={classNames.label}>
              {children}
            </span>
            {suffixIcon && (
              <Slot
                aria-hidden
                {...dataProps}
                className={classNames.suffixIcon}
              >
                {suffixIcon}
              </Slot>
            )}
          </>
        ) : (
          <Slot aria-hidden {...dataProps} className={classNames.icon}>
            {children}
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
ActionButton.displayName = "ActionButton";
