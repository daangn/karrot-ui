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

export interface SegmentedControlProps extends SegmentedControlVariantProps {}

import type { Assign } from "../util/types";

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
    UseTabsProps {}

type ReactSegmentedControlProps = SegmentedControlProps &
  Assign<React.HTMLAttributes<HTMLFieldSetElement>, UseTabsProps>;

export const SegmentedControl = React.forwardRef<
  // HTMLFieldSetElement,
  HTMLDivElement,
  ReactSegmentedControlProps
>(({ className, children, ...otherProps }, ref) => {
  const api = useTabs(otherProps);
  const { tabTriggerListProps, triggerSize, tabIndicatorProps } = api;

  const { left, width } = triggerSize;

  // TODO: value/defaultvalue 없는 경우 첫 번째 아이템으로 default (tabs 참고)

  const classNames = segmentedControl();

  return (
    <div // TODO: fieldset으로 교체
      ref={ref}
      className={clsx(classNames.root, className)}
      {...tabTriggerListProps}
      {...otherProps}
    >
      <TabsContext.Provider value={{ api }}>
        {children}
        <div
          aria-hidden
          className={classNames.indicator}
          {...tabIndicatorProps}
          style={{
            left,
            width,
            willChange: "left, width",
            // XXX: 임의
            transition: "left 0.2s, width 0.2s",
          }}
        />
      </TabsContext.Provider>
    </div>
  );
});
SegmentedControl.displayName = "SegmentedControl";

export interface SegmentedControlOptionProps
  extends SegmentedControlVariantProps {}

type ReactSegmentedControlOptionProps = SegmentedControlOptionProps &
  Assign<
    React.HTMLAttributes<HTMLButtonElement>,
    Omit<TriggerProps, "isDisabled">
  >;

export const SegmentedControlOption = React.forwardRef<
  HTMLButtonElement,
  ReactSegmentedControlOptionProps
>(({ className, children, value, ...otherProps }, ref) => {
  const {
    api: { getTabTriggerProps },
  } = useTabsContext();

  const { rootProps } = getTabTriggerProps({ value });

  const classNames = segmentedControl();

  return (
    <button
      ref={ref}
      {...rootProps}
      {...otherProps}
      className={clsx(classNames.option, className)}
      // style={{
      //   ...(rootProps["data-value"] === "1"
      //     ? {
      //         borderStartEndRadius: 0,
      //         borderEndEndRadius: 0,
      //       }
      //     : {}),
      //   ...(rootProps["data-value"] === `${tabCount}`
      //     ? {
      //         borderStartStartRadius: 0,
      //         borderEndStartRadius: 0,
      //       }
      //     : {}),
      // }}
    >
      {children}
    </button>
  );

  // return (
  //   <label
  //     className={clsx(classNames.item, className)}
  // 		{...otherProps}
  //   >
  //     <input ref={ref} {...hiddenInputProps} style={visuallyHidden} />
  //     {/* TODO */}
  //     <div {...stateProps}>{children}</div>
  //   </label>
  // );
});

SegmentedControlOption.displayName = "SegmentedControlOption";
