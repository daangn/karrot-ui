"use client";

import "@seed-design/stylesheet/actionableCallout.css";

import * as React from "react";
import clsx from "clsx";
import {
  actionableCallout,
  type ActionableCalloutVariantProps,
} from "@seed-design/recipe/actionableCallout";
import { IconChevronRightFill } from "@daangn/react-monochrome-icon";

export interface ActionableCalloutProps extends ActionableCalloutVariantProps {
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
    const classNames = actionableCallout({ variant });

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
