import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { splitGraphemes } from "unicode-segmenter/grapheme";

import { dataAttr, ariaAttr, elementProps, inputProps, labelProps } from "@seed-design/dom-utils";
import { getDescriptionId, getErrorMessageId, getInputId, getLabelId } from "./dom";

import { useCallbackRef } from "@radix-ui/react-use-callback-ref";

import {
  useId,
  useMemo,
  useState,
  useCallback,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type FocusEvent,
  type ChangeEvent,
} from "react";

export interface UseTextFieldStateProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (values: {
    value: string;
    graphemes: string[];
    slicedValue: string;
    slicedGraphemes: string[];
  }) => void;
  maxGraphemeCount?: number;
}

export function useTextFieldState({
  value: __value,
  defaultValue,
  onValueChange: __onValueChange,
  maxGraphemeCount,
}: UseTextFieldStateProps) {
  const [value, setValue] = useControllableState({
    prop: __value,
    defaultProp: defaultValue,
  });

  const graphemes = useMemo(
    () => Array.from(splitGraphemes(value ?? defaultValue ?? "")),
    [value, defaultValue],
  );

  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const onValueChange = useCallbackRef(__onValueChange);

  const handleValueChange = useCallback(
    (newValue: string) => {
      const graphemes = Array.from(splitGraphemes(newValue));

      const value = graphemes.join("");

      setValue(value);

      const slicedGraphemes = maxGraphemeCount ? graphemes.slice(0, maxGraphemeCount) : graphemes;
      const slicedValue = slicedGraphemes.join("");

      onValueChange({ value, graphemes, slicedValue, slicedGraphemes });
    },
    [setValue, onValueChange, maxGraphemeCount],
  );

  return {
    value,
    graphemes,
    isHovered,
    isPressed,
    isFocused,
    isFocusVisible,

    handleValueChange,
    setIsHovered,
    setIsPressed,
    setIsFocused,
    setIsFocusVisible,
  };
}

export interface UseTextFieldProps extends UseTextFieldStateProps {
  /**
   * @default false
   */
  required?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * @default false
   */
  readOnly?: boolean;
  /**
   * @default false
   */
  invalid?: boolean;

  name?: string;

  label?: string;
  description?: string;
  errorMessage?: string;

  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function useTextField(props: UseTextFieldProps) {
  const id = useId();
  const {
    value: propValue,
    label,
    description,
    errorMessage,
    defaultValue,
    disabled = false,
    invalid = false,
    readOnly = false,
    required = false,
    maxGraphemeCount,
    onBlur,
    onFocus,
    onChange,
    onValueChange,
    ...restProps
  } = props;

  const {
    value: stateValue,
    graphemes,
    isHovered,
    isPressed,
    isFocused,
    isFocusVisible,
    handleValueChange,
    setIsHovered,
    setIsPressed,
    setIsFocused,
    setIsFocusVisible,
  } = useTextFieldState({
    value: propValue,
    defaultValue,
    onValueChange,
    maxGraphemeCount,
  });

  const isUncontrolled = propValue === undefined;

  const renderDescription = !!description;
  const renderErrorMessage = invalid && !!errorMessage;

  const ariaDescribedBy =
    [
      renderDescription ? getDescriptionId(id) : false,
      renderErrorMessage ? getErrorMessageId(id) : false,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const stateProps = elementProps({
    "data-hover": dataAttr(isHovered),
    "data-active": dataAttr(isPressed),
    "data-focus": dataAttr(isFocused),
    "data-readonly": dataAttr(readOnly),
    "data-invalid": dataAttr(invalid),
    "data-grapheme-count": `${graphemes.length}`,
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-disabled": dataAttr(props.disabled),
  });

  return {
    value: stateValue,
    graphemes,
    isFocused,
    isInvalid: invalid,
    isRequired: required,

    handleValueChange,
    setIsFocused,
    setIsFocusVisible,

    renderDescription,
    renderErrorMessage,

    stateProps,
    restProps,

    rootProps: elementProps({
      ...stateProps,
      onPointerMove() {
        setIsHovered(true);
      },
      onPointerDown() {
        setIsPressed(true);
      },
      onPointerUp() {
        setIsPressed(false);
      },
      onPointerLeave() {
        setIsHovered(false);
        setIsPressed(false);
      },
    }),

    labelProps: labelProps({
      ...stateProps,
      id: getLabelId(id),
      htmlFor: getInputId(id),
    }),

    inputProps: inputProps({
      ...stateProps,
      ...(isUncontrolled && defaultValue && { defaultValue }),
      ...(!isUncontrolled && { value: stateValue }),
      ...(label && { "aria-labelledby": getLabelId(id) }),
      "aria-describedby": ariaDescribedBy,
      "aria-required": ariaAttr(required),
      "aria-invalid": ariaAttr(invalid),
      disabled,
      readOnly,
      id: getInputId(id),
      name: props.name || id,
      onChange: (event) => {
        setIsFocusVisible(event.target.matches(":focus-visible"));

        handleValueChange(event.target.value);
        onChange?.(event);
      },
      onBlur(event) {
        setIsFocused(false);
        setIsFocusVisible(false);

        onBlur?.(event);
      },
      onFocus(event) {
        setIsFocused(true);
        setIsFocusVisible(event.target.matches(":focus-visible"));

        onFocus?.(event);
      },
    }) as unknown as InputHTMLAttributes<HTMLInputElement> &
      TextareaHTMLAttributes<HTMLTextAreaElement>,

    descriptionProps: elementProps({
      ...stateProps,
      ...(invalid && { style: { display: "none" } }),
      id: getDescriptionId(id),
    }),

    errorMessageProps: elementProps({
      ...stateProps,
      id: getErrorMessageId(id),
    }),
  };
}
