import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { actionButton, type ActionButtonVariantProps } from "@seed-design/recipe/actionButton";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { withDataProps } from "../../utils/withDataProps";
import { Icon, type IconProps } from "../private/Icon";
import {
  PendingButtonProvider,
  usePendingButton,
  usePendingButtonContext,
  type UsePendingButtonProps,
} from "../private/usePendingButton";
import { ProgressCircle, type ProgressCircleProps } from "../ProgressCircle";

const { ClassNamesProvider, withContext } = createStyleContext(actionButton);

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
            {...api.dataProps}
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
  withDataProps(Primitive.span, usePendingButtonContext),
  "label",
);

export interface ActionButtonPrefixIconProps extends IconProps {}

export const ActionButtonPrefixIcon = withContext<SVGSVGElement, ActionButtonPrefixIconProps>(
  withDataProps(Icon, usePendingButtonContext),
  "prefixIcon",
);

export interface ActionButtonSuffixIconProps extends IconProps {}

export const ActionButtonSuffixIcon = withContext<SVGSVGElement, ActionButtonSuffixIconProps>(
  withDataProps(Icon, usePendingButtonContext),
  "suffixIcon",
);

export interface ActionButtonIconProps extends IconProps {}

export const ActionButtonIcon = withContext<SVGSVGElement, ActionButtonIconProps>(
  withDataProps(Icon, usePendingButtonContext),
  "icon",
);

export interface ActionButtonProgressCircleProps extends ProgressCircleProps {}

export const ActionButtonProgressCircle = withContext<
  SVGSVGElement,
  ActionButtonProgressCircleProps
>(withDataProps(ProgressCircle, usePendingButtonContext), "progressCircle");
