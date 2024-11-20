"use client";

import "@seed-design/stylesheet/actionableInlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  actionableInlineBanner,
  type ActionableInlineBannerVariantProps,
} from "@seed-design/recipe/actionableInlineBanner";
import { IconChevronRightLine } from "@daangn/react-monochrome-icon";

export interface ActionableInlineBannerProps
  extends ActionableInlineBannerVariantProps {
  icon?: React.ReactNode;
  titleText?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

type ReactActionableInlineBannerProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ActionableInlineBannerProps;

export const ActionableInlineBanner = React.forwardRef<
  HTMLButtonElement,
  ReactActionableInlineBannerProps
>(
  (
    {
      children,
      className,
      type = "button",
      variant = "neutralWeak",
      icon,
      onClick,
      titleText,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = actionableInlineBanner({ variant });

    return (
      <button
        onClick={onClick}
        ref={ref}
        className={clsx(classNames.root, className)}
        type={type}
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
        <IconChevronRightLine className={classNames.chevronRightIcon} />
      </button>
    );
  },
);
ActionableInlineBanner.displayName = "ActionableInlineBanner";
