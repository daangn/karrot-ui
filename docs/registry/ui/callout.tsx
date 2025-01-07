"use client";

import "@seed-design/stylesheet/callout.css";

import {
  DismissibleProvider,
  Callout as SeedCallout,
  useDismissible,
  type UseDismissibleProps,
} from "@seed-design/react";
import * as React from "react";

import {
  IconChevronRightLine,
  IconXmarkLine,
} from "@daangn/react-monochrome-icon";

export interface CalloutProps
  extends Omit<SeedCallout.RootProps, "children" | "title" | "asChild"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
  linkLabel?: React.ReactNode;
  linkProps?: SeedCallout.LinkProps;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/callout
 */
export const Callout = React.forwardRef<
  React.ElementRef<typeof SeedCallout.Root>,
  CalloutProps
>(({ icon, title, description, linkLabel, linkProps, ...otherProps }, ref) => {
  return (
    <SeedCallout.Root ref={ref} {...otherProps}>
      {icon && <SeedCallout.Icon svg={icon} />}
      <SeedCallout.TextContent>
        <SeedCallout.Title>{title}</SeedCallout.Title>
        {description && (
          <SeedCallout.Description>{description}</SeedCallout.Description>
        )}
        {linkLabel && (
          <SeedCallout.Link {...linkProps}>{linkLabel}</SeedCallout.Link>
        )}
      </SeedCallout.TextContent>
    </SeedCallout.Root>
  );
});
Callout.displayName = "Callout";

export interface ActionableCalloutProps
  extends Omit<SeedCallout.RootProps, "children" | "title" | "asChild"> {
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
          <SeedCallout.Title>{title}</SeedCallout.Title>
          {description && (
            <SeedCallout.Description>{description}</SeedCallout.Description>
          )}
        </SeedCallout.TextContent>
        <SeedCallout.ActionableIcon svg={<IconChevronRightLine />} />
      </button>
    </SeedCallout.Root>
  );
});
ActionableCallout.displayName = "ActionableCallout";

export interface DismissibleCalloutProps
  extends Omit<SeedCallout.RootProps, "children" | "title" | "asChild">,
    UseDismissibleProps {
  title?: React.ReactNode;
  description: React.ReactNode;
  linkLabel?: React.ReactNode;
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
      linkLabel,
      linkProps,
      defaultOpen,
      open,
      onDismiss,
      ...otherProps
    },
    ref,
  ) => {
    const api = useDismissible({ defaultOpen, open, onDismiss });

    if (!api.open) return null;

    return (
      <DismissibleProvider value={api}>
        <SeedCallout.Root ref={ref} {...otherProps}>
          <SeedCallout.TextContent>
            <SeedCallout.Title>{title}</SeedCallout.Title>
            {description && (
              <SeedCallout.Description>{description}</SeedCallout.Description>
            )}
            {linkLabel && (
              <SeedCallout.Link {...linkProps}>{linkLabel}</SeedCallout.Link>
            )}
          </SeedCallout.TextContent>
          {/* You may implement your own i18n for dismiss label */}
          <SeedCallout.DismissButton aria-label="닫기">
            <SeedCallout.DismissIcon svg={<IconXmarkLine />} />
          </SeedCallout.DismissButton>
        </SeedCallout.Root>
      </DismissibleProvider>
    );
  },
);
DismissibleCallout.displayName = "DismissibleCallout";
