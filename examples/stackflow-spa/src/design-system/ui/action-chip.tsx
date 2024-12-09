import { Slot } from "@radix-ui/react-slot";
import {
  actionChip,
  type ActionChipVariantProps,
} from "@seed-design/recipe/actionChip";
import clsx from "clsx";
import * as React from "react";

import "@seed-design/stylesheet/actionChip.css";

export interface ActionChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ActionChipVariantProps {
  prefixIcon?: React.ReactNode;

  suffixIcon?: React.ReactNode;

  count?: number;

  asChild?: boolean;
}

export const ActionChip = React.forwardRef<HTMLButtonElement, ActionChipProps>(
  (
    {
      className,
      size = "medium",
      layout = "withText",
      children,
      prefixIcon,
      suffixIcon,
      count,
      asChild = false,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const classNames = actionChip({ size, layout });
    return (
      <Comp
        ref={ref}
        className={clsx(classNames.root, className)}
        {...otherProps}
      >
        {layout === "withText" ? (
          <>
            {prefixIcon && (
              <Slot className={classNames.prefixIcon}>{prefixIcon}</Slot>
            )}
            <span className={classNames.label}>{children}</span>
            {count && <span className={classNames.count}>{count}</span>}
            {suffixIcon && (
              <Slot className={classNames.suffixIcon}>{suffixIcon}</Slot>
            )}
          </>
        ) : (
          <Slot className={classNames.icon}>{children}</Slot>
        )}
      </Comp>
    );
  },
);
ActionChip.displayName = "ActionChip";
