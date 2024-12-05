"use client";

import "@seed-design/stylesheet/callout.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { callout, type CalloutVariantProps } from "@seed-design/recipe/callout";

const CalloutContext = React.createContext<{
  variantProps: CalloutVariantProps;
} | null>(null);

const useCalloutContext = () => {
  const context = React.useContext(CalloutContext);
  if (!context)
    throw new Error("Parts of Callout cannot be rendered outside the Callout");

  return context;
};

export const CalloutTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
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

export const CalloutLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
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
CalloutLabel.displayName = "CalloutLabel";

export const CalloutLink = React.forwardRef<
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
        ref={ref}
        className={clsx(classNames.linkLabel, className)}
        {...otherProps}
      >
        {children}
      </Comp>
    </>
  );
});
CalloutLink.displayName = "CalloutLink";

export interface CalloutProps extends Omit<CalloutVariantProps, "type"> {
  icon?: React.ReactNode;
}

type ReactCalloutProps = React.HTMLAttributes<HTMLDivElement> & CalloutProps;

export const Callout = React.forwardRef<HTMLDivElement, ReactCalloutProps>(
  ({ children, className, variant = "neutral", icon, ...otherProps }, ref) => {
    const classNames = callout({ variant });

    return (
      <div
        ref={ref}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        <div className={classNames.content}>
          {icon && <Slot className={classNames.icon}>{icon}</Slot>}
          <div>
            <CalloutContext.Provider value={{ variantProps: { variant } }}>
              {children}
            </CalloutContext.Provider>
          </div>
        </div>
      </div>
    );
  },
);
Callout.displayName = "Callout";
