import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { actionButton, type ActionButtonVariantProps } from "@seed-design/recipe/actionButton";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";
import { Icon, type IconProps } from "../private/Icon";
import {
  PendingButtonProvider,
  usePendingButton,
  usePendingButtonContext,
  type UsePendingButtonProps,
} from "../private/usePendingButton";

const { ClassNamesProvider, withContext } = createStyleContext(actionButton);
const withStateProps = createWithStateProps([usePendingButtonContext]);

export interface ActionButtonRootProps
  extends ActionButtonVariantProps,
    UsePendingButtonProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ActionButtonRoot = React.forwardRef<HTMLButtonElement, ActionButtonRootProps>(
  (
    {
      variant = "brandSolid",
      size = "medium",
      loading = false,
      layout = "withText",
      className,
      ...otherProps
    },
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
          <Primitive.button
            ref={ref}
            className={clsx(classNames.root, className)}
            {...api.stateProps}
            {...otherProps}
          />
        </PendingButtonProvider>
      </ClassNamesProvider>
    );
  },
);
ActionButtonRoot.displayName = "ActionButton";

export interface ActionButtonLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ActionButtonLabel = withContext<HTMLSpanElement, ActionButtonLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

export interface ActionButtonPrefixIconProps extends IconProps {}

export const ActionButtonPrefixIcon = withContext<SVGSVGElement, ActionButtonPrefixIconProps>(
  withStateProps(Icon),
  "prefixIcon",
);

export interface ActionButtonSuffixIconProps extends IconProps {}

export const ActionButtonSuffixIcon = withContext<SVGSVGElement, ActionButtonSuffixIconProps>(
  withStateProps(Icon),
  "suffixIcon",
);

export interface ActionButtonIconProps extends IconProps {}

export const ActionButtonIcon = withContext<SVGSVGElement, ActionButtonIconProps>(
  withStateProps(Icon),
  "icon",
);

export interface ActionButtonProgressIndicatorProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const ActionButtonProgressIndicator = withContext<
  HTMLDivElement,
  ActionButtonProgressIndicatorProps
>(withStateProps(Primitive.div), "progressIndicator");
