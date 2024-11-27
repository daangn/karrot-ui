"use client";

import {
  type UseCheckboxProps,
  useCheckbox,
} from "@seed-design/react-checkbox";
import {
  type CheckboxVariantProps,
  checkbox,
} from "@seed-design/recipe/checkbox";
import clsx from "clsx";
import * as React from "react";
import type { CSSProperties } from "react";
import {
  IconCheckmarkFatFill,
  IconMinusFatFill,
} from "@daangn/react-monochrome-icon";

import "@seed-design/stylesheet/checkbox.css";

type Assign<T, U> = Omit<T, keyof U> & U;

const visuallyHidden: CSSProperties = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
};

export interface CheckboxProps extends CheckboxVariantProps {
  label: React.ReactNode;
}

interface ReactCheckboxProps
  extends Omit<
      Assign<React.InputHTMLAttributes<HTMLInputElement>, UseCheckboxProps>,
      "size"
    >,
    CheckboxProps {}

export const Checkbox = React.forwardRef<HTMLInputElement, ReactCheckboxProps>(
  (
    {
      className,
      size = "medium",
      label,
      bold = false,
      indeterminate = false,
      variant = "square",
      ...otherProps
    },
    ref,
  ) => {
    const { stateProps, restProps, controlProps, hiddenInputProps, rootProps } =
      useCheckbox(otherProps);

    const classNames = checkbox({ size, bold, indeterminate, variant });

    return (
      <label className={clsx(classNames.root, className)} {...rootProps}>
        <div {...controlProps} className={classNames.control}>
          {!indeterminate ? (
            <IconCheckmarkFatFill
              aria-hidden
              {...stateProps}
              className={classNames.icon}
            />
          ) : (
            <IconMinusFatFill
              aria-hidden
              {...stateProps}
              className={classNames.icon}
            />
          )}
        </div>
        <input
          ref={ref}
          {...hiddenInputProps}
          {...restProps}
          style={visuallyHidden}
        />
        <span {...stateProps} className={classNames.label}>
          {label}
        </span>
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";
