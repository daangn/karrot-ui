"use client";

import "@seed-design/stylesheet/progressCircle.css";
import "@seed-design/stylesheet/reactionButton.css";

import { Slot } from "@radix-ui/react-slot";
import { useToggle, type UseToggleProps } from "@seed-design/react-toggle";
import {
  reactionButton,
  type ReactionButtonVariantProps,
} from "@seed-design/recipe/reactionButton";
import clsx from "clsx";
import * as React from "react";
import { ProgressCircle } from "./progress-circle";

export interface ReactionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    UseToggleProps,
    ReactionButtonVariantProps {
  prefixIcon?: React.ReactNode;

  count?: number;

  loading?: boolean;

  /**
   * @default false
   */
  asChild?: boolean;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/reaction-button
 */
export const ReactionButton = React.forwardRef<
  HTMLButtonElement,
  ReactionButtonProps
>(
  (
    {
      className,
      size = "small",
      children,
      prefixIcon,
      count,
      loading = false,
      asChild = false,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { rootProps, stateProps, restProps } = useToggle(otherProps);
    const classNames = reactionButton({ size });
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
        <span {...dataProps} className={classNames.count}>
          {count}
        </span>
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
ReactionButton.displayName = "ReactionButton";
