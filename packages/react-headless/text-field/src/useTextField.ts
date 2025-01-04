import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { ariaAttr, dataAttr, elementProps, inputProps, labelProps } from "@seed-design/dom-utils";
import { useCallback, useId, useMemo, useState } from "react";
import { splitGraphemes } from "unicode-segmenter/grapheme";
import { getDescriptionId, getErrorMessageId, getInputId, getLabelId } from "./dom";

export interface UseTextFieldStateProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (values: {
    value: string;
    graphemes: string[];
    slicedValue: string;
    slicedGraphemes: string[];
  }) => void;
  maxGraphemeCount?: number | undefined;
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
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  // TODO: prevent duplicate call of splitGraphemes. this is expensive operation.
  const graphemes = useMemo(
    () => Array.from(splitGraphemes(value ?? defaultValue ?? "")),
    [value, defaultValue],
  );

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

  const [isLabelRendered, setIsLabelRendered] = useState(false);
  const labelRef = useCallback((node: HTMLLabelElement | null) => {
    setIsLabelRendered(!!node);
  }, []);
  const [isDescriptionRendered, setIsDescriptionRendered] = useState(false);
  const descriptionRef = useCallback((node: HTMLElement | null) => {
    setIsDescriptionRendered(!!node);
  }, []);
  const [isErrorMessageRendered, setIsErrorMessageRendered] = useState(false);
  const errorMessageRef = useCallback((node: HTMLElement | null) => {
    setIsErrorMessageRendered(!!node);
  }, []);

  return {
    refs: {
      label: labelRef,
      description: descriptionRef,
      errorMessage: errorMessageRef,
    },

    value,
    graphemes,
    isHovered,
    isActive,
    isFocused,
    isFocusVisible,
    isLabelRendered,
    isDescriptionRendered,
    isErrorMessageRendered,

    handleValueChange,
    setIsHovered,
    setIsActive,
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
}

export type UseTextFieldReturn = ReturnType<typeof useTextField>;

export function useTextField(props: UseTextFieldProps) {
  const id = useId();
  const {
    value: propValue,
    defaultValue,
    onValueChange,
    disabled = false,
    invalid = false,
    readOnly = false,
    required = false,
    maxGraphemeCount,
  } = props;

  const {
    refs,
    isLabelRendered,
    isDescriptionRendered,
    isErrorMessageRendered,
    value: stateValue,
    graphemes,
    isHovered,
    isActive,
    isFocused,
    isFocusVisible,
    handleValueChange,
    setIsHovered,
    setIsActive,
    setIsFocused,
    setIsFocusVisible,
  } = useTextFieldState({
    value: propValue,
    defaultValue,
    onValueChange,
    maxGraphemeCount,
  });

  const isUncontrolled = propValue === undefined;

  const ariaDescribedBy =
    [
      isDescriptionRendered ? getDescriptionId(id) : false,
      isErrorMessageRendered ? getErrorMessageId(id) : false,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const stateProps = elementProps({
    "data-hover": dataAttr(isHovered),
    "data-active": dataAttr(isActive),
    "data-focus": dataAttr(isFocused),
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-readonly": dataAttr(readOnly),
    "data-disabled": dataAttr(disabled),
    "data-invalid": dataAttr(invalid),
    "data-empty": dataAttr(stateValue === ""),
    "data-grapheme-count-exceeded": dataAttr(
      graphemes.length > (maxGraphemeCount ?? Number.POSITIVE_INFINITY),
    ),
  });

  return {
    refs,

    value: stateValue,
    graphemes,
    isFocused,
    isInvalid: invalid,
    isRequired: required,

    handleValueChange,
    setIsFocused,
    setIsFocusVisible,

    isLabelRendered,
    isDescriptionRendered,
    isErrorMessageRendered,

    stateProps,

    rootProps: elementProps({
      ...stateProps,
      onPointerMove() {
        setIsHovered(true);
      },
      onPointerDown() {
        setIsActive(true);
      },
      onPointerUp() {
        setIsActive(false);
      },
      onPointerLeave() {
        setIsHovered(false);
        setIsActive(false);
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
      ...(isLabelRendered && { "aria-labelledby": getLabelId(id) }),
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
      },
      onBlur() {
        setIsFocused(false);
        setIsFocusVisible(false);
      },
      onFocus(event) {
        setIsFocused(true);
        setIsFocusVisible(event.target.matches(":focus-visible"));
      },
    }) as
      | React.InputHTMLAttributes<HTMLInputElement>
      | React.TextareaHTMLAttributes<HTMLTextAreaElement>,

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
