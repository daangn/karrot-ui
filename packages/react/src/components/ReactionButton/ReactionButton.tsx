import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { Toggle as TogglePrimitive, useToggleContext } from "@seed-design/react-toggle";
import {
  reactionButton,
  type ReactionButtonVariantProps,
} from "@seed-design/recipe/reactionButton";
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

const { ClassNamesProvider, withContext } = createStyleContext(reactionButton);

export interface ReactionButtonRootProps
  extends ReactionButtonVariantProps,
    UsePendingButtonProps,
    TogglePrimitive.RootProps {}

export const ReactionButtonRoot = React.forwardRef<HTMLButtonElement, ReactionButtonRootProps>(
  ({ size = "small", loading = false, className, ...otherProps }, ref) => {
    const classNames = reactionButton({ size });
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
ReactionButtonRoot.displayName = "ReactionButton";

export interface ReactionButtonLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ReactionButtonLabel = withContext<HTMLSpanElement, ReactionButtonLabelProps>(
  withStateProps(Primitive.span, usePendingButtonContext, useToggleContext),
  "label",
);

export interface ReactionButtonPrefixIconProps extends IconProps {}

export const ReactionButtonPrefixIcon = withContext<SVGSVGElement, ReactionButtonPrefixIconProps>(
  withStateProps(Icon, usePendingButtonContext, useToggleContext),
  "prefixIcon",
);

export interface ReactionButtonProgressCircleProps extends ProgressCircleProps {}

export const ReactionButtonProgressCircle = withContext<
  SVGSVGElement,
  ReactionButtonProgressCircleProps
>(withStateProps(ProgressCircle, usePendingButtonContext, useToggleContext), "progressCircle");
