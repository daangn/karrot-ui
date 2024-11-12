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
import { useDismissible, type DismissibleProps } from "../hook/use-dismissible";

interface BaseInlineBannerProps
  extends Omit<InlineBannerVariantProps, "layout"> {
  titleText?: string;
  prefixIcon?: React.ReactNode;
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
    label: string;
  };
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
      prefixIcon,
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
      ...(!action && !dismissAriaLabel && { layout: "contentOnly" }),
    });

    const rootRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => rootRef.current as HTMLDivElement);

    const { isOpen, onDismissButtonClick } = useDismissible({
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
    });

    if (!isOpen) return null;

    return (
      <div
        ref={rootRef}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        <div className={classNames.content}>
          {prefixIcon && (
            <Slot className={classNames.prefixIcon}>{prefixIcon}</Slot>
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
            className={classNames.dismissButton}
            onClick={onDismissButtonClick}
          >
            <IconXmarkLine className={classNames.xIcon} />
          </button>
        )}
        {action && (
          <button
            type="button"
            className={classNames.actionButton}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
    );
  },
);
InlineBanner.displayName = "InlineBanner";
