import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useState } from "react";

import {
  dataAttr,
  elementProps,
  inputProps,
  labelProps,
  visuallyHidden,
} from "@seed-design/dom-utils";

interface UseCheckboxStateProps {
  checked?: boolean;

  defaultChecked?: boolean;

  onCheckedChange?: (checked: boolean) => void;
}

function useCheckboxState(props: UseCheckboxStateProps) {
  const [isChecked, setIsChecked] = useControllableState({
    prop: props.checked,
    defaultProp: props.defaultChecked,
    onChange: props.onCheckedChange,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  return {
    isChecked,
    setIsChecked,
    isHovered,
    setIsHovered,
    isActive,
    setIsActive,
    isFocused,
    setIsFocused,
    isFocusVisible,
    setIsFocusVisible,
  };
}

export interface UseCheckboxProps extends UseCheckboxStateProps {
  disabled?: boolean;

  invalid?: boolean;

  required?: boolean;
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>;

export function useCheckbox(props: UseCheckboxProps) {
  const { checked, disabled, invalid, required } = props;

  const {
    setIsChecked,
    isChecked,
    setIsHovered,
    isHovered,
    setIsActive,
    isActive,
    setIsFocused,
    isFocused,
    setIsFocusVisible,
    isFocusVisible,
  } = useCheckboxState(props);

  const stateProps = elementProps({
    "data-checked": dataAttr(isChecked),
    "data-hover": dataAttr(isHovered),
    "data-active": dataAttr(isActive),
    "data-focus": dataAttr(isFocused),
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-disabled": dataAttr(disabled),
    "data-invalid": dataAttr(invalid),
    "data-required": dataAttr(required),
  });

  const isControlled = checked != null;

  return {
    isChecked,
    setIsChecked,
    isFocused,
    setIsFocused,
    setIsFocusVisible,

    stateProps,
    rootProps: labelProps({
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

    controlProps: elementProps({
      ...stateProps,
      "aria-hidden": true,
    }),

    hiddenInputProps: inputProps({
      type: "checkbox",
      role: "switch",
      checked: isControlled ? isChecked : undefined,
      defaultChecked: !isControlled ? isChecked : undefined,
      disabled: disabled,
      required: required,
      "aria-invalid": invalid,
      style: visuallyHidden,
      ...stateProps,
      onChange(event) {
        setIsChecked(event.currentTarget.checked);
        setIsFocusVisible(event.target.matches(":focus-visible"));
      },
      onFocus(event) {
        setIsFocused(true);
        setIsFocusVisible(event.target.matches(":focus-visible"));
      },
      onBlur() {
        setIsFocused(false);
        setIsFocusVisible(false);
      },
      onKeyDown(event) {
        if (event.key === " ") {
          setIsActive(true);
        }
      },
      onKeyUp(event) {
        if (event.key === " ") {
          setIsActive(false);
        }
      },
    }),
  };
}
