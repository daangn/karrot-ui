"use client";

import "@seed-design/stylesheet/callout.css";

import * as React from "react";
import clsx from "clsx";
import { callout, type CalloutVariantProps } from "@seed-design/recipe/callout";
import { IconXmarkFill } from "@daangn/react-monochrome-icon";
import {
  useDismissible,
  type DismissibleProps,
} from "@seed-design/react-dismissible";
import { Slot } from "@radix-ui/react-slot";

const DismissibleCalloutContext = React.createContext<{
  variantProps: CalloutVariantProps;
} | null>(null);

const useDismissibleCalloutContext = () => {
  const context = React.useContext(DismissibleCalloutContext);
  if (!context)
    throw new Error(
      "Parts of DismissibleCallout cannot be rendered outside the DismissibleCallout",
    );

  return context;
};

export const DismissibleCalloutTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useDismissibleCalloutContext();

  const classNames = callout({ variant });

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
DismissibleCalloutTitle.displayName = "DismissibleCalloutTitle";

export const DismissibleCalloutLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useDismissibleCalloutContext();
  const classNames = callout({ variant });

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
DismissibleCalloutLabel.displayName = "DismissibleCalloutLabel";

export const DismissibleCalloutLink = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    /**
     * @default false
     */
    asChild?: boolean;
  }
>(({ asChild = false, children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useDismissibleCalloutContext();
  const classNames = callout({ variant });

  const Comp = asChild ? Slot : "button";

  return (
    <>
      <span
        ref={ref}
        className={clsx(classNames.spacer, className)}
        {...otherProps}
      >
        {" "}
      </span>
      <Comp
        ref={ref}
        className={clsx(classNames.linkLabel, className)}
        {...otherProps}
      >
        {children}
      </Comp>
    </>
  );
});
DismissibleCalloutLink.displayName = "DismissibleCalloutLink";

export interface DismissibleCalloutProps
  extends DismissibleProps,
    CalloutVariantProps {
  dismissAriaLabel: string;
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
      defaultOpen,
      isOpen: isPropOpen,
      onDismiss,
      dismissAriaLabel,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = callout({ variant });

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
            <DismissibleCalloutContext.Provider
              value={{ variantProps: { variant } }}
            >
              {children}
            </DismissibleCalloutContext.Provider>
          </div>
        </div>
        <button
          type="button"
          aria-label={dismissAriaLabel}
          className={classNames.dismissButton}
          onClick={onDismissButtonClick}
        >
          <IconXmarkFill className={classNames.dismissIcon} />
        </button>
      </div>
    );
  },
);
DismissibleCallout.displayName = "DismissibleCallout";
