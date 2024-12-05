"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  inlineBanner,
  type InlineBannerVariantProps,
} from "@seed-design/recipe/inlineBanner";
import { IconChevronRightLine } from "@daangn/react-monochrome-icon";

const ActionableInlineBannerContext = React.createContext<{
  variantProps: InlineBannerVariantProps;
} | null>(null);

const useActionableInlineBannerContext = () => {
  const context = React.useContext(ActionableInlineBannerContext);
  if (!context)
    throw new Error(
      "Parts of ActionableInlineBanner cannot be rendered outside the ActionableInlineBanner",
    );

  return context;
};

export const ActionableInlineBannerTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useActionableInlineBannerContext();
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
ActionableInlineBannerTitle.displayName = "ActionableInlineBannerTitle";

export const ActionableInlineBannerLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useActionableInlineBannerContext();
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
ActionableInlineBannerLabel.displayName = "ActionableInlineBannerLabel";

export interface ActionableInlineBannerProps extends InlineBannerVariantProps {
  icon?: React.ReactNode;
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
      ...otherProps
    },
    ref,
  ) => {
    const classNames = inlineBanner({ variant });
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
            <ActionableInlineBannerContext.Provider
              value={{ variantProps: { variant } }}
            >
              {children}
            </ActionableInlineBannerContext.Provider>
          </div>
        </div>
        <IconChevronRightLine className={classNames.actionableIcon} />
      </button>
    );
  },
);
ActionableInlineBanner.displayName = "ActionableInlineBanner";
