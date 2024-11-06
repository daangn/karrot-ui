"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  inlineBanner,
  type InlineBannerVariantProps,
} from "@seed-design/recipe/inlineBanner";

interface BaseInlineBannerProps extends InlineBannerVariantProps {
  prefixIcon?: React.ReactNode;
}

interface DismissibleInlineBannerProps extends BaseInlineBannerProps {
  tone?: Exclude<InlineBannerVariantProps["tone"], "danger">;
  dismissAriaLabel?: string;
  action?: never;
}

interface NondismissibleInlineBannerProps extends BaseInlineBannerProps {
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

const XmarkLine = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  // FIXME
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.0.0-alpha-20241022092043"
    width="16"
    height="16"
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711Z"
        fill="currentColor"
      />
    </g>
  </svg>
));

export const InlineBanner = React.forwardRef<
  HTMLDivElement,
  ReactInlineBannerProps
>(
  (
    {
      children,
      className,
      variant = "weak",
      tone = "neutral",
      prefixIcon,
      action,
      dismissAriaLabel,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({ variant, tone });

    const rootRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => rootRef.current as HTMLDivElement);

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
          <span className={classNames.label}>{children}</span>
        </div>
        {dismissAriaLabel && (
          <button
            type="button"
            aria-label={dismissAriaLabel}
            className={classNames.dismissButton}
            onClick={() => rootRef.current?.remove()}
          >
            <XmarkLine className={classNames.xIcon} />
          </button>
        )}
        {action && (
          <button
            type="button"
            className={classNames.actionLabel}
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
