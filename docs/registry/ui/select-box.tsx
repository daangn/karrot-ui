"use client";

import { IconCheckmarkFatFill } from "@daangn/react-monochrome-icon";
import {
  CheckSelectBox as SeedCheckSelectBox,
  RadioSelectBox as SeedRadioSelectBox,
} from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/selectBox.css";
import "@seed-design/stylesheet/selectBoxGroup.css";

export interface RadioSelectBoxGroupProps
  extends SeedRadioSelectBox.GroupProps {}

export const RadioSelectBoxGroup = React.forwardRef<
  HTMLDivElement,
  RadioSelectBoxGroupProps
>((props, ref) => {
  if (!props["aria-label"] && !props["aria-labelledby"]) {
    console.warn(
      "RadioSelectBoxGroup component requires either an `aria-label` or `aria-labelledby` attribute.",
    );
  }

  return <SeedRadioSelectBox.Group ref={ref} {...props} />;
});

export interface RadioSelectBoxProps extends SeedRadioSelectBox.RootProps {
  label: string;

  description?: string;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;
}

export const RadioSelectBox = React.forwardRef<
  HTMLInputElement,
  RadioSelectBoxProps
>(({ label, description, inputProps, rootRef, ...otherProps }, ref) => {
  return (
    <SeedRadioSelectBox.Root ref={rootRef} {...otherProps}>
      <SeedRadioSelectBox.HiddenInput ref={ref} {...inputProps} />
      <SeedRadioSelectBox.Content>
        <SeedRadioSelectBox.Label>{label}</SeedRadioSelectBox.Label>
        {description && (
          <SeedRadioSelectBox.Description>
            {description}
          </SeedRadioSelectBox.Description>
        )}
      </SeedRadioSelectBox.Content>
      <SeedRadioSelectBox.Control>
        <SeedRadioSelectBox.Icon
          svg={
            <svg aria-hidden viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="currentColor" />
            </svg>
          }
        />
      </SeedRadioSelectBox.Control>
    </SeedRadioSelectBox.Root>
  );
});
RadioSelectBox.displayName = "RadioSelectBox";

export interface CheckSelectBoxGroupProps
  extends SeedCheckSelectBox.GroupProps {}

export const CheckSelectBoxGroup = SeedCheckSelectBox.Group;

export interface CheckSelectBoxProps extends SeedCheckSelectBox.RootProps {
  label: string;

  description?: string;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;
}

export const CheckSelectBox = React.forwardRef<
  HTMLInputElement,
  CheckSelectBoxProps
>(({ label, description, inputProps, rootRef, ...otherProps }, ref) => {
  return (
    <SeedCheckSelectBox.Root ref={rootRef} {...otherProps}>
      <SeedCheckSelectBox.HiddenInput ref={ref} {...inputProps} />
      <SeedCheckSelectBox.Content>
        <SeedCheckSelectBox.Label>{label}</SeedCheckSelectBox.Label>
        {description && (
          <SeedCheckSelectBox.Description>
            {description}
          </SeedCheckSelectBox.Description>
        )}
      </SeedCheckSelectBox.Content>
      <SeedCheckSelectBox.Control>
        <SeedCheckSelectBox.Icon svg={<IconCheckmarkFatFill />} />
      </SeedCheckSelectBox.Control>
    </SeedCheckSelectBox.Root>
  );
});
CheckSelectBox.displayName = "CheckSelectBox";
