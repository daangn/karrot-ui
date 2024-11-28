"use client";

import "@seed-design/stylesheet/segmentedControl.css";
import {
  useTabs,
  type TriggerProps,
  type UseTabsProps,
} from "@seed-design/react-tabs";
import * as React from "react";
import clsx from "clsx";
import {
  segmentedControl,
  type SegmentedControlVariantProps,
} from "@seed-design/recipe/segmentedControl";
import type { Assign } from "../util/types";
export interface SegmentedControlProps extends SegmentedControlVariantProps {}

const TabsContext = React.createContext<{
  api: ReturnType<typeof useTabs>;
} | null>(null);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context)
    throw new Error(
      "SegmentedControlOption cannot be rendered outside the SegmentedControl",
    );

  return context;
};

export interface SegmentedControlProps
  extends SegmentedControlVariantProps,
    Pick<UseTabsProps, "value" | "defaultValue" | "onValueChange"> {}

type ReactSegmentedControlProps = SegmentedControlProps &
  Assign<React.HTMLAttributes<HTMLDivElement>, UseTabsProps>;

export const SegmentedControl = React.forwardRef<
  // HTMLFieldSetElement,
  HTMLDivElement,
  ReactSegmentedControlProps
>(({ className, children, style, ...otherProps }, ref) => {
  const api = useTabs(otherProps);
  const { tabTriggerListProps, triggerSize, tabIndicatorProps } = api;

  const { left, width } = triggerSize;

  // TODO: value/defaultvalue 없는 경우 첫 번째 아이템으로 default (tabs 참고)

  const classNames = segmentedControl();

  return (
    <div
      style={{
        ...style,
        // XXX: tabCount 썼을 때 hydration 문제
        gridTemplateColumns: `repeat(${React.Children.count(children)}, 1fr)`,
      }}
      className={clsx(classNames.root, className)}
      ref={ref}
      {...tabTriggerListProps}
      {...otherProps}
    >
      <TabsContext.Provider value={{ api }}>{children}</TabsContext.Provider>
      <div
        aria-hidden
        className={classNames.indicator}
        {...tabIndicatorProps}
        style={{ left, width }}
      />
    </div>
  );
});
SegmentedControl.displayName = "SegmentedControl";

export interface SegmentedControlOptionProps
  extends SegmentedControlVariantProps,
    Omit<TriggerProps, "isDisabled"> {}

type ReactSegmentedControlOptionProps = Assign<
  React.HTMLAttributes<HTMLButtonElement>,
  SegmentedControlOptionProps
>;

export const SegmentedControlOption = React.forwardRef<
  HTMLButtonElement,
  ReactSegmentedControlOptionProps
>(({ className, children, value, ...otherProps }, ref) => {
  const {
    api: { getTabTriggerProps },
  } = useTabsContext();

  const { rootProps, labelProps } = getTabTriggerProps({ value });

  const classNames = segmentedControl();

  return (
    <button
      ref={ref}
      className={clsx(classNames.option, className)}
      {...rootProps}
      {...otherProps}
    >
      <div className={classNames.optionLabel} {...labelProps} tabIndex={-1}>
        {children}
      </div>
      <div aria-hidden className={classNames.optionLabelPlaceholder}>
        {children}
      </div>
    </button>
  );
});

SegmentedControlOption.displayName = "SegmentedControlOption";
