"use client";

import {
  type RadioItemProps,
  type UseRadioGroupProps,
  useRadioGroup,
} from "@seed-design/react-radio-group";
import {
  type RadioGroupVariantProps,
  radioGroup,
} from "@seed-design/recipe/radioGroup";
import { radioControl } from "@seed-design/recipe/radioControl";
import { type RadioVariantProps, radio } from "@seed-design/recipe/radio";
import clsx from "clsx";
import * as React from "react";

import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

import "@seed-design/stylesheet/radioControl.css";
import "@seed-design/stylesheet/radio.css";
import "@seed-design/stylesheet/radioGroup.css";

const RadioContext = React.createContext<{
  api: ReturnType<typeof useRadioGroup>;
  /**
   * @default "medium"
   */
  size: RadioVariantProps["size"];
  /**
   * @default "regular"
   */
  fontWeight: RadioVariantProps["fontWeight"];
  /**
   * @default "vertical"
   */
  orientation: RadioGroupVariantProps["orientation"];
} | null>(null);

const useRadioContext = () => {
  const context = React.useContext(RadioContext);
  if (!context)
    throw new Error("Radio cannot be rendered outside the RadioGroup");

  return context;
};

export interface RadioGroupProps
  extends RadioGroupVariantProps,
    UseRadioGroupProps,
    RadioVariantProps {
  label?: string;
}

type ReactRadioGroupProps = RadioGroupProps &
  Assign<React.HTMLAttributes<HTMLFieldSetElement>, UseRadioGroupProps>;

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  ReactRadioGroupProps
>(
  (
    {
      className,
      orientation = "vertical",
      size = "medium",
      fontWeight = "regular",
      label,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const api = useRadioGroup(otherProps);
    const {
      rootProps,
      labelProps: { className: labelClassName, ...restLabelProps },
    } = api;

    const classNames = radioGroup({ orientation });

    return (
      <fieldset
        ref={ref}
        {...rootProps}
        className={clsx(classNames.root, className)}
      >
        {label && (
          <legend
            className={clsx(classNames.label, labelClassName)}
            {...restLabelProps}
          >
            {label}
          </legend>
        )}
        <div className={classNames.radios}>
          <RadioContext.Provider value={{ api, size, fontWeight, orientation }}>
            {children}
          </RadioContext.Provider>
        </div>
      </fieldset>
    );
  },
);
RadioGroup.displayName = "RadioGroup";

export interface RadioProps extends RadioVariantProps {}

type ReactRadioProps = RadioProps &
  Assign<React.HTMLAttributes<HTMLInputElement>, RadioItemProps>;

export const Radio = React.forwardRef<HTMLInputElement, ReactRadioProps>(
  ({ className, size, fontWeight, children, ...otherProps }, ref) => {
    const { api, size: ctxSize, fontWeight: ctxFontWeight } = useRadioContext();
    const { getItemProps } = api;
    const { stateProps, restProps, controlProps, hiddenInputProps, rootProps } =
      getItemProps(otherProps);

    const classNames = radio({
      size: size ?? ctxSize,
      fontWeight: fontWeight ?? ctxFontWeight,
    });
    const controlClassNames = radioControl({ size: size ?? ctxSize });

    return (
      <label
        className={clsx(classNames.root, className)}
        {...rootProps}
        {...restProps}
      >
        <div
          {...controlProps}
          className={clsx(classNames.control, controlClassNames.root)}
        >
          <div {...stateProps} className={controlClassNames.icon} />
        </div>
        <input ref={ref} {...hiddenInputProps} style={visuallyHidden} />
        <span {...stateProps} className={classNames.label}>
          {children}
        </span>
      </label>
    );
  },
);
Radio.displayName = "Radio";
