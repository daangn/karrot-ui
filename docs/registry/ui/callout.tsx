"use client";

import "@seed-design/stylesheet/callout.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { callout, type CalloutVariantProps } from "@seed-design/recipe/callout";

export interface CalloutProps extends Omit<CalloutVariantProps, "type"> {
  icon?: React.ReactNode;
  titleText?: string;
  linkLabel?: string;
  onLinkLabelClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type ReactCalloutProps = React.HTMLAttributes<HTMLDivElement> & CalloutProps;

export const Callout = React.forwardRef<HTMLDivElement, ReactCalloutProps>(
  (
    {
      children,
      className,
      variant = "neutral",
      icon,
      titleText,
      linkLabel,
      onLinkLabelClick,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = callout({ variant });

    return (
      <div
        ref={ref}
        className={clsx(classNames.root, className)}
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
      </div>
    );
  },
);
Callout.displayName = "Callout";
