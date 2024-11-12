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
import { type RadioVariantProps, radio } from "@seed-design/recipe/radio";
import clsx from "clsx";
import * as React from "react";

import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

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
  extends Assign<React.HTMLAttributes<HTMLFieldSetElement>, UseRadioGroupProps>,
    RadioGroupVariantProps,
    RadioVariantProps {
  label?: string;
}

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
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

export interface RadioProps
  extends Assign<React.HTMLAttributes<HTMLInputElement>, RadioItemProps>,
    RadioVariantProps {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size, fontWeight, children, ...otherProps }, ref) => {
    const { api, size: ctxSize, fontWeight: ctxFontWeight } = useRadioContext();
    const { getItemProps } = api;
    const { stateProps, restProps, controlProps, hiddenInputProps, rootProps } =
      getItemProps(otherProps);

    // radio별로 지정 가능, context로 fallback
    const classNames = radio({
      size: size ?? ctxSize,
      fontWeight: fontWeight ?? ctxFontWeight,
    });
    return (
      <label
        className={clsx(classNames.root, className)}
        {...rootProps}
        {...restProps}
      >
        <div {...controlProps} className={classNames.control}>
          <div {...stateProps} className={classNames.icon} />
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
