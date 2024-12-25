import { composeRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { bottomSheet } from "@seed-design/recipe/bottomSheet";
import clsx from "clsx";
import type * as React from "react";
import { createContext, forwardRef, useCallback, useContext } from "react";
import { DialogProvider, useDialog, useDialogContext } from "./useDialog";

const StyleContext = createContext<ReturnType<typeof bottomSheet> | null>(null);

const StyleProvider = StyleContext.Provider;

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a BottomSheet");
  }

  return context;
}

export interface BottomSheetBackdropProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetBackdrop = forwardRef<HTMLDivElement, BottomSheetBackdropProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();
    const api = useDialogContext();

    return (
      <div
        ref={ref}
        className={clsx(classNames.backdrop, className)}
        {...api.dataProps}
        {...otherProps}
      />
    );
  },
);

BottomSheetBackdrop.displayName = "BottomSheetBackdrop";

export interface BottomSheetContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetContent = forwardRef<HTMLDivElement, BottomSheetContentProps>(
  (props, ref) => {
    const { className, onClick, ...otherProps } = props;

    const classNames = useStyleContext();
    const api = useDialogContext();

    return (
      <div
        ref={ref}
        className={clsx(classNames.content, className)}
        onClick={useCallback((e) => {
          e.stopPropagation();
          onClick?.(e);
        }, [])}
        {...api.dataProps}
        {...otherProps}
      />
    );
  },
);

BottomSheetContent.displayName = "BottomSheetContent";

export interface BottomSheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetHeader = forwardRef<HTMLDivElement, BottomSheetHeaderProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();
    const api = useDialogContext();

    return (
      <div
        ref={ref}
        className={clsx(classNames.header, className)}
        {...api.dataProps}
        {...otherProps}
      />
    );
  },
);

BottomSheetHeader.displayName = "BottomSheetHeader";

export interface BottomSheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetFooter = forwardRef<HTMLDivElement, BottomSheetFooterProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();
    const api = useDialogContext();

    return (
      <div
        ref={ref}
        className={clsx(classNames.footer, className)}
        {...api.dataProps}
        {...otherProps}
      />
    );
  },
);

BottomSheetFooter.displayName = "BottomSheetFooter";

export interface BottomSheetTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetTitle = forwardRef<HTMLDivElement, BottomSheetTitleProps>((props, ref) => {
  const { className, ...otherProps } = props;

  const classNames = useStyleContext();
  const api = useDialogContext();

  return (
    <div
      ref={ref}
      className={clsx(classNames.title, className)}
      {...api.dataProps}
      {...otherProps}
    />
  );
});

BottomSheetTitle.displayName = "BottomSheetTitle";

export interface BottomSheetDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetDescription = forwardRef<HTMLDivElement, BottomSheetDescriptionProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();
    const api = useDialogContext();

    return (
      <div
        ref={ref}
        className={clsx(classNames.description, className)}
        {...api.dataProps}
        {...otherProps}
      />
    );
  },
);

BottomSheetDescription.displayName = "BottomSheetDescription";

export interface BottomSheetCloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const BottomSheetCloseButton = forwardRef<HTMLButtonElement, BottomSheetCloseButtonProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();
    const api = useDialogContext();

    return (
      <button
        aria-label="Close"
        ref={ref}
        className={clsx(classNames.closeButton, className)}
        {...api.closeButtonProps}
        {...otherProps}
      />
    );
  },
);

BottomSheetCloseButton.displayName = "BottomSheetCloseButton";

export interface BottomSheetCloseIconProps {
  svg: React.ReactNode;
}

export const BottomSheetCloseIcon = (props: BottomSheetCloseIconProps) => {
  const { svg } = props;

  const classNames = useStyleContext();
  const api = useDialogContext();

  return (
    <Slot className={classNames.closeIcon} {...api.dataProps}>
      {svg}
    </Slot>
  );
};

BottomSheetCloseIcon.displayName = "BottomSheetCloseIcon";

export interface BottomSheetRootProps extends React.HTMLAttributes<HTMLDivElement> {
  onInteractOutside?: React.MouseEventHandler;
}

export const BottomSheetRoot = forwardRef<HTMLDivElement, BottomSheetRootProps>((props, ref) => {
  const { onInteractOutside, onClick, children, role = "dialog", ...otherProps } = props;

  const api = useDialog({ onInteractOutside });
  const classNames = bottomSheet();

  return (
    <div
      ref={composeRefs(ref, api.refs.root)}
      role={role}
      data-stackflow-component-name="BottomSheet"
      className={classNames.container}
      onClick={useCallback((e) => {
        e.stopPropagation();
        onClick?.(e);
      }, [])}
      {...api.rootProps}
      {...otherProps}
    >
      <DialogProvider value={api}>
        <StyleProvider value={classNames}>{children}</StyleProvider>
      </DialogProvider>
    </div>
  );
});

BottomSheetRoot.displayName = "BottomSheetRoot";
