import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useCallback, useMemo } from "react";

import { dataAttr, elementProps } from "@seed-design/dom-utils";

export interface UseToggleStateProps {
  pressed?: boolean;

  defaultPressed?: boolean;

  onPressedChange?: (pressed: boolean) => void;
}

export function useToggleState(props: UseToggleStateProps) {
  const [isPressed, setIsPressed] = useControllableState({
    prop: props.pressed,
    defaultProp: props.defaultPressed,
    onChange: props.onPressedChange,
  });

  const toggle = useCallback(() => {
    setIsPressed((prev) => !prev);
  }, [setIsPressed]);

  return useMemo(
    () => ({
      isPressed,
      toggle,
    }),
    [isPressed, toggle],
  );
}

export interface UseToggleProps extends UseToggleStateProps {
  disabled?: boolean;
}

export function useToggle(props: UseToggleProps) {
  const { pressed, defaultPressed, disabled, onPressedChange, ...restProps } = props;
  const { toggle, isPressed } = useToggleState(props);

  const stateProps = {
    "data-pressed": dataAttr(isPressed),
    "data-disabled": dataAttr(props.disabled),
  };

  return {
    isPressed,
    toggle,

    restProps,
    stateProps,
    rootProps: elementProps({
      ...stateProps,
      "aria-pressed": isPressed,
      onClick(event) {
        if (props.disabled) return;
        toggle();
        // FIXME: temporal workaround, should be replaced with `mergeProps()`.
        (restProps as any).onClick?.(event);
      },
    }),
  };
}
