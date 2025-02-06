"use client";

import { SegmentedControl as SeedSegmentedControl } from "@seed-design/react";
import * as React from "react";

export interface SegmentedControlProps extends SeedSegmentedControl.RootProps {}

export const SegmentedControl = React.forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(({ children, ...otherProps }, ref) => {
  if (!otherProps["aria-label"] && !otherProps["aria-labelledby"]) {
    console.warn(
      "SegmentedControl component requires either an `aria-label` or `aria-labelledby` attribute.",
    );
  }

  if (otherProps.value === undefined && otherProps.defaultValue === undefined) {
    console.warn(
      "SegmentedControl component requires either a `value` or `defaultValue` attribute.",
    );
  }

  return (
    <SeedSegmentedControl.Root ref={ref} {...otherProps}>
      {children}
      <SeedSegmentedControl.Indicator />
    </SeedSegmentedControl.Root>
  );
});
SegmentedControl.displayName = "SegmentedControl";

export interface SegmentedControlItemProps
  extends SeedSegmentedControl.ItemProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;
}

export const SegmentedControlItem = React.forwardRef<
  HTMLInputElement,
  SegmentedControlItemProps
>(({ children, inputProps, rootRef, ...otherProps }, ref) => {
  return (
    <SeedSegmentedControl.Item ref={rootRef} {...otherProps}>
      <SeedSegmentedControl.SegmentHiddenInput ref={ref} {...inputProps} />
      <SeedSegmentedControl.SegmentLabel>
        {children}
      </SeedSegmentedControl.SegmentLabel>
    </SeedSegmentedControl.Item>
  );
});
SegmentedControlItem.displayName = "SegmentedControlItem";
