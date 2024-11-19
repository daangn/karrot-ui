"use client";

import "@seed-design/stylesheet/callout.css";

import * as React from "react";
import clsx from "clsx";
import { callout, type CalloutVariantProps } from "@seed-design/recipe/callout";
import { IconChevronRightFill } from "@daangn/react-monochrome-icon";

export interface ActionableCalloutProps
  extends Omit<CalloutVariantProps, "type"> {
  titleText?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

type ReactActionableCalloutProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ActionableCalloutProps;

export const ActionableCallout = React.forwardRef<
  HTMLButtonElement,
  ReactActionableCalloutProps
>(
  (
    {
      children,
      className,
      type = "button",
      variant = "neutral",
      titleText,
      onClick,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = callout({ variant, type: "actionable" });

    return (
      <button
        onClick={onClick}
        ref={ref}
        className={clsx(classNames.root, className)}
        type={type}
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
            <span className={classNames.label}>{children}</span>
          </div>
        </div>
        <IconChevronRightFill className={classNames.chevronRightIcon} />
      </button>
    );
  },
);
ActionableCallout.displayName = "ActionableCallout";
