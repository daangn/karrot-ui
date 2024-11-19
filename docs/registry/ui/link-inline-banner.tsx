"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  inlineBanner,
  type InlineBannerVariantProps,
} from "@seed-design/recipe/inlineBanner";

export type LinkInlineBannerProps = Omit<InlineBannerVariantProps, "type"> & {
  icon?: React.ReactNode;
  titleText?: string;
  linkLabel: string;
  onLinkLabelClick: React.MouseEventHandler<HTMLButtonElement>;
};

type ReactLinkInlineBannerProps = React.HTMLAttributes<HTMLDivElement> &
  LinkInlineBannerProps;

export const LinkInlineBanner = React.forwardRef<
  HTMLDivElement,
  ReactLinkInlineBannerProps
>(
  (
    {
      children,
      className,
      variant = "neutralWeak",
      icon,
      onClick,
      titleText,
      linkLabel,
      onLinkLabelClick: onLinkClick,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({ variant, type: "link" });

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
        <button
          type="button"
          className={classNames.linkLabel}
          onClick={onLinkClick}
        >
          {linkLabel}
        </button>
      </div>
    );
  },
);
LinkInlineBanner.displayName = "LinkInlineBanner";
