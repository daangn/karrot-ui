import {
  actionButton,
  type ActionButtonVariantProps,
} from "@seed-design/css/recipes/action-button";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import {
  PendingButtonProvider,
  usePendingButton,
  type UsePendingButtonProps,
} from "../LoadingIndicator/usePendingButton";
import { IconRequired } from "../Icon/Icon";

const { ClassNamesProvider } = createStyleContext(actionButton);

export interface ActionButtonProps
  extends ActionButtonVariantProps,
    UsePendingButtonProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    { variant, size, loading = false, layout = "withText", className, children, ...otherProps },
    ref,
  ) => {
    const classNames = actionButton({ variant, layout, size });
    const api = usePendingButton({ loading, disabled: otherProps.disabled });

    if (layout === "iconOnly" && !(otherProps["aria-label"] || otherProps["aria-labelledby"])) {
      console.warn(
        "When layout is 'iconOnly', 'aria-label' or 'aria-labelledby' should be provided.",
      );
    }

    return (
      <ClassNamesProvider value={classNames}>
        <PendingButtonProvider value={api}>
          <IconRequired enabled={layout === "iconOnly"}>
            <Primitive.button
              ref={ref}
              className={clsx(classNames.root, className)}
              {...api.stateProps}
              {...otherProps}
            >
              {children}
            </Primitive.button>
          </IconRequired>
        </PendingButtonProvider>
      </ClassNamesProvider>
    );
  },
);
ActionButton.displayName = "ActionButton";
