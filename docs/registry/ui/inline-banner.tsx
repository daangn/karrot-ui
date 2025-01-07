"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import {
  InlineBanner as SeedInlineBanner,
  DismissibleProvider,
  useDismissible,
  type UseDismissibleProps,
} from "@seed-design/react";
import * as React from "react";

import {
  IconChevronRightLine,
  IconXmarkLine,
} from "@daangn/react-monochrome-icon";

export interface InlineBannerProps
  extends Omit<SeedInlineBanner.RootProps, "children" | "title" | "asChild"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/inline-banner
 */
export const InlineBanner = React.forwardRef<
  React.ElementRef<typeof SeedInlineBanner.Root>,
  InlineBannerProps
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
    </SeedInlineBanner.Root>
  );
});
InlineBanner.displayName = "InlineBanner";

export interface LinkInlineBannerProps
  extends Omit<SeedInlineBanner.RootProps, "children" | "title" | "asChild"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
  linkLabel: React.ReactNode;
  linkProps?: SeedInlineBanner.LinkProps;
}

export const LinkInlineBanner = React.forwardRef<
  React.ElementRef<typeof SeedInlineBanner.Root>,
  LinkInlineBannerProps
>(({ icon, title, description, linkLabel, linkProps, ...otherProps }, ref) => {
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
      <SeedInlineBanner.Link {...linkProps}>{linkLabel}</SeedInlineBanner.Link>
    </SeedInlineBanner.Root>
  );
});
export interface ActionableInlineBannerProps
  extends Omit<SeedInlineBanner.RootProps, "children" | "title" | "asChild"> {
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
    >,
    UseDismissibleProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description: React.ReactNode;
  variant?: Exclude<
    SeedInlineBanner.RootProps["variant"],
    "dangerWeak" | "dangerSolid"
  >;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/inline-banner
 */
export const DismissibleInlineBanner = React.forwardRef<
  React.ElementRef<typeof SeedInlineBanner.Root>,
  DismissibleInlineBannerProps
>(
  (
    { icon, title, description, defaultOpen, open, onDismiss, ...otherProps },
    ref,
  ) => {
    const api = useDismissible({ defaultOpen, open, onDismiss });

    if (!api.open) return null;

    return (
      <DismissibleProvider value={api}>
        <SeedInlineBanner.Root ref={ref} {...otherProps}>
          <SeedInlineBanner.Content>
            {icon && <SeedInlineBanner.Icon svg={icon} />}
            <SeedInlineBanner.TextContent>
              {title && (
                <SeedInlineBanner.Title>{title}</SeedInlineBanner.Title>
              )}
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
      </DismissibleProvider>
    );
  },
);
DismissibleInlineBanner.displayName = "DismissibleInlineBanner";
