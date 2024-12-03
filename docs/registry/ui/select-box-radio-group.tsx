"use client";

import {
  useRadioGroup,
  type UseRadioGroupProps,
  type RadioItemProps,
} from "@seed-design/react-radio-group";
import { radio } from "@seed-design/recipe/radio";
import {
  type SelectBoxVariantProps,
  selectBox,
} from "@seed-design/recipe/selectBox";
import clsx from "clsx";
import * as React from "react";

import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

import "@seed-design/stylesheet/radio.css";
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

type ReactSelectBoxRadioGroupProps = Assign<
  React.HTMLAttributes<HTMLDivElement>,
  SelectBoxRadioGroupProps
>;

export const SelectBoxRadioGroup = React.forwardRef<
  HTMLDivElement,
  ReactSelectBoxRadioGroupProps
>(({ className, children, ...otherProps }, ref) => {
  const api = useRadioGroup(otherProps);
  const {
    rootProps: { "aria-labelledby": _, ...rootProps },
    restProps,
  } = api;

  return (
    <div ref={ref} {...rootProps} {...restProps} className={className}>
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
      className={clsx(selectBoxClassNames.root, className)}
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
