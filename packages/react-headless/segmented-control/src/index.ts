import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useId, useState } from "react";

import { dataAttr, elementProps, inputProps } from "@seed-design/dom-utils";

import * as React from "react";
import * as dom from "./dom";

import { useSize } from "@radix-ui/react-use-size";

const useLayoutEffect = globalThis?.document ? React.useLayoutEffect : React.useEffect;

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

type UseSegmentedControlStateProps = {
  onValueChange?: (value: string) => void;
} & AtLeastOne<{ value: string; defaultValue: string }>;

function useSegmentedControlState(props: UseSegmentedControlStateProps & { id: string }) {
  const [value, setValue] = useControllableState({
    prop: props.value,
    defaultProp: props.defaultValue,
    onChange: props.onValueChange,
  });
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

  const triggerEl = dom.getSegmentRootEl(value, props.id);
  const triggerSize = useSize(triggerEl);

  const segmentedControlValues = dom.getAllValues(props.id);

  console.log(segmentedControlValues);

  useLayoutEffect(() => {
    setRootEl(dom.getRootEl(props.id));
  }, [props.id]);

  return {
    value,
    setValue,
    rootEl,
    triggerSize: {
      width: triggerSize?.width || 0,
      height: triggerSize?.height || 0,
      left: triggerEl?.offsetLeft || 0,
    },
    hoveredValue,
    setHoveredValue,
    activeValue,
    setActiveValue,
    focusedValue,
    setFocusedValue,
    isFocusVisible,
    setIsFocusVisible,
    segmentedControlValues,
  };
}

export type UseSegmentedControlProps = UseSegmentedControlStateProps & {
  disabled?: boolean;

  name?: string;

  form?: string;
};

export interface SegmentItemProps {
  value: string;
}

export function useSegmentedControl(props: UseSegmentedControlProps) {
  const id = useId();
  const {
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
    rootEl,
    triggerSize,
    segmentedControlValues,
  } = useSegmentedControlState({ ...props, id });

  const {
    disabled,
    form,
    name,
    value: omitValue,
    defaultValue: omitDefaultValue,
    onValueChange: omitOnValueChange,
    ...restProps
  } = props;

  const updateIndicatorStyle = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty(
        "--seed-design-segmented-control-indicator-left",
        `${triggerSize.left}px`,
      );
      rootEl.style.setProperty(
        "--seed-design-segmented-control-indicator-width",
        `${triggerSize.width}px`,
      );
    }
  }, [triggerSize, rootEl]);

  const updateSegmentCount = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty(
        "--seed-design-segmented-control-count",
        `${segmentedControlValues.length}`,
      );
    }
  }, [segmentedControlValues.length, rootEl]);

  useLayoutEffect(() => {
    updateIndicatorStyle();

    window.addEventListener("resize", updateIndicatorStyle);
    return () => {
      window.removeEventListener("resize", updateIndicatorStyle);
    };
  }, [updateIndicatorStyle]);

  useLayoutEffect(() => {
    updateSegmentCount();
  }, [updateSegmentCount]);

  const stateProps = {
    "data-disabled": dataAttr(disabled),
  };

  return {
    value,
    setValue,

    stateProps,
    restProps,

    rootProps: elementProps({
      id: dom.getRootId(id),
      role: "radiogroup",
      // "aria-labelledby": dom.getLabelId(id),
      ...stateProps,
    }),

    // labelProps: elementProps({
    //   id: dom.getLabelId(id),
    // }),

    indicatorProps: elementProps({
      id: dom.getIndicatorId(id),
    }),

    getSegmentProps(segmentItemProps: SegmentItemProps) {
      const { value: segmentItemValue, ...segmentItemRestProps } = segmentItemProps;

      const segmentState = {
        isDisabled: !!disabled,
        isChecked: value === segmentItemValue,
        isFocused: focusedValue === segmentItemValue,
        isHovered: hoveredValue === segmentItemValue,
        isActive: activeValue === segmentItemValue,
      };

      const segmentItemStateProps = {
        "data-focus": dataAttr(segmentState.isFocused),
        "data-focus-visible": dataAttr(segmentState.isFocused && isFocusVisible),
        "data-disabled": dataAttr(segmentState.isDisabled),
        "data-checked": dataAttr(segmentState.isChecked),
        "data-active": dataAttr(segmentState.isActive),
        "data-hover": dataAttr(segmentState.isHovered),
        "data-value": segmentItemValue,
      };

      return {
        segmentState,

        setFocusedValue,
        setIsFocusVisible,

        stateProps: segmentItemStateProps,
        restProps: segmentItemRestProps,

        rootProps: elementProps({
          ...segmentItemStateProps,
          id: dom.getSegmentRootId(segmentItemValue, id),
          onPointerMove() {
            if (segmentState.isDisabled) return;
            setHoveredValue(segmentItemValue);
          },
          onPointerLeave() {
            if (segmentState.isDisabled) return;
            setHoveredValue(null);
            setActiveValue(null);
          },
          onPointerDown(event) {
            if (segmentState.isDisabled) return;
            // On pointerdown, the input blurs and returns focus to the `body`,
            // we need to prevent this.
            if (segmentState.isFocused && event.pointerType === "mouse") {
              event.preventDefault();
            }
            setActiveValue(segmentItemValue);
          },
          onPointerUp() {
            if (segmentState.isDisabled) return;
            setActiveValue(null);
          },
          onFocus(event) {
            setFocusedValue(segmentItemValue);
            setIsFocusVisible(event.target.matches(":focus-visible"));
          },
          onBlur() {
            setFocusedValue(null);
            setIsFocusVisible(false);
          },
        }),

        hiddenInputProps: inputProps({
          type: "radio",
          name: name || id,
          form,
          value: segmentItemValue,
          onChange(event) {
            if (segmentState.isDisabled) return;

            if (event.target.checked) {
              setValue(segmentItemValue);
            }
            setIsFocusVisible(event.target.matches(":focus-visible"));
          },
          onBlur() {
            setFocusedValue(null);
            setIsFocusVisible(false);
          },
          onFocus(event) {
            setFocusedValue(segmentItemValue);
            setIsFocusVisible(event.target.matches(":focus-visible"));
          },
          onKeyDown(event) {
            if (event.key === " ") {
              setActiveValue(segmentItemValue);
            }
          },
          onKeyUp(event) {
            if (event.key === " ") {
              setActiveValue(null);
            }
          },
          disabled: segmentState.isDisabled,
          defaultChecked: segmentState.isChecked,
        }),
      };
    },
  };
}
