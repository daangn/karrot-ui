"use client";

import {
  ControlChip as SeedControlChip,
  PopupControlChip as SeedPopupControlChip,
  RadioControlChip as SeedRadioControlChip,
  ToggleControlChip as SeedToggleControlChip,
} from "@seed-design/react";
import * as React from "react";

import { IconChevronDownLine } from "@daangn/react-monochrome-icon";
import "@seed-design/stylesheet/controlChip.css";

export interface ToggleControlChipProps
  extends SeedToggleControlChip.RootProps {
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
      layout = "withText",
      inputProps,
      rootRef,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <SeedToggleControlChip.Root ref={rootRef} layout={layout} {...otherProps}>
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
        <SeedToggleControlChip.HiddenInput ref={ref} {...inputProps} />
      </SeedToggleControlChip.Root>
    );
  },
);
ToggleControlChip.displayName = "ControlChip.Toggle";

export interface PopupControlChipProps extends SeedPopupControlChip.RootProps {
  prefixIcon?: React.ReactNode;

  /**
   * @default <IconChevronDownLine />
   */
  suffixIcon?: React.ReactNode;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  rootRef?: React.Ref<HTMLButtonElement>;

  placeholder?: React.ReactNode;

  // TODO: move to @seed-design/react
  value?: string;

  onValueChange?: (value: string) => void;
}

export const PopupControlChip = React.forwardRef<
  HTMLInputElement,
  PopupControlChipProps
>(
  (
    {
      children,
      prefixIcon,
      suffixIcon = <IconChevronDownLine />,
      layout = "withText",
      inputProps,
      rootRef,
      value,
      onValueChange,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <SeedPopupControlChip.Root ref={rootRef} layout={layout} {...otherProps}>
        {layout === "withText" ? (
          <>
            {prefixIcon && <SeedControlChip.PrefixIcon svg={prefixIcon} />}
            <SeedControlChip.Label>{children}</SeedControlChip.Label>
            {suffixIcon && <SeedControlChip.SuffixIcon svg={suffixIcon} />}
          </>
        ) : (
          <SeedControlChip.Icon svg={children} />
        )}
        <SeedPopupControlChip.HiddenInput
          ref={ref}
          value={value}
          onChange={(e) => onValueChange?.(e.currentTarget.value)}
          {...inputProps}
        />
      </SeedPopupControlChip.Root>
    );
  },
);
PopupControlChip.displayName = "ControlChip.Popup";

export interface RadioControlChipRootProps
  extends SeedRadioControlChip.RootProps {}

export const RadioControlChipRoot = SeedRadioControlChip.Root;

export interface RadioControlChipItemProps
  extends SeedRadioControlChip.ItemProps {
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
      layout = "withText",
      inputProps,
      rootRef,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <SeedRadioControlChip.Item ref={rootRef} layout={layout} {...otherProps}>
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
        <SeedRadioControlChip.ItemHiddenInput ref={ref} {...inputProps} />
      </SeedRadioControlChip.Item>
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
  },
);

/**
 * This file is generated snippet from the Seed Design.
 * You can extend the functionality from this snippet if needed.
 */
