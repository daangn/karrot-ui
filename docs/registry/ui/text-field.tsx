"use client";

import "@seed-design/stylesheet/textField.css";

import * as React from "react";
import clsx from "clsx";
import {
  textField,
  type TextFieldVariantProps,
} from "@seed-design/recipe/textField";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";
import {
  useTextField,
  type UseTextFieldProps,
} from "@seed-design/react-text-field";
import { Slot } from "@radix-ui/react-slot";
import type { Assign } from "../util/types";

export interface TextFieldProps
  extends UseTextFieldProps,
    TextFieldVariantProps {
  requiredIndicator?: string;
  optionalIndicator?: string;

  prefix?: React.ReactNode;
  suffix?: React.ReactNode;

  hideGraphemeCount?: boolean;
}

type ReactTextFieldProps = Assign<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "children">,
  TextFieldProps
>;

export const TextField = React.forwardRef<
  HTMLInputElement,
  ReactTextFieldProps
>(
  (
    {
      size = "medium",
      requiredIndicator,
      optionalIndicator,
      prefix,
      suffix,
      hideGraphemeCount,
      ...otherProps
    },
    ref,
  ) => {
    const {
      rootProps: { className: rootClassName, ...rootProps },
      inputProps: { className: inputClassName, ...inputProps },
      labelProps: { className: labelClassName, ...labelProps },
      descriptionProps,
      errorMessageProps,
      renderDescription,
      renderErrorMessage,
      stateProps,
      restProps,
      isRequired,
      graphemes,
    } = useTextField(otherProps);

    const { label, description, errorMessage, maxGraphemeCount } = otherProps;

    const classNames = textField({ size });

    const indicator = isRequired ? requiredIndicator : optionalIndicator;

    const renderGraphemeCount = !hideGraphemeCount && maxGraphemeCount;

    return (
      <div
        className={clsx(classNames.root, rootClassName)}
        {...rootProps}
        {...stateProps}
      >
        {label && (
          // XXX
          // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
          <label {...labelProps} className={classNames.header}>
            <span className={clsx(classNames.label, labelClassName)}>
              {label}
            </span>
            {indicator && (
              <span className={classNames.indicator}>{indicator}</span>
            )}
          </label>
        )}
        <div {...stateProps} className={clsx(classNames.input)}>
          {prefix &&
            (typeof prefix === "string" ? (
              <div className={classNames.prefixText}>{prefix}</div>
            ) : (
              <Slot {...stateProps} className={clsx(classNames.prefixIcon)}>
                {prefix}
              </Slot>
            ))}
          <input
            ref={ref}
            className={clsx(classNames.inputText, inputClassName)}
            {...inputProps}
            {...restProps}
          />
          {suffix &&
            (typeof suffix === "string" ? (
              <div className={classNames.suffixText}>{suffix}</div>
            ) : (
              <Slot {...stateProps} className={clsx(classNames.suffixIcon)}>
                {suffix}
              </Slot>
            ))}
        </div>
        {(renderDescription || renderErrorMessage || renderGraphemeCount) && (
          <div className={classNames.footer}>
            {renderDescription && (
              <div {...descriptionProps} className={classNames.description}>
                {description}
              </div>
            )}
            {renderErrorMessage && (
              <div {...errorMessageProps} className={classNames.errorMessage}>
                <IconExclamationmarkCircleFill
                  className={classNames.errorIcon}
                />
                <div>{errorMessage}</div>
              </div>
            )}
            {renderGraphemeCount && (
              <div className={classNames.graphemeCount}>
                <span
                  {...stateProps}
                  className={classNames.currentGraphemeCount}
                >
                  {graphemes.length}
                </span>
                <span className={classNames.maxGraphemeCount}>
                  /{maxGraphemeCount}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);
TextField.displayName = "TextField";
