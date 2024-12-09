"use client";

import {
  useRadioGroup,
  type UseRadioGroupProps,
  type RadioItemProps,
} from "@seed-design/react-radio-group";
import {
  useCheckbox,
  type UseCheckboxProps,
} from "@seed-design/react-checkbox";
import {
  type SelectBoxVariantProps,
  selectBox,
} from "@seed-design/recipe/selectBox";
import { radio } from "@seed-design/recipe/radio";
import {
  checkbox,
  type CheckboxVariantProps,
} from "@seed-design/recipe/checkbox";
import {
  IconCheckmarkFatFill,
  IconMinusFatFill,
} from "@daangn/react-monochrome-icon";
import clsx from "clsx";
import * as React from "react";

import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

import "@seed-design/stylesheet/radio.css";
import "@seed-design/stylesheet/checkbox.css";
import "@seed-design/stylesheet/selectBox.css";

const SelectBoxRadioGroupContext = React.createContext<{
  api: ReturnType<typeof useRadioGroup>;
} | null>(null);

const useSelectBoxContext = () => {
  const context = React.useContext(SelectBoxRadioGroupContext);
  if (!context)
    throw new Error(
      "SelectBoxRadio cannot be rendered outside the SelectBoxRadioGroup",
    );

  return context;
};

export interface SelectBoxRadioGroupProps
  extends Omit<UseRadioGroupProps, "disabled"> {}

export const SelectBoxRadioGroup = React.forwardRef<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, SelectBoxRadioGroupProps>
>(({ className, children, ...otherProps }, ref) => {
  const api = useRadioGroup(otherProps);
  const {
    rootProps: { "aria-labelledby": _, ...rootProps },
    restProps,
  } = api;

  const classNames = selectBox();

  return (
    <div
      ref={ref}
      {...rootProps}
      {...restProps}
      className={clsx(classNames.root, className)}
    >
      {/* <div {...labelProps}>
        {label}
      </div> */}
      <SelectBoxRadioGroupContext.Provider value={{ api }}>
        {children}
      </SelectBoxRadioGroupContext.Provider>
    </div>
  );
});
SelectBoxRadioGroup.displayName = "SelectBoxRadioGroup";

export interface SelectBoxRadioProps
  extends SelectBoxVariantProps,
    Omit<RadioItemProps, "disabled" | "invalid"> {
  label: string;
  description?: string;
}

type ReactSelectBoxRadio = Assign<
  Omit<React.HTMLAttributes<HTMLInputElement>, "children">,
  SelectBoxRadioProps
>;

export const SelectBoxRadio = React.forwardRef<
  HTMLInputElement,
  ReactSelectBoxRadio
>(({ className, label, description, ...otherProps }, ref) => {
  const { api } = useSelectBoxContext();
  const { getItemProps } = api;
  const { rootProps, restProps, hiddenInputProps, controlProps, stateProps } =
    getItemProps(otherProps);

  const radioClassNames = radio({ size: "large" });
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
        className={clsx(selectBoxClassNames.control, radioClassNames.root)}
      >
        <div {...stateProps} className={radioClassNames.icon} />
      </div>
    </label>
  );
});
SelectBoxRadio.displayName = "SelectBoxRadio";

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

export const SelectBoxCheck = React.forwardRef<
  HTMLInputElement,
  Assign<
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "children">,
    SelectBoxCheckProps
  >
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
