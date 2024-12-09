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

const useLayoutEffect = globalThis?.document
  ? React.useLayoutEffect
  : React.useEffect;

const FormControlContext = React.createContext<{
  api: ReturnType<typeof useTextField>;
  variantProps: TextFieldVariantProps;
} | null>(null);

const useFormControlContext = () => {
  const context = React.useContext(FormControlContext);
  if (!context)
    throw new Error(
      "Parts of FormControl cannot be rendered outside the FormControl",
    );

  return context;
};

export interface FormControlProps
  extends UseTextFieldProps,
    TextFieldVariantProps {
  requiredIndicator?: string;
  optionalIndicator?: string;

  hideGraphemeCount?: boolean;
}

export const FormControl = React.forwardRef<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, FormControlProps>
>(
  (
    {
      children,
      className,
      size = "medium",
      requiredIndicator,
      optionalIndicator,
      hideGraphemeCount,
      ...otherProps
    },
    ref,
  ) => {
    const api = useTextField(otherProps);
    const {
      rootProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
      renderDescription,
      renderErrorMessage,
      stateProps,
      isRequired,
      graphemes,
    } = api;

    const { label, description, errorMessage, maxGraphemeCount } = otherProps;

    const classNames = textField({ size });

    const indicator = isRequired ? requiredIndicator : optionalIndicator;

    const renderGraphemeCount = !hideGraphemeCount && maxGraphemeCount;

    return (
      <div
        ref={ref}
        className={clsx(className, classNames.root)}
        {...rootProps}
        {...stateProps}
      >
        {label && (
          // XXX
          // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
          <label {...labelProps} className={classNames.header}>
            <span className={classNames.label}>{label}</span>
            {indicator && (
              <span className={classNames.indicator}>{indicator}</span>
            )}
          </label>
        )}
        <FormControlContext.Provider value={{ api, variantProps: { size } }}>
          {children}
        </FormControlContext.Provider>
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
              <div className={classNames.characterCount}>
                <span
                  {...stateProps}
                  className={classNames.currentCharacterCount}
                >
                  {graphemes.length}
                </span>
                <span className={classNames.maxCharacterCount}>
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
FormControl.displayName = "FormControl";

export interface TextFieldProps {
  // XXX: 둘 다 받지는 못하면 좋을 것 같음
  prefix?: string;
  prefixIcon?: React.ReactNode;

  // XXX: 둘 다 받지는 못하면 좋을 것 같음
  suffix?: string;
  suffixIcon?: React.ReactNode;
}

export const TextField = React.forwardRef<
  HTMLInputElement,
  Assign<
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "children">,
    TextFieldProps
  >
>(
  (
    { className, prefix, prefixIcon, suffix, suffixIcon, ...otherProps },
    ref,
  ) => {
    const { api, variantProps } = useFormControlContext();

    const { inputProps, restProps, stateProps } = api;

    const classNames = textField(variantProps);

    return (
      <div {...stateProps} className={clsx(className, classNames.input)}>
        {prefix && <div className={classNames.prefixText}>{prefix}</div>}
        {prefixIcon && (
          <Slot {...stateProps} className={clsx(classNames.prefixIcon)}>
            {prefixIcon}
          </Slot>
        )}
        <input
          ref={ref}
          className={clsx(classNames.inputText)}
          {...inputProps}
          {...restProps}
          {...otherProps}
        />
        {suffix && <div className={classNames.suffixText}>{suffix}</div>}
        {suffixIcon && (
          <Slot {...stateProps} className={clsx(classNames.suffixIcon)}>
            {suffixIcon}
          </Slot>
        )}
      </div>
    );
  },
);
TextField.displayName = "TextField";

export type MultilineTextFieldProps = {};

export const MultilineTextField = React.forwardRef<
  HTMLTextAreaElement,
  Assign<
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "children">,
    MultilineTextFieldProps
  >
>(({ className, ...otherProps }, ref) => {
  const { api, variantProps } = useFormControlContext();

  const { inputProps, restProps, value } = api;

  const classNames = textField(variantProps);

  // referenced from React Spectrum
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: intended
  const onHeightChange = React.useCallback(() => {
    if (!inputRef.current) return;
    if (otherProps.style?.height) return;

    // Quiet textareas always grow based on their text content.
    // Standard textareas also grow by default, unless an explicit height is set.

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
  }, [inputRef, otherProps.style?.height]);

  useLayoutEffect(() => {
    if (inputRef.current) {
      onHeightChange();
    }
  }, [onHeightChange, value, inputRef]);

  return (
    <textarea
      rows={1}
      ref={mergeRefs(inputRef, ref)}
      className={clsx(className, classNames.input, classNames.inputText)}
      {...inputProps}
      {...restProps}
      {...otherProps}
    />
  );
});

// TODO: migrate
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
