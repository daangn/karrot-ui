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
  type SelectBoxGroupVariantProps,
  selectBoxGroup,
} from "@seed-design/recipe/selectBoxGroup";
import { IconCheckmarkFatFill } from "@daangn/react-monochrome-icon";
import clsx from "clsx";
import * as React from "react";

import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

import "@seed-design/stylesheet/selectBoxGroup.css";

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
  extends Assign<
    React.HTMLAttributes<HTMLDivElement>,
    Omit<UseRadioGroupProps, "disabled">
  > {}

export const SelectBoxRadioGroup = React.forwardRef<
  HTMLDivElement,
  SelectBoxRadioGroupProps
>(({ className, children, ...otherProps }, ref) => {
  const api = useRadioGroup(otherProps);
  const {
    rootProps: { "aria-labelledby": _, ...rootProps },
    restProps,
  } = api;

  const classNames = selectBoxGroup();

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
  extends SelectBoxGroupVariantProps,
    Assign<
      Omit<React.HTMLAttributes<HTMLInputElement>, "children">,
      Omit<RadioItemProps, "disabled" | "invalid">
    > {
  label: string;
  description?: string;
}

export const SelectBoxRadio = React.forwardRef<
  HTMLInputElement,
  SelectBoxRadioProps
>(({ className, label, description, ...otherProps }, ref) => {
  const { api } = useSelectBoxContext();
  const { getItemProps } = api;
  const { rootProps, restProps, hiddenInputProps, controlProps, stateProps } =
    getItemProps(otherProps);

  const classNames = selectBoxGroup();

  return (
    <label
      className={clsx(classNames.box, className)}
      {...rootProps}
      {...restProps}
    >
      <input ref={ref} {...hiddenInputProps} style={visuallyHidden} />
      <div className={classNames.content}>
        <span className={classNames.label}>{label}</span>
        {description && (
          <span className={classNames.description}>{description}</span>
        )}
      </div>
      <div {...controlProps} className={classNames.radioControl}>
        <div {...stateProps} className={classNames.radioIcon} />
      </div>
    </label>
  );
});
SelectBoxRadio.displayName = "SelectBoxRadio";

export interface SelectBoxCheckGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectBoxCheckGroup = React.forwardRef<
  HTMLDivElement,
  SelectBoxCheckGroupProps
>(({ className, children, ...otherProps }, ref) => {
  const classNames = selectBoxGroup();

  return (
    <div ref={ref} {...otherProps} className={clsx(classNames.root, className)}>
      {children}
    </div>
  );
});
SelectBoxCheckGroup.displayName = "SelectBoxCheckGroup";

export interface SelectBoxCheckProps
  extends SelectBoxGroupVariantProps,
    Assign<
      Omit<React.InputHTMLAttributes<HTMLInputElement>, "children">,
      Omit<UseCheckboxProps, "disabled" | "invalid">
    > {
  label: string;
  description?: string;
}

export const SelectBoxCheck = React.forwardRef<
  HTMLInputElement,
  SelectBoxCheckProps
>(({ className, label, description, ...otherProps }, ref) => {
  const { rootProps, restProps, hiddenInputProps, controlProps, stateProps } =
    useCheckbox(otherProps);

  const classNames = selectBoxGroup();

  return (
    <label
      className={clsx(classNames.box, className)}
      {...rootProps}
      {...restProps}
    >
      <input ref={ref} {...hiddenInputProps} style={visuallyHidden} />
      <div className={classNames.content}>
        <span className={classNames.label}>{label}</span>
        {description && (
          <span className={classNames.description}>{description}</span>
        )}
      </div>
      <div {...controlProps} className={classNames.checkboxControl}>
        <IconCheckmarkFatFill
          aria-hidden
          {...stateProps}
          className={classNames.checkboxIcon}
        />
      </div>
    </label>
  );
});
SelectBoxCheck.displayName = "SelectBoxCheck";
