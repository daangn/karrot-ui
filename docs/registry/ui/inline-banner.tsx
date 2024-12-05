"use client";

import "@seed-design/stylesheet/inlineBanner.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  inlineBanner,
  type InlineBannerVariantProps,
} from "@seed-design/recipe/inlineBanner";

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
  React.HTMLAttributes<HTMLDivElement>
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

export const InlineBannerLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLDivElement>
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
InlineBannerLabel.displayName = "InlineBannerLabel";

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
  endElement?: React.ReactNode;
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
      endElement,
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
          {endElement}
        </InlineBannerContext.Provider>
      </div>
    );
  },
);
InlineBanner.displayName = "InlineBanner";
