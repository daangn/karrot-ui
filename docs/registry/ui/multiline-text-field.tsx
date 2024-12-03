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

const useLayoutEffect = globalThis?.document
  ? React.useLayoutEffect
  : React.useEffect;

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
      value,
    } = useTextField({ elementType: "textarea", ...restProps });

    const { description, errorMessage, maxGraphemeCount, style } = restProps;

    const classNames = textField({ size });

    const indicator = isRequired ? requiredIndicator : optionalIndicator;

    const renderDescription = !isInvalid && description;
    const renderErrorMessage = isInvalid && !!errorMessage;
    const renderCharacterCount = !hideGraphemeCount && maxGraphemeCount;

    // referenced from React Spectrum
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    const onHeightChange = React.useCallback(() => {
      // Quiet textareas always grow based on their text content.
      // Standard textareas also grow by default, unless an explicit height is set.
      if (style?.height && inputRef.current) {
        const input = inputRef.current;
        input.style.height = "";
      }
      if (!style?.height && inputRef.current) {
        const input = inputRef.current;
        const prevAlignment = input.style.alignSelf;
        const prevOverflow = input.style.overflow;
        // Firefox scroll position is lost when overflow: 'hidden' is applied so we skip applying it.
        // The measure/applied height is also incorrect/reset if we turn on and off
        // overflow: hidden in Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1787062
        const isFirefox = "MozAppearance" in input.style;
        if (!isFirefox) {
          input.style.overflow = "hidden";
        }
        input.style.alignSelf = "start";
        input.style.height = "auto";
        // offsetHeight - clientHeight accounts for the border/padding.
        input.style.height = `${
          input.scrollHeight + (input.offsetHeight - input.clientHeight)
        }px`;
        input.style.overflow = prevOverflow;
        input.style.alignSelf = prevAlignment;
      }
    }, [inputRef, style?.height]);

    useLayoutEffect(() => {
      if (inputRef.current) {
        onHeightChange();
      }
    }, [onHeightChange, value, inputRef]);

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
            ref={mergeRefs(ref, inputRef)}
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

function mergeRefs<T>(...refs: React.ForwardedRef<T>[]): React.ForwardedRef<T> {
  if (refs.length === 1) {
    return refs[0];
  }

  return (value: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    }
  };
}
