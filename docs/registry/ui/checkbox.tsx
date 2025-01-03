"use client";

import IconCheckmarkFatFill from "@daangn/react-monochrome-icon/IconCheckmarkFatFill";
import IconMinusFatFill from "@daangn/react-monochrome-icon/IconMinusFatFill";
import { Checkbox as SeedCheckbox } from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/checkbox.css";

export interface CheckboxProps extends SeedCheckbox.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;

  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ inputProps, rootRef, label, ...otherProps }, ref) => {
    return (
      <SeedCheckbox.Root ref={rootRef} {...otherProps}>
        <SeedCheckbox.Control>
          <SeedCheckbox.CheckedIcon svg={<IconCheckmarkFatFill />} />
          <SeedCheckbox.IndeterminateIcon svg={<IconMinusFatFill />} />
        </SeedCheckbox.Control>
        <SeedCheckbox.Label>{label}</SeedCheckbox.Label>
        <SeedCheckbox.HiddenInput ref={ref} {...inputProps} />
      </SeedCheckbox.Root>
    );
  },
);
Checkbox.displayName = "Checkbox";
