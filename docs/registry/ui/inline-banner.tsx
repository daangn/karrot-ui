"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  inlineBanner,
  type InlineBannerVariantProps,
} from "@seed-design/recipe/inlineBanner";
import {
  useDismissible,
  type DismissibleProps,
} from "@seed-design/react-dismissible";
import {
  IconChevronRightLine,
  IconXmarkLine,
} from "@daangn/react-monochrome-icon";

const InlineBannerContext = React.createContext<{
  variantProps: InlineBannerVariantProps;
} | null>(null);

const useInlineBannerContext = () => {
  const context = React.useContext(InlineBannerContext);
  if (!context)
    throw new Error(
      "Parts of InlineBanner cannot be rendered outside the InlineBanner",
    );

  return context;
};

export const InlineBannerTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useInlineBannerContext();
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
InlineBannerTitle.displayName = "InlineBannerTitle";

export const InlineBannerDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, className, ...otherProps }, ref) => {
  const {
    variantProps: { variant },
  } = useInlineBannerContext();
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
InlineBannerDescription.displayName = "InlineBannerDescription";

export const InlineBannerLink = React.forwardRef<
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
  } = useInlineBannerContext();
  const classNames = inlineBanner({ variant });

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={clsx(classNames.linkLabel, className)}
      {...otherProps}
    >
      {children}
    </Comp>
  );
});
InlineBannerLink.displayName = "InlineBannerLink";

export interface InlineBannerProps extends InlineBannerVariantProps {
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const InlineBanner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & InlineBannerProps
>(
  (
    {
      children,
      className,
      variant = "neutralWeak",
      icon,
      suffix,
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
        <InlineBannerContext.Provider value={{ variantProps: { variant } }}>
          <div className={classNames.content}>
            {icon && <Slot className={classNames.icon}>{icon}</Slot>}
            <div>{children}</div>
          </div>
          {suffix}
        </InlineBannerContext.Provider>
      </div>
    );
  },
);
InlineBanner.displayName = "InlineBanner";

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

export const DismissibleInlineBanner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & DismissibleInlineBannerProps
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
            <InlineBannerContext.Provider value={{ variantProps: { variant } }}>
              {children}
            </InlineBannerContext.Provider>
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

export interface ActionableInlineBannerProps extends InlineBannerVariantProps {
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ActionableInlineBanner = React.forwardRef<
  HTMLButtonElement,
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ActionableInlineBannerProps
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
            <InlineBannerContext.Provider value={{ variantProps: { variant } }}>
              {children}
            </InlineBannerContext.Provider>
          </div>
        </div>
        <IconChevronRightLine className={classNames.actionableIcon} />
      </button>
    );
  },
);
ActionableInlineBanner.displayName = "ActionableInlineBanner";
