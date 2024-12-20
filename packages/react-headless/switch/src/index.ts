import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useState } from "react";

import { dataAttr, elementProps, inputProps } from "@seed-design/dom-utils";

export interface UseSwitchStateProps {
  checked?: boolean;

  defaultChecked?: boolean;

  onCheckedChange?: (checked: boolean) => void;
}

export function useSwitchState(props: UseSwitchStateProps) {
  const [isChecked, setIsChecked] = useControllableState({
    prop: props.checked,
    defaultProp: props.defaultChecked,
    onChange: props.onCheckedChange,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  return {
    isChecked,
    setIsChecked,
    isHovered,
    setIsHovered,
    isPressed,
    setIsPressed,
    isFocused,
    setIsFocused,
    isFocusVisible,
    setIsFocusVisible,
  };
}

export interface UseSwitchProps extends UseSwitchStateProps {
  disabled?: boolean;

  invalid?: boolean;
}

export function useSwitch(props: UseSwitchProps) {
  const { checked, defaultChecked, disabled, invalid, onCheckedChange, ...restProps } = props;
  const {
    setIsChecked,
    isChecked,
    setIsHovered,
    isHovered,
    setIsPressed,
    isPressed,
    setIsFocused,
    isFocused,
    setIsFocusVisible,
    isFocusVisible,
  } = useSwitchState(props);

  const stateProps = {
    "data-checked": dataAttr(isChecked),
    "data-hover": dataAttr(isHovered),
    "data-active": dataAttr(isPressed),
    "data-focus": dataAttr(isFocused),
    "data-focus-visible": dataAttr(isFocusVisible),
    "data-disabled": dataAttr(props.disabled),
  };

  const isControlled = checked != null;

  return {
    isChecked,
    setIsChecked,
    isFocused,
    setIsFocused,
    setIsFocusVisible,

    restProps,
    stateProps,
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

    controlProps: elementProps({
      ...stateProps,
      "aria-hidden": true,
    }),

    thumbProps: elementProps({
      ...stateProps,
      "aria-hidden": true,
    }),

    hiddenInputProps: inputProps({
      type: "checkbox",
      role: "switch",
      checked: isControlled ? isChecked : undefined,
      disabled: props.disabled,
      "aria-invalid": props.invalid,
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
          setIsPressed(true);
        }
      },
      onKeyUp(event) {
        if (event.key === " ") {
          setIsPressed(false);
        }
      },
    }),
  };
}
