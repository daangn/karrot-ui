import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { ariaAttr, buttonProps, dataAttr, elementProps } from "@seed-design/dom-utils";
import * as React from "react";
import * as dom from "./dom";
import type { ContentProps, TriggerProps, UseTabsProps, UseTabsStateProps } from "./types";

import { useSize } from "@radix-ui/react-use-size";

const useLayoutEffect = globalThis?.document ? React.useLayoutEffect : React.useEffect;

function useTabsState(props: UseTabsStateProps & { id: string }) {
  const tabValues = dom.getAllValues(props.id);
  const [value, setValue] = useControllableState({
    prop: props.value,
    defaultProp: props.defaultValue ?? tabValues[0] ?? undefined,
    onChange: props.onValueChange,
  });

  const [hoveredValue, setHoveredValue] = React.useState<string | null>(null);
  const [activeValue, setActiveValue] = React.useState<string | null>(null);
  const [focusedValue, setFocusedValue] = React.useState<string | null>(null);
  const [isFocusVisible, setIsFocusVisible] = React.useState(false);
  const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);
  const triggerEl = value ? dom.getTabTriggerEl(value, props.id) : null;
  const cameraEl = dom.getTabContentCameraEl(props.id);
  const triggerSize = useSize(triggerEl);
  const cameraSize = useSize(cameraEl);

  const tabEnabledValues = dom.getEnabledValues(props.id);
  const currentTabIndex = value ? dom.getTabIndex(value, props.id) : -1;
  const currentTabEnabledIndex = value ? dom.getTabIndexOnlyEnabled(value, props.id) : -1;

  const isFirst = currentTabEnabledIndex === 0;
  const isLast = currentTabEnabledIndex === tabEnabledValues.length - 1;

  const prevIndex = isFirst
    ? tabEnabledValues.length - 1
    : (currentTabEnabledIndex - 1 + tabEnabledValues.length) % tabEnabledValues.length;

  const nextIndex = isLast ? 0 : (currentTabEnabledIndex + 1) % tabEnabledValues.length;

  useLayoutEffect(() => {
    setRootEl(dom.getRootEl(props.id));
  }, [props.id]);

  const events = {
    movePrev: () => {
      const prevValue = tabEnabledValues[prevIndex];
      if (!prevValue) return;
      setValue(prevValue);
    },
    moveNext: () => {
      const nextValue = tabEnabledValues[nextIndex];
      if (!nextValue) return;
      setValue(nextValue);
    },
    focusPrev: () => {
      const prevValue = tabEnabledValues[prevIndex];
      if (!prevValue) return;
      const prevTriggerEl = dom.getTabTriggerEl(prevValue, props.id);

      if (prevTriggerEl) prevTriggerEl.focus();
    },
    focusCurrent: () => {
      if (triggerEl) triggerEl.focus();
    },
    focusNext: () => {
      const nextValue = tabEnabledValues[nextIndex];
      if (!nextValue) return;
      const nextTriggerEl = dom.getTabTriggerEl(nextValue, props.id);

      if (nextTriggerEl) nextTriggerEl.focus();
    },
    setValue,
    setHoveredValue,
    setActiveValue,
    setFocusedValue,
    setIsFocusVisible,
  };

  return {
    value,
    rootEl,
    triggerSize: {
      width: triggerSize?.width || 0,
      height: triggerSize?.height || 0,
      left: triggerEl?.offsetLeft || 0,
    },
    cameraSize: {
      width: cameraSize?.width || 0,
      height: cameraSize?.height || 0,
    },
    hoveredValue,
    activeValue,
    focusedValue,
    isFocusVisible,
    currentTabIndex,
    currentTabEnabledIndex,
    tabValues,
    tabEnabledValues,
    events,
  };
}

