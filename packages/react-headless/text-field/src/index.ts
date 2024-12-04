import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { splitGraphemes } from "unicode-segmenter/grapheme";

import {
  dataAttr,
  ariaAttr,
  elementProps,
  inputProps,
  labelProps,
  useEvent,
} from "@seed-design/react-utils";
import { getDescriptionId, getErrorMessageId, getInputId, getLabelId } from "./dom";

import {
  useCallback,
  useId,
  useState,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type FocusEvent,
  useEffect,
  type ChangeEvent,
} from "react";

const getSlicedGraphemes = ({
  value,
  maxGraphemeCount,
}: { value: string; maxGraphemeCount?: number }) => {
  const graphemes = Array.from(splitGraphemes(value));

  return maxGraphemeCount ? graphemes.slice(0, maxGraphemeCount) : graphemes;
};

export interface UseTextFieldStateProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  maxGraphemeCount?: number;
  onGraphemesChange?: (graphemes: string[]) => void;
}

export function useTextFieldState({
  value: __value,
  defaultValue,
  onValueChange,
  maxGraphemeCount,
  onGraphemesChange: __onGraphemesChange,
}: UseTextFieldStateProps) {
  const [value, setValue] = useControllableState({
    prop: __value,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });
  const [graphemes, setGraphemes] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const onGraphemesChange = useEvent(__onGraphemesChange);

  const updateValue = useCallback(
    (newValue: string) => {
      const slicedGraphemes = getSlicedGraphemes({
        maxGraphemeCount,
        value: newValue,
      });

      const value = slicedGraphemes.join("");

      setValue(value);
      setGraphemes(slicedGraphemes);
    },
    [maxGraphemeCount, graphemes.length, setValue],
  );

  useEffect(() => onGraphemesChange(graphemes), [graphemes, onGraphemesChange]);

  return {
    value,
    graphemes,
    isHovered,
    isPressed,
    isFocused,
    isFocusVisible,

    updateValue,
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

  onChange?: (e: ChangeEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
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
    onGraphemesChange,
    ...restProps
  } = props;

  const {
    updateValue,
    value: stateValue,
    graphemes,
    setIsHovered,
    isHovered,
    setIsPressed,
    isPressed,
    setIsFocused,
    isFocused,
    setIsFocusVisible,
    isFocusVisible,
  } = useTextFieldState({
    value: propValue,
    defaultValue,
    onValueChange,
    maxGraphemeCount,
    onGraphemesChange,
  });

  const renderDescription = !!description;
  const renderErrorMessage = invalid && !!errorMessage;

  const ariaDescribedBy =
    [
      renderDescription ? getDescriptionId(id) : false,
      renderErrorMessage ? getErrorMessageId(id) : false,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const stateProps = {
    "data-hover": dataAttr(isHovered),
    "data-active": dataAttr(isPressed),
    "data-focus": dataAttr(isFocused),
    "data-readonly": dataAttr(readOnly),
    "data-invalid": dataAttr(invalid),
    "data-grapheme-count": `${graphemes.length}`,
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-disabled": dataAttr(props.disabled),
  };

  return {
    value: stateValue,
    graphemes,
    updateValue,
    isFocused,
    isInvalid: invalid,
    isRequired: required,
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
      disabled,
      readOnly,
      "aria-required": ariaAttr(required),
      "aria-invalid": ariaAttr(invalid),
      "aria-describedby": ariaDescribedBy,
      ...(label && { "aria-labelledby": getLabelId(id) }),
      onChange: (event) => {
        const givenValue = event.target.value;

        updateValue(givenValue);
        setIsFocusVisible(event.target.matches(":focus-visible"));
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
      name: props.name || id,
      id: getInputId(id),
      ...(propValue && { value: stateValue }),
    }) as unknown as InputHTMLAttributes<HTMLInputElement> &
      TextareaHTMLAttributes<HTMLTextAreaElement>,

    descriptionProps: elementProps({
      id: getDescriptionId(id),
      ...(invalid && { style: { display: "none" } }),
      ...stateProps,
    }),

    errorMessageProps: elementProps({
      id: getErrorMessageId(id),
      ...stateProps,
    }),
  };
}
