import { Slot } from "@radix-ui/react-slot";
import { actionButton, type ActionButtonVariantProps } from "@seed-design/recipe/actionButton";
import clsx from "clsx";
import * as React from "react";
import { createStyleContext } from "../utils/createStyleContext";
import { ProgressCircle, type ProgressCircleProps } from "./ProgressCircle";

const { rootSlot, childSlot } = createStyleContext(actionButton);

interface UseButtonProps {
  /**
   * 버튼에 등록된 비동기 작업이 진행 중임을 사용자에게 알립니다.
   * @default false
   */
  loading?: boolean;

  /**
   * 버튼의 비활성화 여부를 나타냅니다.
   * @default false
   */
  disabled?: boolean;
}

function useButton(props: UseButtonProps) {
  const { loading, disabled } = props;
  const dataProps = {
    "data-loading": loading ? "" : undefined,
    "data-disabled": disabled ? "" : undefined,
  };

  return {
    loading,
    disabled,
    dataProps,
  };
}

const ButtonContext = React.createContext<ReturnType<typeof useButton> | null>(null);

const useButtonContext = () => {
  const context = React.useContext(ButtonContext);
  if (context === null) {
    throw new Error("useButtonContext should be used within UseButtonProvider");
  }

  return context;
};

export interface ActionButtonRootProps
  extends ActionButtonVariantProps,
    UseButtonProps,
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
    const { classNames, StyleProvider } = rootSlot({ variant, layout, size });
    const api = useButton({ loading, disabled: otherProps.disabled });

    if (layout === "iconOnly" && !(otherProps["aria-label"] || otherProps["aria-labelledby"])) {
      console.warn(
        "When layout is 'iconOnly', 'aria-label' or 'aria-labelledby' should be provided.",
      );
    }

    return (
      <StyleProvider>
        <ButtonContext.Provider value={api}>
          <Comp
            ref={ref}
            className={clsx(classNames.root, className)}
            {...api.dataProps}
            {...otherProps}
          />
        </ButtonContext.Provider>
      </StyleProvider>
    );
  },
);
ActionButtonRoot.displayName = "ActionButton";

export interface ActionButtonLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const ActionButtonLabel = React.forwardRef<HTMLSpanElement, ActionButtonLabelProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;
    const { classNames } = childSlot();
    const { dataProps } = useButtonContext();

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
  const { classNames } = childSlot();

  return (
    <Slot aria-hidden className={classNames.prefixIcon}>
      {svg}
    </Slot>
  );
};

export interface ActionButtonSuffixIconProps {
  svg: React.ReactNode;
}

export const ActionButtonSuffixIcon = (props: ActionButtonSuffixIconProps) => {
  const { svg } = props;
  const { classNames } = childSlot();

  return (
    <Slot aria-hidden className={classNames.suffixIcon}>
      {svg}
    </Slot>
  );
};

export interface ActionButtonIconProps {
  svg: React.ReactNode;
}

export const ActionButtonIcon = ({ svg }: ActionButtonIconProps) => {
  const { classNames } = childSlot();

  return (
    <Slot aria-hidden className={classNames.icon}>
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
  const { classNames } = childSlot();
  const { dataProps } = useButtonContext();

  return (
    <ProgressCircle
      ref={ref}
      className={clsx(classNames.progressCircle, className)}
      {...dataProps}
      {...otherProps}
    />
  );
});
