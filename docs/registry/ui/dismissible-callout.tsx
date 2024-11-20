"use client";

import "@seed-design/stylesheet/dismissibleCallout.css";

import * as React from "react";
import clsx from "clsx";
import {
  dismissibleCallout,
  type DismissibleCalloutVariantProps,
} from "@seed-design/recipe/dismissibleCallout";
import { IconXmarkFill } from "@daangn/react-monochrome-icon";
import {
  useDismissible,
  type DismissibleProps,
} from "@seed-design/react-dismissible";

export interface DismissibleCalloutProps
  extends DismissibleProps,
    DismissibleCalloutVariantProps {
  titleText?: string;
  dismissAriaLabel: string;
  linkLabel?: string;
  onLinkLabelClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type ReactDismissibleCalloutProps = React.HTMLAttributes<HTMLDivElement> &
  DismissibleCalloutProps;

export const DismissibleCallout = React.forwardRef<
  HTMLDivElement,
  ReactDismissibleCalloutProps
>(
  (
    {
      children,
      className,
      variant = "neutral",
      titleText,
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
      dismissAriaLabel,
      linkLabel,
      onLinkLabelClick,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = dismissibleCallout({ variant });

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
          <div>
            {titleText && (
              <>
                <span className={classNames.title}>{titleText}</span>
                <span className={classNames.spacer}> </span>
              </>
            )}
            <span className={classNames.label}>{children}</span>{" "}
            {linkLabel && (
              <>
                <span className={classNames.spacer}> </span>
                <button
                  type="button"
                  className={classNames.linkLabel}
                  onClick={onLinkLabelClick}
                >
                  {linkLabel}
                </button>
              </>
            )}
          </div>
        </div>
        <button
          type="button"
          aria-label={dismissAriaLabel}
          className={classNames.dismissButton}
          onClick={onDismissButtonClick}
        >
          <IconXmarkFill className={classNames.xIcon} />
        </button>
      </div>
    );
  },
);
DismissibleCallout.displayName = "DismissibleCallout";
