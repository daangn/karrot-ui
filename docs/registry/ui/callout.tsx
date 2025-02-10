"use client";

import { Callout as SeedCallout } from "@seed-design/react";
import * as React from "react";

import {
  IconChevronRightLine,
  IconXmarkLine,
} from "@daangn/react-monochrome-icon";

export interface CalloutProps
  extends Omit<
    SeedCallout.RootProps,
    "children" | "title" | "asChild" | "open" | "defaultOpen" | "onDismiss"
  > {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
  linkProps?: SeedCallout.LinkProps;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/callout
 */
export const Callout = React.forwardRef<
  React.ElementRef<typeof SeedCallout.Root>,
  CalloutProps
>(({ icon, title, description, linkProps, ...otherProps }, ref) => {
  return (
    <SeedCallout.Root ref={ref} {...otherProps}>
      {icon && <SeedCallout.Icon svg={icon} />}
      <SeedCallout.TextContent>
        {title && <SeedCallout.Title>{title}</SeedCallout.Title>}
        <SeedCallout.Description>{description}</SeedCallout.Description>
        {linkProps && <SeedCallout.Link {...linkProps} />}
      </SeedCallout.TextContent>
    </SeedCallout.Root>
  );
});
Callout.displayName = "Callout";

export interface ActionableCalloutProps
  extends Omit<
    SeedCallout.RootProps,
    "children" | "title" | "asChild" | "open" | "defaultOpen" | "onDismiss"
  > {
  title?: React.ReactNode;
  description: React.ReactNode;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/callout
 */
export const ActionableCallout = React.forwardRef<
  React.ElementRef<typeof SeedCallout.Root>,
  ActionableCalloutProps
>(({ title, description, ...otherProps }, ref) => {
  return (
    <SeedCallout.Root ref={ref} {...otherProps} asChild>
      <button type="button">
        <SeedCallout.TextContent>
          {title && <SeedCallout.Title>{title}</SeedCallout.Title>}
          <SeedCallout.Description>{description}</SeedCallout.Description>
        </SeedCallout.TextContent>
        <SeedCallout.ActionableIcon svg={<IconChevronRightLine />} />
      </button>
    </SeedCallout.Root>
  );
});
ActionableCallout.displayName = "ActionableCallout";

export interface DismissibleCalloutProps
  extends Omit<SeedCallout.RootProps, "children" | "title" | "asChild"> {
  title?: React.ReactNode;
  description: React.ReactNode;
  linkProps?: SeedCallout.LinkProps;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/callout
 */
export const DismissibleCallout = React.forwardRef<
  React.ElementRef<typeof SeedCallout.Root>,
  DismissibleCalloutProps
>(
  (
    {
      title,
      description,
      linkProps,
      defaultOpen,
      open,
      onDismiss,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <SeedCallout.Root ref={ref} {...otherProps}>
        <SeedCallout.TextContent>
          {title && <SeedCallout.Title>{title}</SeedCallout.Title>}
          <SeedCallout.Description>{description}</SeedCallout.Description>
          {linkProps && <SeedCallout.Link {...linkProps} />}
        </SeedCallout.TextContent>
        {/* You may implement your own i18n for dismiss label */}
        <SeedCallout.DismissButton aria-label="닫기">
          <SeedCallout.DismissIcon svg={<IconXmarkLine />} />
        </SeedCallout.DismissButton>
      </SeedCallout.Root>
    );
  },
);
DismissibleCallout.displayName = "DismissibleCallout";
