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
  const [graphemes, setGraphemes] = useState<string[]>(() =>
    getSlicedGraphemes({ value: value ?? defaultValue ?? "", maxGraphemeCount }),
  );

  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const onGraphemesChange = useEvent(__onGraphemesChange);

  const handleValueChange = useCallback(
    (newValue: string) => {
      const newGraphemes = getSlicedGraphemes({
        value: newValue,
        maxGraphemeCount,
      });

      setValue(newValue);
      setGraphemes(newGraphemes);
    },
    [maxGraphemeCount, setValue],
  );

  useEffect(() => {
    onGraphemesChange(graphemes);
  }, [graphemes, onGraphemesChange]);

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
    onGraphemesChange,
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
      ...(propValue && { value: stateValue }),
      ...(label && { "aria-labelledby": getLabelId(id) }),
      "aria-describedby": ariaDescribedBy,
      "aria-required": ariaAttr(required),
      "aria-invalid": ariaAttr(invalid),
      disabled,
      readOnly,
      id: getInputId(id),
      name: props.name || id,
      onChange: (event) => {
        handleValueChange(event.target.value);

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
