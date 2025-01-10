"use client";

import { IconCheckmarkFatFill } from "@daangn/react-monochrome-icon";
import {
  SelectBoxCheck as SeedSelectBoxCheck,
  SelectBoxRadio as SeedSelectBoxRadio,
} from "@seed-design/react";
import * as React from "react";

import "@seed-design/stylesheet/selectBox.css";
import "@seed-design/stylesheet/selectBoxGroup.css";

export interface SelectBoxRadioGroupProps
  extends SeedSelectBoxRadio.GroupProps {}

export const SelectBoxRadioGroup = React.forwardRef<
  HTMLDivElement,
  SelectBoxRadioGroupProps
>((props, ref) => {
  if (!props["aria-label"] && !props["aria-labelledby"]) {
    console.warn(
      "SelectBoxRadioGroup component requires either an `aria-label` or `aria-labelledby` attribute.",
    );
  }

  return <SeedSelectBoxRadio.Group ref={ref} {...props} />;
});

export interface SelectBoxRadioProps extends SeedSelectBoxRadio.RootProps {
  label: string;

  description?: string;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;
}

export const SelectBoxRadio = React.forwardRef<
  HTMLInputElement,
  SelectBoxRadioProps
>(({ label, description, inputProps, rootRef, ...otherProps }, ref) => {
  return (
    <SeedSelectBoxRadio.Root ref={rootRef} {...otherProps}>
      <SeedSelectBoxRadio.HiddenInput ref={ref} {...inputProps} />
      <SeedSelectBoxRadio.Content>
        <SeedSelectBoxRadio.Label>{label}</SeedSelectBoxRadio.Label>
        {description && (
          <SeedSelectBoxRadio.Description>
            {description}
          </SeedSelectBoxRadio.Description>
        )}
      </SeedSelectBoxRadio.Content>
      <SeedSelectBoxRadio.Control>
        <SeedSelectBoxRadio.Icon
          svg={
            <svg aria-hidden viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="currentColor" />
            </svg>
          }
        />
      </SeedSelectBoxRadio.Control>
    </SeedSelectBoxRadio.Root>
  );
});
SelectBoxRadio.displayName = "SelectBoxRadio";

export interface SelectBoxCheckGroupProps
  extends SeedSelectBoxCheck.GroupProps {}

export const SelectBoxCheckGroup = SeedSelectBoxCheck.Group;

export interface SelectBoxCheckProps extends SeedSelectBoxCheck.RootProps {
  label: string;

  description?: string;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;
}

export const SelectBoxCheck = React.forwardRef<
  HTMLInputElement,
  SelectBoxCheckProps
>(({ label, description, inputProps, rootRef, ...otherProps }, ref) => {
  return (
    <SeedSelectBoxCheck.Root ref={rootRef} {...otherProps}>
      <SeedSelectBoxCheck.HiddenInput ref={ref} {...inputProps} />
      <SeedSelectBoxCheck.Content>
        <SeedSelectBoxCheck.Label>{label}</SeedSelectBoxCheck.Label>
        {description && (
          <SeedSelectBoxCheck.Description>
            {description}
          </SeedSelectBoxCheck.Description>
        )}
      </SeedSelectBoxCheck.Content>
      <SeedSelectBoxCheck.Control>
        <SeedSelectBoxCheck.Icon svg={<IconCheckmarkFatFill />} />
      </SeedSelectBoxCheck.Control>
    </SeedSelectBoxCheck.Root>
  );
});
SelectBoxCheck.displayName = "SelectBoxCheck";
