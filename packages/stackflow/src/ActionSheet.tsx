import { Slot } from "@radix-ui/react-slot";
import { actionSheet } from "@seed-design/recipe/actionSheet";
import { actionSheetCloseButton } from "@seed-design/recipe/actionSheetCloseButton";
import {
  actionSheetItem,
  type ActionSheetItemVariantProps,
} from "@seed-design/recipe/actionSheetItem";
import clsx from "clsx";
import type * as React from "react";
import { createContext, forwardRef, useContext, useMemo } from "react";
import { Dialog as Primitive } from "./primitive";

const StyleContext = createContext<ReturnType<typeof actionSheetItem> | null>(null);

const StyleProvider = StyleContext.Provider;

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a ActionSheetItem");
  }

  return context;
}

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetItemProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    ActionSheetItemVariantProps {
  asChild?: boolean;
}

export const ActionSheetItem = forwardRef<HTMLButtonElement, ActionSheetItemProps>((props, ref) => {
  const { className, asChild, tone = "neutral", ...otherProps } = props;

  const Comp = asChild ? Slot : "button";
  const classNames = useMemo(() => actionSheetItem({ tone }), [tone]);

  return (
    <li style={{ display: "contents" }}>
      <StyleProvider value={classNames}>
        <Comp ref={ref} className={clsx(classNames.root, className)} {...otherProps} />
      </StyleProvider>
    </li>
  );
});

ActionSheetItem.displayName = "ActionSheetItem";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetItemLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

export const ActionSheetItemLabel = forwardRef<HTMLSpanElement, ActionSheetItemLabelProps>(
  (props, ref) => {
    const { className, asChild, ...otherProps } = props;

    const Comp = asChild ? Slot : "span";
    const classNames = useStyleContext();

    return <Comp ref={ref} className={clsx(classNames.label, className)} {...otherProps} />;
  },
);

ActionSheetItemLabel.displayName = "ActionSheetItemLabel";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetItemPrefixIconProps {
  svg: React.ReactNode;
}

export const ActionSheetItemPrefixIcon = (props: ActionSheetItemPrefixIconProps) => {
  const { svg } = props;

  const classNames = useStyleContext();

  return <Slot className={classNames.prefixIcon}>{svg}</Slot>;
};

ActionSheetItemPrefixIcon.displayName = "ActionSheetItemPrefixIcon";

////////////////////////////////////////////////////////////////////////////////////

const classNames = actionSheet();

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetBackdropProps extends Primitive.BackdropProps {}

export const ActionSheetBackdrop = forwardRef<HTMLDivElement, ActionSheetBackdropProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    return (
      <Primitive.Backdrop
        ref={ref}
        className={clsx(classNames.backdrop, className)}
        {...otherProps}
      />
    );
  },
);

ActionSheetBackdrop.displayName = "ActionSheetBackdrop";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetContentProps extends Primitive.ContentProps {}

export const ActionSheetContent = forwardRef<HTMLDivElement, ActionSheetContentProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    return (
      <Primitive.Content
        ref={ref}
        className={clsx(classNames.content, className)}
        {...otherProps}
      />
    );
  },
);

ActionSheetContent.displayName = "ActionSheetContent";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ActionSheetList = forwardRef<HTMLDivElement, ActionSheetListProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return <div ref={ref} className={clsx(classNames.list, className)} {...otherProps} />;
});

ActionSheetList.displayName = "ActionSheetList";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetGroupProps extends React.HTMLAttributes<HTMLUListElement> {}

export const ActionSheetGroup = forwardRef<HTMLUListElement, ActionSheetGroupProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    return <ul ref={ref} className={clsx(classNames.group, className)} {...otherProps} />;
  },
);

ActionSheetGroup.displayName = "ActionSheetGroup";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ActionSheetFooter = forwardRef<HTMLDivElement, ActionSheetFooterProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    return <div ref={ref} className={clsx(classNames.footer, className)} {...otherProps} />;
  },
);

ActionSheetFooter.displayName = "ActionSheetFooter";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetCloseButtonProps extends Primitive.CloseButtonProps {}

export const ActionSheetCloseButton = forwardRef<HTMLButtonElement, ActionSheetCloseButtonProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = actionSheetCloseButton();

    return (
      <Primitive.CloseButton
        ref={ref}
        // TODO: ActionSheetCloseButton should use useStyleContext to style label, but I'm lazy to implement it now.
        className={clsx(classNames.root, classNames.label, className)}
        {...otherProps}
      />
    );
  },
);

ActionSheetCloseButton.displayName = "ActionSheetCloseButton";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetCloseButtonLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const ActionSheetCloseButtonLabel = forwardRef<
  HTMLSpanElement,
  ActionSheetCloseButtonLabelProps
>((props, ref) => {
  const { ...otherProps } = props;

  return <span ref={ref} {...otherProps} />;
});

ActionSheetCloseButtonLabel.displayName = "ActionSheetCloseButtonLabel";

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetRootProps extends Primitive.RootProps {}

export const ActionSheetRoot = forwardRef<HTMLDivElement, ActionSheetRootProps>((props, ref) => {
  const { children, className, ...otherProps } = props;

  return (
    <Primitive.Root
      ref={ref}
      data-stackflow-component-name="ActionSheet"
      className={clsx(classNames.container, className)}
      {...otherProps}
    >
      {children}
    </Primitive.Root>
  );
});

ActionSheetRoot.displayName = "ActionSheetRoot";
