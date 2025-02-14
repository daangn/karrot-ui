import { Toggle as TogglePrimitive } from "@seed-design/react-toggle";
import {
  toggleButton,
  type ToggleButtonVariantProps,
} from "@seed-design/css/recipes/toggle-button";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import {
  PendingButtonProvider,
  usePendingButton,
  type UsePendingButtonProps,
} from "../LoadingIndicator/usePendingButton";

const { ClassNamesProvider } = createStyleContext(toggleButton);

export interface ToggleButtonProps
  extends ToggleButtonVariantProps,
    UsePendingButtonProps,
    TogglePrimitive.RootProps {}

export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
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
ToggleButton.displayName = "ToggleButton";
