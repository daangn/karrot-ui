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
import type { Assign } from "../util/types";

export interface MultilineTextFieldProps
  extends UseTextFieldProps,
    TextFieldVariantProps {
  label?: string;
  requiredIndicator?: string;
  optionalIndicator?: string;

  description?: string;
  errorMessage?: string;

  maxGraphemeCount?: number;
  hideGraphemeCount?: boolean;
}

type ReactMultilineTextFieldProps = Assign<
  Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "children" | "maxLength"
  >,
  MultilineTextFieldProps
>;

export const MultilineTextField = React.forwardRef<
  HTMLTextAreaElement,
  ReactMultilineTextFieldProps
>(
  (
    {
      size = "medium",
      label,
      requiredIndicator,
      optionalIndicator,
      hideGraphemeCount,
      ...restProps
    },
    ref,
  ) => {
    const {
      rootProps: { className: rootClassName, ...rootProps },
      textareaProps: { className: textareaClassName, ...textareaProps },
      labelProps: { className: labelClassName, ...labelProps },
      descriptionProps,
      errorMessageProps,
      stateProps,
      restProps: restInternalProps,
      isInvalid,
      isRequired,
      graphemes,
    } = useTextField({ elementType: "textarea", ...restProps });

    const { description, errorMessage, maxGraphemeCount } = restProps;

    const classNames = textField({ size });

    const indicator = isRequired ? requiredIndicator : optionalIndicator;

    const renderDescription = !isInvalid && description;
    const renderErrorMessage = isInvalid && !!errorMessage;
    const renderCharacterCount = !hideGraphemeCount && maxGraphemeCount;

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
        <div className={classNames.input}>
          <textarea
            rows={3}
            ref={ref}
            className={clsx(classNames.inputText, textareaClassName)}
            {...textareaProps}
            {...restInternalProps}
          />
        </div>
        {(renderDescription || renderErrorMessage || renderCharacterCount) && (
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
            {renderCharacterCount && (
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
MultilineTextField.displayName = "MultilineTextField";
