"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  inlineBanner,
  type InlineBannerVariantProps,
} from "@seed-design/recipe/inlineBanner";
import { IconXmarkLine } from "@daangn/react-monochrome-icon";
import {
  useDismissible,
  type DismissibleProps,
} from "@seed-design/react-dismissible";

interface BaseInlineBannerProps
  extends Omit<InlineBannerVariantProps, "layout"> {
  titleText?: string;
  contentIcon?: React.ReactNode;
}

interface DismissibleInlineBannerProps
  extends BaseInlineBannerProps,
    DismissibleProps {
  tone?: Exclude<InlineBannerVariantProps["tone"], "danger">;
  dismissAriaLabel?: string;
  action?: never;
}

interface NondismissibleInlineBannerProps
  extends BaseInlineBannerProps,
    Partial<Record<keyof DismissibleProps, never>> {
  dismissAriaLabel?: never;
  action?: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  } & (
    | { label: string; buttonIcon?: never }
    | { label?: never; buttonIcon: React.ReactNode }
  );
}

export type InlineBannerProps =
  | DismissibleInlineBannerProps
  | NondismissibleInlineBannerProps;

type ReactInlineBannerProps = React.HTMLAttributes<HTMLDivElement> &
  InlineBannerProps;

export const InlineBanner = React.forwardRef<
  HTMLDivElement,
  ReactInlineBannerProps
>(
  (
    {
      children,
      className,
      tone = "neutral",
      variant = "weak",
      contentIcon,
      titleText,
      action,
      dismissAriaLabel,
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({
      tone,
      variant,
      layout: action || dismissAriaLabel ? "withAction" : "withoutAction",
    });

    const { isOpen, onDismissButtonClick } = useDismissible({
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
    });

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        <div className={classNames.content}>
          {contentIcon && (
            <Slot className={classNames.contentIcon}>{contentIcon}</Slot>
          )}
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
        {dismissAriaLabel && (
          <button
            type="button"
            aria-label={dismissAriaLabel}
            className={classNames.button}
            onClick={onDismissButtonClick}
          >
            <IconXmarkLine className={classNames.buttonIcon} />
          </button>
        )}
        {action && (
          <button
            type="button"
            className={action.label ? classNames.link : classNames.button}
            onClick={action.onClick}
          >
            {action.label}
            {action.buttonIcon && (
              <Slot className={classNames.buttonIcon}>{action.buttonIcon}</Slot>
            )}
          </button>
        )}
      </div>
    );
  },
);
InlineBanner.displayName = "InlineBanner";
