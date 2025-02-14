import {
  reactionButton,
  type ReactionButtonVariantProps,
} from "@seed-design/css/recipes/reaction-button";
import { Toggle as TogglePrimitive } from "@seed-design/react-toggle";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import {
  PendingButtonProvider,
  usePendingButton,
  type UsePendingButtonProps,
} from "../LoadingIndicator/usePendingButton";

const { ClassNamesProvider } = createStyleContext(reactionButton);

export interface ReactionButtonProps
  extends ReactionButtonVariantProps,
    UsePendingButtonProps,
    TogglePrimitive.RootProps {}

export const ReactionButton = React.forwardRef<HTMLButtonElement, ReactionButtonProps>(
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
ReactionButton.displayName = "ReactionButton";
