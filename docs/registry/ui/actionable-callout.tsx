"use client";

import "@seed-design/stylesheet/callout.css";

import * as React from "react";
import clsx from "clsx";
import { callout, type CalloutVariantProps } from "@seed-design/recipe/callout";
import { IconChevronRightFill } from "@daangn/react-monochrome-icon";

const ActionableCalloutContext = React.createContext<{
  variantProps: CalloutVariantProps;
} | null>(null);

const useActionableCalloutContext = () => {
  const context = React.useContext(ActionableCalloutContext);
  if (!context)
    throw new Error(
      "Parts of ActionableCallout cannot be rendered outside the ActionableCallout",
    );

  return context;
};

export const ActionableCalloutTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useActionableCalloutContext();

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
ActionableCalloutTitle.displayName = "ActionableCalloutTitle";

export const ActionableCalloutLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useActionableCalloutContext();
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
ActionableCalloutLabel.displayName = "ActionableCalloutLabel";

export interface ActionableCalloutProps extends CalloutVariantProps {
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
        <div className={classNames.content}>
          <div>
            <ActionableCalloutContext.Provider
              value={{ variantProps: { variant } }}
            >
              {children}
            </ActionableCalloutContext.Provider>
          </div>
        </div>
        <IconChevronRightFill className={classNames.actionableIcon} />
      </button>
    );
  },
);
ActionableCallout.displayName = "ActionableCallout";
