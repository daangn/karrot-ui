"use client";

import "@seed-design/stylesheet/inlineBanner.css";
import "@seed-design/stylesheet/actionableInlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { inlineBanner } from "@seed-design/recipe/inlineBanner";
import {
  actionableInlineBanner,
  type ActionableInlineBannerVariantProps,
} from "@seed-design/recipe/actionableInlineBanner";
import { IconChevronRightLine } from "@daangn/react-monochrome-icon";

export type ActionableInlineBannerProps = ActionableInlineBannerVariantProps & {
  titleText?: string;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

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
      variant = "neutralWeak",
      icon,
      onClick,
      titleText,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({ variant });
    const actionableClassNames = actionableInlineBanner({ variant });

    return (
      <button
        onClick={onClick}
        ref={ref}
        className={clsx(actionableClassNames.root, classNames.root, className)}
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
        <IconChevronRightLine
          className={actionableClassNames.chevronRightIcon}
        />
      </button>
    );
  },
);
ActionableInlineBanner.displayName = "ActionableInlineBanner";
