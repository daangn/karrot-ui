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

type ReactSegmentedControlProps = Assign<
  React.HTMLAttributes<HTMLDivElement>,
  SegmentedControlProps
>;

export const SegmentedControl = React.forwardRef<
  HTMLDivElement,
  ReactSegmentedControlProps
>(({ className, children, ...otherProps }, ref) => {
  const api = useTabs({
    ...otherProps,
    ...(!otherProps.value &&
      !otherProps.defaultValue && {
        defaultValue: React.Children.toArray(children).find((child) =>
          React.isValidElement(child),
        )?.props.value,
      }),
  });

  const { tabIndicatorProps, tabTriggerListProps, rootProps } = api;

  const classNames = segmentedControl();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} {...rootProps}>
      <div
        {...(!mounted && { style: { display: "flex" } })}
        className={clsx(classNames.root, className)}
        {...tabTriggerListProps}
      >
        <TabsContext.Provider value={{ api }}>{children}</TabsContext.Provider>
        <div
          aria-hidden
          className={classNames.indicator}
          {...tabIndicatorProps}
        />
      </div>
    </div>
  );
});
SegmentedControl.displayName = "SegmentedControl";

export interface SegmentedControlTriggerProps
  extends SegmentedControlVariantProps,
    Omit<TriggerProps, "isDisabled"> {}

type ReactSegmentedControlTriggerProps = Assign<
  React.HTMLAttributes<HTMLButtonElement>,
  SegmentedControlTriggerProps
>;

export const SegmentedControlTrigger = React.forwardRef<
  HTMLButtonElement,
  ReactSegmentedControlTriggerProps
>(({ className, children, value, ...otherProps }, ref) => {
  const {
    api: { getTabTriggerProps },
  } = useTabsContext();

  const { rootProps, labelProps } = getTabTriggerProps({ value });
  const classNames = segmentedControl();

  return (
    <button
      ref={ref}
      className={clsx(classNames.trigger, className)}
      {...rootProps}
      {...otherProps}
    >
      <div className={classNames.triggerLabel} {...labelProps}>
        {children}
      </div>
      <div aria-hidden className={classNames.triggerLabelPlaceholder}>
        {children}
      </div>
    </button>
  );
});

SegmentedControlTrigger.displayName = "SegmentedControlOption";
