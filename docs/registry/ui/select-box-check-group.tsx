"use client";

import {
  type UseCheckboxProps,
  useCheckbox,
} from "@seed-design/react-checkbox";
import {
  checkbox,
  type CheckboxVariantProps,
} from "@seed-design/recipe/checkbox";
import {
  type SelectBoxVariantProps,
  selectBox,
} from "@seed-design/recipe/selectBox";
import clsx from "clsx";
import * as React from "react";

import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

import "@seed-design/stylesheet/checkbox.css";
import "@seed-design/stylesheet/selectBox.css";
import {
  IconCheckmarkFatFill,
  IconMinusFatFill,
} from "@daangn/react-monochrome-icon";

export const SelectBoxCheckGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...otherProps }, ref) => {
  const classNames = selectBox();

  return (
    <div ref={ref} {...otherProps} className={clsx(classNames.root, className)}>
      {children}
    </div>
  );
});
SelectBoxCheckGroup.displayName = "SelectBoxCheckGroup";

export interface SelectBoxCheckProps
  extends SelectBoxVariantProps,
    Pick<CheckboxVariantProps, "indeterminate">,
    Omit<UseCheckboxProps, "disabled" | "invalid"> {
  label: string;
  description?: string;
}

type ReactSelectBoxCheck = Assign<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "children">,
  SelectBoxCheckProps
>;

export const SelectBoxCheck = React.forwardRef<
  HTMLInputElement,
  ReactSelectBoxCheck
>(({ className, label, description, indeterminate, ...otherProps }, ref) => {
  const { rootProps, restProps, hiddenInputProps, controlProps, stateProps } =
    useCheckbox(otherProps);

  const checkClassNames = checkbox({
    size: "large",
    variant: "square",
    indeterminate,
  });
  const selectBoxClassNames = selectBox();

  return (
    <label
      className={clsx(selectBoxClassNames.box, className)}
      {...rootProps}
      {...restProps}
    >
      <input ref={ref} {...hiddenInputProps} style={visuallyHidden} />
      <div className={selectBoxClassNames.content}>
        <span className={selectBoxClassNames.label}>{label}</span>
        {description && (
          <span className={selectBoxClassNames.description}>{description}</span>
        )}
      </div>
      <div
        {...controlProps}
        className={clsx(selectBoxClassNames.control, checkClassNames.control)}
      >
        {!indeterminate ? (
          <IconCheckmarkFatFill
            aria-hidden
            {...stateProps}
            className={checkClassNames.icon}
          />
        ) : (
          <IconMinusFatFill
            aria-hidden
            {...stateProps}
            className={checkClassNames.icon}
          />
        )}
      </div>
    </label>
  );
});
SelectBoxCheck.displayName = "SelectBoxCheck";
