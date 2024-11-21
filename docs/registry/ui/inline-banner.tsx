"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  inlineBanner,
  type InlineBannerVariantProps,
} from "@seed-design/recipe/inlineBanner";

export interface InlineBannerProps extends InlineBannerVariantProps {
  icon?: React.ReactNode;
  titleText?: string;
  link?: {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };
}

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
      variant = "neutralWeak",
      icon,
      titleText,
      link,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({ variant });

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
          </div>
        </div>
        {link && (
          <button
            type="button"
            className={classNames.linkLabel}
            onClick={link.onClick}
          >
            {link.label}
          </button>
        )}
      </div>
    );
  },
);
InlineBanner.displayName = "InlineBanner";
