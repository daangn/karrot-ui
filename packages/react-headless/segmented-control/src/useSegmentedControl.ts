import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useId, useMemo, useState } from "react";

import { dataAttr, elementProps, inputProps, visuallyHidden } from "@seed-design/dom-utils";
import * as dom from "./dom";

interface UseSegmentedControlStateProps {
  value?: string;

  defaultValue?: string;

  onValueChange?: (value: string) => void;
}

function useSegmentedControlState(props: UseSegmentedControlStateProps) {
  const [value, setValue] = useControllableState({
    prop: props.value,
    defaultProp: props.defaultValue,
    onChange: props.onValueChange,
  });

  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  const segmentCount = useMemo(() => {
    return rootEl ? dom.getAllValues(rootEl).length : 0;
  }, [rootEl]);
  const segmentIndex = useMemo(() => {
    return value && rootEl ? dom.getSegmentIndex(value, rootEl) : -1;
  }, [value, rootEl]);

  return {
    refs: {
      root: setRootEl,
    },
    value,
    setValue,
    hoveredValue,
    setHoveredValue,
    activeValue,
    setActiveValue,
    focusedValue,
    setFocusedValue,
    isFocusVisible,
    setIsFocusVisible,

    segmentCount,
    segmentIndex,
  };
}

export interface UseSegmentedControlProps extends UseSegmentedControlStateProps {
  disabled?: boolean;

  name?: string;

  form?: string;
}

export interface SegmentProps {
  value: string;

  disabled?: boolean;

  invalid?: boolean;
}

export type UseSegmentedControlReturn = ReturnType<typeof useSegmentedControl>;

export type GetSegmentPropsReturn = ReturnType<UseSegmentedControlReturn["getSegmentProps"]>;

export function useSegmentedControl(props: UseSegmentedControlProps) {
  const id = useId();
  const {
    refs,
    value,
    setValue,
    hoveredValue,
    setHoveredValue,
    activeValue,
    setActiveValue,
    focusedValue,
    setFocusedValue,
    isFocusVisible,
    setIsFocusVisible,
    segmentCount,
    segmentIndex,
  } = useSegmentedControlState(props);

  const { disabled, form, name } = props;

  const isControlled = props.value !== undefined;

  const stateProps = elementProps({
    "data-disabled": dataAttr(disabled),
  });

  return {
    value,
    setValue,

    refs,
    stateProps,

    rootProps: elementProps({
      role: "radiogroup",
      ...stateProps,
      style: {
        "--segment-index": segmentIndex.toString(),
        "--segment-count": segmentCount.toString(),
      } as React.CSSProperties,
    }),

    getSegmentProps(segmentProps: SegmentProps) {
      const { value: itemValue, disabled: itemDisabled, invalid: itemInvalid } = segmentProps;

      const itemState = {
        invalid: !!itemInvalid,
        disabled: !!itemDisabled || disabled,
        checked: value === itemValue,
        focused: focusedValue === itemValue,
        hovered: hoveredValue === itemValue,
        active: activeValue === itemValue,
      };

      const itemStateProps = elementProps({
        "data-focus": dataAttr(itemState.focused),
        "data-focus-visible": dataAttr(itemState.focused && isFocusVisible),
        "data-disabled": dataAttr(itemState.disabled),
        "data-checked": dataAttr(itemState.checked),
        "data-active": dataAttr(itemState.active),
        "data-hover": dataAttr(itemState.hovered),
        "data-invalid": dataAttr(itemState.invalid),
        "data-value": itemValue,
      });

      return {
        ...itemState,

        setFocusedValue,
        setIsFocusVisible,

        stateProps: itemStateProps,

        rootProps: elementProps({
          ...itemStateProps,

          onPointerMove() {
            if (itemState.disabled) return;
            setHoveredValue(segmentProps.value);
          },
          onPointerLeave() {
            if (itemState.disabled) return;
            setHoveredValue(null);
            setActiveValue(null);
          },
          onPointerDown(event) {
            if (itemState.disabled) return;
            // On pointerdown, the input blurs and returns focus to the `body`,
            // we need to prevent this.
            if (itemState.focused && event.pointerType === "mouse") {
              event.preventDefault();
            }
            setActiveValue(segmentProps.value);
          },
          onPointerUp() {
            if (itemState.disabled) return;
            setActiveValue(null);
          },
        }),

        hiddenInputProps: inputProps({
          type: "radio",
          name: name || id,
          form,

          value: segmentProps.value,

          onChange(event) {
            if (itemState.disabled) return;

            if (event.target.checked) {
              setValue(segmentProps.value);
            }
            setIsFocusVisible(event.target.matches(":focus-visible"));
          },
          onBlur() {
            setFocusedValue(null);
            setIsFocusVisible(false);
          },
          onFocus(event) {
            setFocusedValue(segmentProps.value);
            setIsFocusVisible(event.target.matches(":focus-visible"));
          },
          onKeyDown(event) {
            if (event.key === " ") {
              setActiveValue(segmentProps.value);
            }
          },
          onKeyUp(event) {
            if (event.key === " ") {
              setActiveValue(null);
            }
          },
          disabled: itemState.disabled,
          ...(isControlled && { checked: itemState.checked }),
          ...(!isControlled && { defaultChecked: itemState.checked }),
          style: visuallyHidden,
        }),
      };
    },
  };
}
