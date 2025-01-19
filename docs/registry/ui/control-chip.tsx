"use client";

import { ControlChip as SeedControlChip } from "@seed-design/react";
import { Checkbox, RadioGroup } from "@seed-design/react/primitive";
import * as React from "react";


export interface ToggleControlChipProps
  extends SeedControlChip.RootBaseProps,
    Checkbox.RootProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  count?: number;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;
}

export const ToggleControlChip = React.forwardRef<
  HTMLInputElement,
  ToggleControlChipProps
>(
  (
    {
      children,
      prefixIcon,
      suffixIcon,
      count,
      size,
      layout = "withText",
      inputProps,
      rootRef,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <SeedControlChip.Root asChild size={size} layout={layout}>
        <Checkbox.Root ref={rootRef} {...otherProps}>
          {layout === "withText" ? (
            <>
              {prefixIcon && <SeedControlChip.PrefixIcon svg={prefixIcon} />}
              <SeedControlChip.Label>{children}</SeedControlChip.Label>
              {count && <SeedControlChip.Count>{count}</SeedControlChip.Count>}
              {suffixIcon && <SeedControlChip.SuffixIcon svg={suffixIcon} />}
            </>
          ) : (
            <SeedControlChip.Icon svg={children} />
          )}
          <Checkbox.HiddenInput ref={ref} {...inputProps} />
        </Checkbox.Root>
      </SeedControlChip.Root>
    );
  },
);
ToggleControlChip.displayName = "ControlChip.Toggle";

export interface ButtonControlChipProps extends SeedControlChip.RootProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;
}

export const ButtonControlChip = React.forwardRef<
  HTMLButtonElement,
  ButtonControlChipProps
>(
  (
    { children, prefixIcon, suffixIcon, layout = "withText", ...otherProps },
    ref,
  ) => {
    return (
      <SeedControlChip.Root ref={ref} layout={layout} {...otherProps}>
        {layout === "withText" ? (
          <>
            {prefixIcon && <SeedControlChip.PrefixIcon svg={prefixIcon} />}
            <SeedControlChip.Label>{children}</SeedControlChip.Label>
            {suffixIcon && <SeedControlChip.SuffixIcon svg={suffixIcon} />}
          </>
        ) : (
          <SeedControlChip.Icon svg={children} />
        )}
      </SeedControlChip.Root>
    );
  },
);
ButtonControlChip.displayName = "ControlChip.Button";

export interface RadioControlChipRootProps extends RadioGroup.RootProps {}

export const RadioControlChipRoot = RadioGroup.Root;

export interface RadioControlChipItemProps
  extends SeedControlChip.RootBaseProps,
    RadioGroup.ItemProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  count?: number;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLLabelElement>;
}

export const RadioControlChipItem = React.forwardRef<
  HTMLInputElement,
  RadioControlChipItemProps
>(
  (
    {
      children,
      prefixIcon,
      suffixIcon,
      count,
      size,
      layout = "withText",
      inputProps,
      rootRef,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <SeedControlChip.Root asChild size={size} layout={layout}>
        <RadioGroup.Item ref={rootRef} {...otherProps}>
          {layout === "withText" ? (
            <>
              {prefixIcon && <SeedControlChip.PrefixIcon svg={prefixIcon} />}
              <SeedControlChip.Label>{children}</SeedControlChip.Label>
              {count && <SeedControlChip.Count>{count}</SeedControlChip.Count>}
              {suffixIcon && <SeedControlChip.SuffixIcon svg={suffixIcon} />}
            </>
          ) : (
            <SeedControlChip.Icon svg={children} />
          )}
          <RadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
        </RadioGroup.Item>
      </SeedControlChip.Root>
    );
  },
);
RadioControlChipItem.displayName = "ControlChip.RadioItem";

export const ControlChip = Object.assign(
  () => {
    console.warn(
      "ControlChip is a base component and should not be rendered. Use ControlChip.Toggle or ControlChip.Radio instead.",
    );
  },
  {
    Toggle: ToggleControlChip,
    Button: ButtonControlChip,
    RadioRoot: RadioControlChipRoot,
    RadioItem: RadioControlChipItem,
  },
);

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