export function useTabs(props: UseTabsProps) {
  const id = React.useId();
  const {
    value,
    currentTabIndex,
    currentTabEnabledIndex,
    events,
    tabValues,
    tabEnabledValues,
    triggerSize,
    cameraSize,
    activeValue,
    focusedValue,
    hoveredValue,
    isFocusVisible,
    rootEl,
  } = useTabsState({
    id,
    ...props,
  });
  const {
    value: omitValue,
    defaultValue: omitDefaultValue,
    onValueChange: omitOnValueChange,
    isSwipeable = false,
    swipeConfig,
    orientation = "horizontal",
    ...restProps
  } = props;

  const updateIndicatorStyle = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-tabs-indicator-left", `${triggerSize.left}px`);
      rootEl.style.setProperty("--seed-design-tabs-indicator-width", `${triggerSize.width}px`);
    }
  }, [triggerSize, rootEl]);

  const updateCameraStyle = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-tabs-tab-camera-width", `${cameraSize.width}`);
    }
  }, [cameraSize, rootEl]);

  const updateCurrentIndex = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-tabs-current-tab-index", `${currentTabIndex}`);
      rootEl.style.setProperty(
        "--seed-design-tabs-current-tab-enabled-index",
        `${currentTabEnabledIndex}`,
      );
    }
  }, [currentTabIndex, currentTabEnabledIndex, rootEl]);

  const updateTabCount = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-tabs-tab-count", `${tabValues.length}`);
    }
  }, [tabValues.length, rootEl]);

  useLayoutEffect(() => {
    updateIndicatorStyle();
    window.addEventListener("resize", updateIndicatorStyle);
    return () => {
      window.removeEventListener("resize", updateIndicatorStyle);
    };
  }, [updateIndicatorStyle]);

  useLayoutEffect(() => {
    updateCameraStyle();
    window.addEventListener("resize", updateCameraStyle);
    return () => {
      window.removeEventListener("resize", updateCameraStyle);
    };
  }, [updateCameraStyle]);

  useLayoutEffect(() => {
    updateCurrentIndex();
  }, [updateCurrentIndex]);

  useLayoutEffect(() => {
    updateTabCount();
  }, [updateTabCount]);

  return {
    value,
    triggerSize,
    currentTabIndex,
    currentTabEnabledIndex,
    tabEnabledCount: tabEnabledValues.length,

    tabCount: tabValues.length,

    moveNext: events.moveNext,
    movePrev: events.movePrev,

    restProps,
    rootProps: elementProps({
      id: dom.getRootId(id),
      "data-orientation": orientation,
    }),

    tabTriggerListProps: elementProps({
      id: dom.getTabTriggerListId(id),
      role: "tablist",
      "aria-orientation": orientation,
      "data-orientation": orientation,
    }),
    getTabTriggerProps: (props: TriggerProps) => {
      const { isDisabled, value: triggerValue } = props;

      const itemState = {
        isDisabled,
        isSelected: value === triggerValue,
        isFocused: focusedValue === triggerValue,
        isHovered: hoveredValue === triggerValue,
        isActive: activeValue === triggerValue,
      };

      const itemStateProps = {
        "data-focus": dataAttr(itemState.isFocused),
        "data-focus-visible": dataAttr(itemState.isFocused && isFocusVisible),
        "data-active": dataAttr(itemState.isActive),
        "data-hover": dataAttr(itemState.isHovered),
        "data-selected": dataAttr(itemState.isSelected),
        "data-disabled": dataAttr(itemState.isDisabled),
        "aria-disabled": ariaAttr(itemState.isDisabled),
        "aria-selected": ariaAttr(itemState.isSelected),
      };

      return {
        rootProps: buttonProps({
          id: dom.getTabTriggerRootId(triggerValue, id),
          role: "tab",
          type: "button",
          disabled: isDisabled,
          tabIndex: itemState.isSelected ? 0 : -1,
          ...itemStateProps,
          "data-value": triggerValue,
          "data-orientation": orientation,
          "data-ownedby": dom.getTabTriggerListId(id),
          "aria-controls": dom.getTabTriggerRootId(triggerValue, id),
          onClick() {
            if (itemState.isDisabled) return;
            events.setValue(triggerValue);
          },
          onPointerMove() {
            if (itemState.isDisabled) return;
            events.setHoveredValue(triggerValue);
          },
          onPointerLeave() {
            if (itemState.isDisabled) return;
            events.setHoveredValue(null);
            events.setActiveValue(null);
          },
          onPointerDown(event) {
            if (itemState.isDisabled) return;
            // On pointerdown, the input blurs and returns focus to the `body`,
            // we need to prevent this.
            if (itemState.isFocused && event.pointerType === "mouse") {
              event.preventDefault();
            }
            events.setActiveValue(triggerValue);
          },
          onPointerUp() {
            if (itemState.isDisabled) return;
            events.setActiveValue(null);
          },
          onFocus(event) {
            events.setFocusedValue(triggerValue);
            events.setIsFocusVisible(event.target.matches(":focus-visible"));
          },
          onBlur() {
            events.setFocusedValue(null);
            events.setIsFocusVisible(false);
          },
          onKeyDown({ key }) {
            if (itemState.isDisabled) return;

            switch (key) {
              case "ArrowLeft":
                if (orientation !== "horizontal") return;

                events.movePrev();
                events.focusPrev();

                break;
              case "ArrowRight":
                if (orientation !== "horizontal") return;

                events.moveNext();
                events.focusNext();

                break;
              case "ArrowUp":
                if (orientation !== "vertical") return;

                events.movePrev();
                events.focusPrev();

                break;
              case "ArrowDown":
                if (orientation !== "vertical") return;

                events.moveNext();
                events.focusNext();

                break;
              case "Home": {
                const firstValue = tabEnabledValues[0];
                if (!firstValue) return;
                events.setValue(firstValue);

                break;
              }
              case "End": {
                const lastValue = tabEnabledValues[tabEnabledValues.length - 1];
                if (!lastValue) return;
                events.setValue(lastValue);

                break;
              }
              case " ":
              case "Enter":
                events.setValue(triggerValue);

                events.focusCurrent();
                events.setIsFocusVisible(true);

                break;
            }
          },
        }),
        labelProps: elementProps({
          id: dom.getTabTriggerLabelId(triggerValue, id),
          ...itemStateProps,
          "data-value": triggerValue,
          "data-orientation": orientation,
          "data-ownedby": dom.getTabTriggerListId(id),
          "aria-controls": dom.getTabTriggerRootId(triggerValue, id),
        }),
        notificationProps: elementProps({
          id: dom.getTabTriggerNotificationId(triggerValue, id),
          ...itemStateProps,
          "data-value": triggerValue,
          "data-orientation": orientation,
          "data-ownedby": dom.getTabTriggerListId(id),
          "aria-controls": dom.getTabTriggerRootId(triggerValue, id),
        }),
      };
    },

    tabContentListProps: elementProps({
      id: dom.getTabContentListId(id),
      "data-orientation": orientation,
    }),
    tabContentCameraProps: elementProps({
      id: dom.getTabContentCameraId(id),
      "data-orientation": orientation,
    }),
    getTabContentProps: (props: ContentProps) => {
      const { value: contentValue, visibilityMode = "keep" } = props;
      const tabContentId = dom.getTabContentId(contentValue, id);
      const tabTriggerId = dom.getTabTriggerRootId(contentValue, id);
      const isSelected = value === contentValue;
      const isDisabled = !!dom.itemById(dom.getDisabledElements(id), tabTriggerId);
      const hidden = visibilityMode === "hidden" ? !isSelected || isDisabled : isDisabled;

      return elementProps({
        id: tabContentId,
        role: "tabpanel",
        "data-selected": dataAttr(isSelected),
        "data-orientation": orientation,
        "data-ownedby": dom.getTabTriggerListId(id),
        "aria-labelledby": tabTriggerId,
        "aria-selected": ariaAttr(isSelected),
        "aria-hidden": isDisabled ? undefined : !isSelected,
        hidden,
      });
    },

    tabIndicatorProps: elementProps({
      id: dom.getIndicatorId(id),
      "data-orientation": orientation,
    }),
  };
}
