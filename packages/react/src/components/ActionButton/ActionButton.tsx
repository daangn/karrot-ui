import { Slot } from "@radix-ui/react-slot";
import { actionButton, type ActionButtonVariantProps } from "@seed-design/recipe/actionButton";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { ProgressCircle, type ProgressCircleProps } from "../ProgressCircle";
import {
  PendingButtonProvider,
  usePendingButton,
  usePendingButtonContext,
  type UsePendingButtonProps,
} from "./usePendingButton";

const { ClassNamesProvider, useClassNames } = createStyleContext(actionButton);

export interface ActionButtonRootProps
  extends ActionButtonVariantProps,
    UsePendingButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @default false
   */
  asChild?: boolean;
}

export const ActionButtonRoot = React.forwardRef<HTMLButtonElement, ActionButtonRootProps>(
  (
    {
      variant = "brandSolid",
      size = "medium",
      loading = false,
      layout = "withText",
      asChild = false,
      className,
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
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
          <Comp
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

export interface ActionButtonLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const ActionButtonLabel = React.forwardRef<HTMLSpanElement, ActionButtonLabelProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;
    const classNames = useClassNames();
    const { dataProps } = usePendingButtonContext();

    return (
      <span
        ref={ref}
        className={clsx(classNames.label, className)}
        {...dataProps}
        {...otherProps}
      />
    );
  },
);

export interface ActionButtonPrefixIconProps {
  svg: React.ReactNode;
}

export const ActionButtonPrefixIcon = (props: ActionButtonPrefixIconProps) => {
  const { svg } = props;
  const classNames = useClassNames();
  const { dataProps } = usePendingButtonContext();

  return (
    <Slot aria-hidden {...dataProps} className={classNames.prefixIcon}>
      {svg}
    </Slot>
  );
};

export interface ActionButtonSuffixIconProps {
  svg: React.ReactNode;
}

export const ActionButtonSuffixIcon = (props: ActionButtonSuffixIconProps) => {
  const { svg } = props;
  const classNames = useClassNames();
  const { dataProps } = usePendingButtonContext();

  return (
    <Slot aria-hidden {...dataProps} className={classNames.suffixIcon}>
      {svg}
    </Slot>
  );
};

export interface ActionButtonIconProps {
  svg: React.ReactNode;
}

export const ActionButtonIcon = ({ svg }: ActionButtonIconProps) => {
  const classNames = useClassNames();
  const { dataProps } = usePendingButtonContext();

  return (
    <Slot aria-hidden {...dataProps} className={classNames.icon}>
      {svg}
    </Slot>
  );
};

export interface ActionButtonProgressCircleProps extends ProgressCircleProps {}

export const ActionButtonProgressCircle = React.forwardRef<
  React.ElementRef<typeof ProgressCircle>,
  ActionButtonProgressCircleProps
>((props, ref) => {
  const { className, ...otherProps } = props;
  const classNames = useClassNames();
  const { dataProps } = usePendingButtonContext();

  return (
    <ProgressCircle
      ref={ref}
      className={clsx(classNames.progressCircle, className)}
      {...dataProps}
      {...otherProps}
    />
  );
});
