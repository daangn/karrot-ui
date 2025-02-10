"use client";

import { InlineBanner as SeedInlineBanner } from "@seed-design/react";
import * as React from "react";

import {
  IconChevronRightLine,
  IconXmarkLine,
} from "@daangn/react-monochrome-icon";

export interface InlineBannerProps
  extends Omit<
    SeedInlineBanner.RootProps,
    "children" | "title" | "asChild" | "open" | "defaultOpen" | "onDismiss"
  > {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
  linkProps?: SeedInlineBanner.LinkProps;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/inline-banner
 */
export const InlineBanner = React.forwardRef<
  React.ElementRef<typeof SeedInlineBanner.Root>,
  InlineBannerProps
>(({ icon, title, description, linkProps, ...otherProps }, ref) => {
  return (
    <SeedInlineBanner.Root ref={ref} {...otherProps}>
      <SeedInlineBanner.Content>
        {icon && <SeedInlineBanner.Icon svg={icon} />}
        <SeedInlineBanner.TextContent>
          {title && <SeedInlineBanner.Title>{title}</SeedInlineBanner.Title>}
          <SeedInlineBanner.Description>
            {description}
          </SeedInlineBanner.Description>
        </SeedInlineBanner.TextContent>
      </SeedInlineBanner.Content>
      {linkProps && <SeedInlineBanner.Link {...linkProps} />}
    </SeedInlineBanner.Root>
  );
});
InlineBanner.displayName = "InlineBanner";

export interface ActionableInlineBannerProps
  extends Omit<
    SeedInlineBanner.RootProps,
    "children" | "title" | "asChild" | "open" | "defaultOpen" | "onDismiss"
  > {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/inline-banner
 */
export const ActionableInlineBanner = React.forwardRef<
  React.ElementRef<typeof SeedInlineBanner.Root>,
  ActionableInlineBannerProps
>(({ icon, title, description, ...otherProps }, ref) => {
  return (
    <SeedInlineBanner.Root ref={ref} {...otherProps} asChild>
      <button type="button">
        <SeedInlineBanner.Content>
          {icon && <SeedInlineBanner.Icon svg={icon} />}
          <SeedInlineBanner.TextContent>
            {title && <SeedInlineBanner.Title>{title}</SeedInlineBanner.Title>}
            <SeedInlineBanner.Description>
              {description}
            </SeedInlineBanner.Description>
          </SeedInlineBanner.TextContent>
        </SeedInlineBanner.Content>
        <SeedInlineBanner.ActionableIcon svg={<IconChevronRightLine />} />
      </button>
    </SeedInlineBanner.Root>
  );
});
ActionableInlineBanner.displayName = "ActionableInlineBanner";

export interface DismissibleInlineBannerProps
  extends Omit<
    SeedInlineBanner.RootProps,
    "variant" | "children" | "title" | "asChild"
  > {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
  variant?: Exclude<
    SeedInlineBanner.RootProps["variant"],
    "criticalWeak" | "criticalSolid"
  >;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/inline-banner
 */
export const DismissibleInlineBanner = React.forwardRef<
  React.ElementRef<typeof SeedInlineBanner.Root>,
  DismissibleInlineBannerProps
>(({ icon, title, description, ...otherProps }, ref) => {
  return (
    <SeedInlineBanner.Root ref={ref} {...otherProps}>
      <SeedInlineBanner.Content>
        {icon && <SeedInlineBanner.Icon svg={icon} />}
        <SeedInlineBanner.TextContent>
          {title && <SeedInlineBanner.Title>{title}</SeedInlineBanner.Title>}
          <SeedInlineBanner.Description>
            {description}
          </SeedInlineBanner.Description>
        </SeedInlineBanner.TextContent>
      </SeedInlineBanner.Content>
      {/* You may implement your own i18n for dismiss label */}
      <SeedInlineBanner.DismissButton aria-label="닫기">
        <SeedInlineBanner.DismissIcon svg={<IconXmarkLine />} />
      </SeedInlineBanner.DismissButton>
    </SeedInlineBanner.Root>
  );
});
DismissibleInlineBanner.displayName = "DismissibleInlineBanner";
