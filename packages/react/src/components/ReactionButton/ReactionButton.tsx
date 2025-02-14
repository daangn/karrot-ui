import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { Toggle as TogglePrimitive, useToggleContext } from "@seed-design/react-toggle";
import {
  reactionButton,
  type ReactionButtonVariantProps,
} from "@seed-design/css/recipes/reaction-button";
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

const { ClassNamesProvider, withContext } = createStyleContext(reactionButton);
const withStateProps = createWithStateProps([usePendingButtonContext, useToggleContext]);

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
  withStateProps(Primitive.span),
  "label",
);

export interface ReactionButtonCountProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ReactionButtonCount = withContext<HTMLSpanElement, ReactionButtonCountProps>(
  withStateProps(Primitive.span),
  "count",
);

export interface ReactionButtonPrefixIconProps extends IconProps {}

export const ReactionButtonPrefixIcon = withContext<SVGSVGElement, ReactionButtonPrefixIconProps>(
  withStateProps(Icon),
  "prefixIcon",
);

export interface ReactionButtonProgressIndicatorProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const ReactionButtonProgressIndicator = withContext<
  HTMLDivElement,
  ReactionButtonProgressIndicatorProps
>(withStateProps(Primitive.div), "progressIndicator");
