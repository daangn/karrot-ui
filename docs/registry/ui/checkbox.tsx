"use client";

import IconCheckmarkFatFill from "@daangn/react-monochrome-icon/IconCheckmarkFatFill";
import { Checkbox as SeedCheckbox } from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/checkbox.css";

export interface CheckboxProps extends SeedCheckbox.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  rootRef?: React.Ref<HTMLLabelElement>;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ inputProps, rootRef, ...otherProps }, ref) => {
    return (
      <SeedCheckbox.Root ref={rootRef} {...otherProps}>
        <SeedCheckbox.Control>
          <SeedCheckbox.CheckedIcon svg={<IconCheckmarkFatFill />} />
        </SeedCheckbox.Control>
        <SeedCheckbox.HiddenInput ref={ref} {...inputProps} />
      </SeedCheckbox.Root>
    );
  },
);
Checkbox.displayName = "Checkbox";
