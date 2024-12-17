"use client";

import "@seed-design/stylesheet/callout.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { callout, type CalloutVariantProps } from "@seed-design/recipe/callout";
import {
  useDismissible,
  type DismissibleProps,
} from "@seed-design/react-dismissible";
import {
  IconChevronRightFill,
  IconXmarkFill,
} from "@daangn/react-monochrome-icon";

const CalloutContext = React.createContext<{
  variantProps: CalloutVariantProps;
} | null>(null);

const useCalloutContext = () => {
  const context = React.useContext(CalloutContext);
  if (!context)
    throw new Error("Parts of Callout cannot be rendered outside the Callout");

  return context;
};

export interface CalloutTitleProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const CalloutTitle = React.forwardRef<
  HTMLSpanElement,
  CalloutTitleProps
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useCalloutContext();

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
CalloutTitle.displayName = "CalloutTitle";

export interface CalloutDescriptionProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const CalloutDescription = React.forwardRef<
  HTMLSpanElement,
  CalloutDescriptionProps
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useCalloutContext();
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
CalloutDescription.displayName = "CalloutDescription";

export interface CalloutLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @default false
   */
  asChild?: boolean;
}

export const CalloutLink = React.forwardRef<
  HTMLButtonElement,
  CalloutLinkProps
>(
  (
    { asChild = false, children, type = "button", className, ...otherProps },
    ref,
  ) => {
    const {
      variantProps: { variant },
    } = useCalloutContext();
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
          type={type}
          ref={ref}
          className={clsx(classNames.linkLabel, className)}
          {...otherProps}
        >
          {children}
        </Comp>
      </>
    );
  },
);
CalloutLink.displayName = "CalloutLink";

export interface CalloutProps
  extends CalloutVariantProps,
    React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ children, className, variant = "neutral", icon, ...otherProps }, ref) => {
    const classNames = callout({ variant });

    return (
      <div
        ref={ref}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        {icon && <Slot className={classNames.icon}>{icon}</Slot>}
        <div>
          <CalloutContext.Provider value={{ variantProps: { variant } }}>
            {children}
          </CalloutContext.Provider>
        </div>
      </div>
    );
  },
);
Callout.displayName = "Callout";

export interface DismissibleCalloutProps
  extends DismissibleProps,
    CalloutVariantProps,
    React.HTMLAttributes<HTMLDivElement> {
  dismissAriaLabel: string;
}

export const DismissibleCallout = React.forwardRef<
  HTMLDivElement,
  DismissibleCalloutProps
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
        <div>
          <CalloutContext.Provider value={{ variantProps: { variant } }}>
            {children}
          </CalloutContext.Provider>
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

export interface ActionableCalloutProps
  extends CalloutVariantProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: NonNullable<
    React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
  >;
}

export const ActionableCallout = React.forwardRef<
  HTMLButtonElement,
  ActionableCalloutProps
>(
  (
    {
      children,
      className,
      type = "button",
      variant = "neutral",
      onClick,
      ...otherProps
    },
    ref,
  ) => {
    const classNames = callout({ variant });

    return (
      <button
        onClick={onClick}
        ref={ref}
        className={clsx(classNames.root, className)}
        type={type}
        {...otherProps}
      >
        <div>
          <CalloutContext.Provider value={{ variantProps: { variant } }}>
            {children}
          </CalloutContext.Provider>
        </div>
        <IconChevronRightFill className={classNames.actionableIcon} />
      </button>
    );
  },
);
ActionableCallout.displayName = "ActionableCallout";
