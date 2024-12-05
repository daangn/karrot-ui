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
import {
  useDismissible,
  type DismissibleProps,
} from "@seed-design/react-dismissible";

const DismissibleInlineBannerContext = React.createContext<{
  variantProps: InlineBannerVariantProps;
} | null>(null);

const useDismissibleInlineBannerContext = () => {
  const context = React.useContext(DismissibleInlineBannerContext);
  if (!context)
    throw new Error(
      "Parts of DismissibleInlineBanner cannot be rendered outside the DismissibleInlineBanner",
    );

  return context;
};

export const DismissibleInlineBannerTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useDismissibleInlineBannerContext();
  const classNames = inlineBanner({ variant });

  return (
    <>
      <span
        ref={ref}
        className={clsx(classNames.title, className)}
        {...otherProps}
      >
        {children}
      </span>
      <span
        ref={ref}
        className={clsx(classNames.spacer, className)}
        {...otherProps}
      >
        {" "}
      </span>
    </>
  );
});
DismissibleInlineBannerTitle.displayName = "DismissibleInlineBannerTitle";

export const DismissibleInlineBannerDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useDismissibleInlineBannerContext();
  const classNames = inlineBanner({ variant });

  return (
    <span
      ref={ref}
      className={clsx(classNames.label, className)}
      {...otherProps}
    >
      {children}
    </span>
  );
});
DismissibleInlineBannerDescription.displayName =
  "DismissibleInlineBannerDescription";

export interface DismissibleInlineBannerProps
  extends DismissibleProps,
    InlineBannerVariantProps {
  variant?: Exclude<
    InlineBannerVariantProps["variant"],
    "dangerWeak" | "dangerSolid"
  >;
  icon?: React.ReactNode;
  dismissAriaLabel: string;
}

type ReactDismissibleInlineBannerProps = React.HTMLAttributes<HTMLDivElement> &
  DismissibleInlineBannerProps;

export const DismissibleInlineBanner = React.forwardRef<
  HTMLDivElement,
  ReactDismissibleInlineBannerProps
>(
  (
    {
      children,
      className,
      variant = "neutralWeak",
      icon,
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
      dismissAriaLabel,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({ variant });

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
          {icon && <Slot className={classNames.icon}>{icon}</Slot>}
          <div>
            <DismissibleInlineBannerContext.Provider
              value={{ variantProps: { variant } }}
            >
              {children}
            </DismissibleInlineBannerContext.Provider>
          </div>
        </div>
        <button
          type="button"
          aria-label={dismissAriaLabel}
          className={classNames.dismissButton}
          onClick={onDismissButtonClick}
        >
          <IconXmarkLine className={classNames.dismissIcon} />
        </button>
      </div>
    );
  },
);
DismissibleInlineBanner.displayName = "DismissibleInlineBanner";
