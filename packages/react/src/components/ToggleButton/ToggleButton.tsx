import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { Toggle as TogglePrimitive, useToggleContext } from "@seed-design/react-toggle";
import { toggleButton, type ToggleButtonVariantProps } from "@seed-design/recipe/toggleButton";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { withStateProps } from "../../utils/withStateProps";
import { Icon, type IconProps } from "../private/Icon";
import {
  PendingButtonProvider,
  usePendingButton,
  usePendingButtonContext,
  type UsePendingButtonProps,
} from "../private/usePendingButton";
import { ProgressCircle, type ProgressCircleProps } from "../ProgressCircle";

const { ClassNamesProvider, withContext } = createStyleContext(toggleButton);

export interface ToggleButtonRootProps
  extends ToggleButtonVariantProps,
    UsePendingButtonProps,
    TogglePrimitive.RootProps {}

export const ToggleButtonRoot = React.forwardRef<HTMLButtonElement, ToggleButtonRootProps>(
  ({ variant = "brandSolid", size = "small", loading = false, className, ...otherProps }, ref) => {
    const classNames = toggleButton({ variant, size });
    const api = usePendingButton({ loading, disabled: otherProps.disabled });

    return (
      <ClassNamesProvider value={classNames}>
        <PendingButtonProvider value={api}>
          <TogglePrimitive.Root
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
ToggleButtonRoot.displayName = "ToggleButton";

export interface ToggleButtonLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ToggleButtonLabel = withContext<HTMLSpanElement, ToggleButtonLabelProps>(
  withStateProps(Primitive.span, usePendingButtonContext, useToggleContext),
  "label",
);

export interface ToggleButtonPrefixIconProps extends IconProps {}

export const ToggleButtonPrefixIcon = withContext<SVGSVGElement, ToggleButtonPrefixIconProps>(
  withStateProps(Icon, usePendingButtonContext, useToggleContext),
  "prefixIcon",
);

export interface ToggleButtonSuffixIconProps extends IconProps {}

export const ToggleButtonSuffixIcon = withContext<SVGSVGElement, ToggleButtonSuffixIconProps>(
  withStateProps(Icon, usePendingButtonContext, useToggleContext),
  "suffixIcon",
);

export interface ToggleButtonProgressCircleProps extends ProgressCircleProps {}

export const ToggleButtonProgressCircle = withContext<
  SVGSVGElement,
  ToggleButtonProgressCircleProps
>(withStateProps(ProgressCircle, usePendingButtonContext, useToggleContext), "progressCircle");
