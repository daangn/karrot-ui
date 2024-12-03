"use client";

import "@seed-design/stylesheet/segmentedControl.css";
import {
  useSegmentedControl,
  type SegmentItemProps,
  type UseSegmentedControlProps,
} from "@seed-design/react-segmented-control";
import * as React from "react";
import clsx from "clsx";
import {
  segmentedControl,
  type SegmentedControlVariantProps,
} from "@seed-design/recipe/segmentedControl";
import type { Assign } from "../util/types";
import { visuallyHidden } from "../util/visuallyHidden";

const SegmentedControlContext = React.createContext<{
  api: ReturnType<typeof useSegmentedControl>;
} | null>(null);

const useSegmentedControlContext = () => {
  const context = React.useContext(SegmentedControlContext);
  if (!context)
    throw new Error("Segment cannot be rendered outside the SegmentedControl");

  return context;
};

export type SegmentedControlProps = SegmentedControlVariantProps &
  UseSegmentedControlProps & {};

type ReactSegmentedControlProps = Assign<
  React.HTMLAttributes<HTMLDivElement>,
  SegmentedControlProps
>;

export const SegmentedControl = React.forwardRef<
  HTMLDivElement,
  ReactSegmentedControlProps
>(({ className, children, ...otherProps }, ref) => {
  const api = useSegmentedControl(otherProps);

  const { rootProps, restProps, indicatorProps } = api;

  const classNames = segmentedControl();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <div
      ref={ref}
      {...rootProps}
      {...restProps}
      {...(!mounted && { style: { display: "flex" } })}
      className={clsx(classNames.root, className)}
    >
      {/* TODO */}
      {/* <div {...labelProps} className={classNames.label} /> */}
      <SegmentedControlContext.Provider value={{ api }}>
        {children}
      </SegmentedControlContext.Provider>
      <div aria-hidden className={classNames.indicator} {...indicatorProps} />
    </div>
  );
});
SegmentedControl.displayName = "SegmentedControl";

export interface SegmentProps extends SegmentItemProps {}

type ReactSegmentProps = Assign<
  React.HTMLAttributes<HTMLLabelElement>,
  SegmentProps
>;

export const Segment = React.forwardRef<HTMLLabelElement, ReactSegmentProps>(
  ({ className, children, value, ...otherProps }, ref) => {
    const {
      api: { getSegmentProps },
    } = useSegmentedControlContext();

    const { rootProps, hiddenInputProps, stateProps } = getSegmentProps({
      value,
    });
    const classNames = segmentedControl();

    return (
      <label
        ref={ref}
        className={clsx(classNames.segment, className)}
        {...rootProps}
        {...otherProps}
      >
        <input {...hiddenInputProps} style={visuallyHidden} />
        <div {...stateProps} className={classNames.segmentLabel}>
          {children}
        </div>
        <div aria-hidden className={classNames.segmentLabelPlaceholder}>
          {children}
        </div>
      </label>
    );
  },
);

Segment.displayName = "Segment";
