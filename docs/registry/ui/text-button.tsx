"use client";

import "@seed-design/stylesheet/textButton.css";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import {
  textButton,
  type TextButtonVariantProps,
} from "@seed-design/recipe/textButton";

export interface TextButtonProps extends TextButtonVariantProps {
  icon: React.ReactNode;

  /**
   * @default "leading"
   */
  iconPosition?: "leading" | "trailing";

  /**
   * @default false
   */
  asChild?: boolean;
}

interface ReactTextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TextButtonProps {}

export const TextButton = React.forwardRef<
  HTMLButtonElement,
  ReactTextButtonProps
>(
  (
    {
      className,
      variant = "brand",
      size = "medium",
      icon,
      iconPosition = "leading",
      children,
      asChild = false,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const classNames = textButton({ variant, size });

    return (
      <Comp
        ref={ref}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        {iconPosition === "leading" && (
          <Slot className={classNames.icon}>{icon}</Slot>
        )}
        <span className={classNames.label}>{children}</span>
        {iconPosition === "trailing" && (
          <Slot className={classNames.icon}>{icon}</Slot>
        )}
      </Comp>
    );
  },
);
TextButton.displayName = "textButton";
