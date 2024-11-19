"use client";

import "@seed-design/stylesheet/inlineBanner.css";
import "@seed-design/stylesheet/dismissibleInlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { inlineBanner } from "@seed-design/recipe/inlineBanner";
import {
  dismissibleInlineBanner,
  type DismissibleInlineBannerVariantProps,
} from "@seed-design/recipe/dismissibleInlineBanner";
import { IconXmarkLine } from "@daangn/react-monochrome-icon";
import {
  useDismissible,
  type DismissibleProps,
} from "@seed-design/react-dismissible";

export interface DismissibleInlineBannerProps
  extends DismissibleInlineBannerVariantProps,
    DismissibleProps {
  titleText?: string;
  icon?: React.ReactNode;
  variant?: Exclude<
    DismissibleInlineBannerVariantProps["variant"],
    "dangerWeak" | "dangerSolid"
  >;
  dismissAriaLabel: string;
}

type ReactDismissibleInlineBannerProps = React.HTMLAttributes<HTMLDivElement> &
  DismissibleInlineBannerProps;

export const DismissibleInlineBanner = React.forwardRef<
  HTMLDivElement,
  ReactDismissibleInlineBannerProps
>(
  (
    {
      children,
      className,
      variant = "neutralWeak",
      icon,
      titleText,
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
      dismissAriaLabel,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({ variant });
    const dismissibleClassNames = dismissibleInlineBanner({ variant });

    const { isOpen, onDismissButtonClick } = useDismissible({
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
    });

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={clsx(dismissibleClassNames.root, classNames.root, className)}
        {...otherProps}
      >
        <div className={classNames.content}>
          {icon && <Slot className={classNames.icon}>{icon}</Slot>}
          <div>
            {titleText && (
              <>
                <span className={classNames.title}>{titleText}</span>
                <span className={classNames.spacer}> </span>
              </>
            )}
            <span className={classNames.label}>{children}</span>
          </div>
        </div>
        <button
          type="button"
          aria-label={dismissAriaLabel}
          className={dismissibleClassNames.dismissButton}
          onClick={onDismissButtonClick}
        >
          <IconXmarkLine className={dismissibleClassNames.xIcon} />
        </button>
      </div>
    );
  },
);
DismissibleInlineBanner.displayName = "DismissibleInlineBanner";
