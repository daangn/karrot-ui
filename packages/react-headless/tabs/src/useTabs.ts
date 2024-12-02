import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { ariaAttr, buttonProps, dataAttr, elementProps } from "@seed-design/dom-utils";
import * as React from "react";
import * as dom from "./dom";
import type { ContentProps, TriggerProps, UseTabsProps, UseTabsStateProps } from "./types";

import { useSize } from "@radix-ui/react-use-size";

const useLayoutEffect = globalThis?.document ? React.useLayoutEffect : React.useEffect;

function useTabsState(props: UseTabsStateProps & { id: string }) {
  const [value, setValue] = useControllableState({
    prop: props.value,
    defaultProp: props.defaultValue,
    onChange: props.onValueChange,
  });
  const [hoveredValue, setHoveredValue] = React.useState<string | null>(null);
  const [activeValue, setActiveValue] = React.useState<string | null>(null);
  const [focusedValue, setFocusedValue] = React.useState<string | null>(null);
  const [isFocusVisible, setIsFocusVisible] = React.useState(false);
  const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);
  const triggerEl = dom.getTabTriggerEl(value, props.id);
  const cameraEl = dom.getTabContentCameraEl(props.id);
  const triggerSize = useSize(triggerEl);
  const cameraSize = useSize(cameraEl);

  const tabValues = dom.getAllValues(props.id);
  const tabEnabledValues = dom.getEnabledValues(props.id);
  const currentTabIndex = dom.getTabIndex(value, props.id);
  const currentTabEnabledIndex = dom.getTabIndexOnlyEnabled(value, props.id);

  useLayoutEffect(() => {
    setRootEl(dom.getRootEl(props.id));
  }, [props.id]);

  const events = {
    moveNext: () => {
      const isLast = currentTabEnabledIndex === tabEnabledValues.length - 1;
      if (isLast) return;

      const nextIndex = (tabEnabledValues.indexOf(value) + 1) % tabEnabledValues.length;
      setValue(tabEnabledValues[nextIndex]);
    },
    movePrev: () => {
      const isFirst = currentTabEnabledIndex === 0;
      if (isFirst) return;

      const prevIndex =
        (tabEnabledValues.indexOf(value) - 1 + tabEnabledValues.length) % tabEnabledValues.length;
      setValue(tabEnabledValues[prevIndex]);
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
    orientation = "horizontal",
    swipeConfig,
    ...restProps
  } = props;

  const updateIndicatorStyle = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-tab-indicator-left", `${triggerSize.left}px`);
      rootEl.style.setProperty("--seed-design-tab-indicator-width", `${triggerSize.width}px`);
    }
  }, [triggerSize, rootEl]);

  const updateCameraStyle = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-tab-camera-width", `${cameraSize.width}`);
    }
  }, [cameraSize, rootEl]);

  const updateCurrentIndex = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-current-tab-index", `${currentTabIndex}`);
    }
  }, [currentTabIndex, rootEl]);

  const updateTabCount = React.useCallback(() => {
    if (rootEl) {
      rootEl.style.setProperty("--seed-design-tab-count", `${tabValues.length}`);
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
      const tabContentId = dom.getTabTriggerRootId(contentValue, id);
      const isSelected = value === contentValue;
      const isDisabled = !!dom.itemById(dom.getDisabledElements(id), tabContentId);
      const hidden = visibilityMode === "hidden" ? !isSelected || isDisabled : isDisabled;

      return elementProps({
        id: tabContentId,
        role: "tabpanel",
        "data-selected": dataAttr(isSelected),
        "data-orientation": orientation,
        "data-ownedby": dom.getTabTriggerListId(id),
        "aria-labelledby": dom.getTabTriggerRootId(contentValue, id),
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
