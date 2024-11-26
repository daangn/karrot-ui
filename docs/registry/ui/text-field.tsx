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

export interface TextFieldProps
  extends UseTextFieldProps,
    TextFieldVariantProps {
  requiredIndicator?: string;
  optionalIndicator?: string;

  prefix?: React.ReactNode;
  suffix?: React.ReactNode;

  label?: string;
  description?: string;
  errorMessage?: string;

  hideCharacterCount?: boolean;
}

type ReactTextFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "children" | "size" | "prefix" | "suffix"
> &
  TextFieldProps;

export const TextField = React.forwardRef<
  HTMLInputElement,
  ReactTextFieldProps
>((props, ref) => {
  const {
    rootProps: { className: rootClassName, ...rootProps },
    inputProps: { className: inputClassName, ...inputProps },
    labelProps: { className: labelClassName, ...labelProps },
    descriptionProps,
    errorMessageProps,
    stateProps,
    restProps,
    isInvalid,
    isRequired,
    graphemes,
  } = useTextField(props);

  const {
    size = "medium",
    label,
    requiredIndicator,
    optionalIndicator,
    errorMessage,
    description,
    hideCharacterCount,
    maxLength,
  } = props;

  const classNames = textField({ size });

  const indicator = isRequired ? requiredIndicator : optionalIndicator;
  const renderDescription = !isInvalid && description;
  const renderErrorMessage = isInvalid && !!errorMessage;
  const renderCharacterCount = !hideCharacterCount && maxLength;

  return (
    <div
      className={clsx(classNames.root, rootClassName)}
      {...rootProps}
      {...stateProps}
    >
      {label && (
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
      <div className={classNames.content}>
        <input
          ref={ref}
          className={clsx(classNames.input, inputClassName)}
          {...inputProps}
          {...restProps}
        />
        {(renderDescription || renderErrorMessage || renderCharacterCount) && (
          <div>
            {renderDescription && (
              <div {...descriptionProps} className={classNames.description}>
                {description}
              </div>
            )}
            {renderErrorMessage && (
              <div
                {...stateProps}
                {...errorMessageProps}
                className={classNames.description}
              >
                <IconExclamationmarkCircleFill
                  className={classNames.errorIcon}
                />
                <div>{errorMessage}</div>
              </div>
            )}
            {renderCharacterCount && (
              <div {...stateProps}>
                <span>{graphemes.length}</span>
                <span>/{maxLength}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
TextField.displayName = "TextField";
