"use client";

import "@seed-design/stylesheet/progressCircle.css";

import {
  useProgress,
  useProgressCircle,
  type UseProgressProps,
} from "@seed-design/react-progress";
import {
  progressCircle,
  type ProgressCircleVariantProps,
} from "@seed-design/recipe/progressCircle";
import clsx from "clsx";
import * as React from "react";

export interface ProgressCircleProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, "children">,
    UseProgressProps,
    Omit<ProgressCircleVariantProps, "isIndeterminate"> {}

/**
 * @see https://v3.seed-design.io/docs/react/components/progress-circle
 */
export const ProgressCircle = React.forwardRef<
  SVGSVGElement,
  ProgressCircleProps
>((props, ref) => {
  const {
    className,
    style,
    size = "40",
    tone = "neutral",
    ...otherProps
  } = props;
  const { value, percent, indeterminate, progressProps } =
    useProgress(otherProps);
  const classNames = progressCircle({ size, tone, indeterminate });
  const { rootProps, trackProps, rangeProps } = useProgressCircle({
    value,
    percent,
    indeterminate,
  });

  const ariaLabel =
    otherProps["aria-label"] || indeterminate
      ? "loading..."
      : `${percent} percent`;

  return (
    <svg
      ref={ref}
      {...otherProps}
      {...progressProps}
      aria-label={ariaLabel}
      className={clsx(classNames.root, className)}
      style={{ ...style, ...rootProps.style }}
    >
      <circle className={classNames.track} {...trackProps} />
      <circle className={classNames.range} {...rangeProps} />
    </svg>
  );
});

ProgressCircle.displayName = "ProgressCircle";
