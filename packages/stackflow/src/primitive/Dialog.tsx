import { Slot } from "@radix-ui/react-slot";
import { composeRefs } from "@radix-ui/react-compose-refs";
import type * as React from "react";
import { forwardRef, useCallback } from "react";
import { DialogProvider, useDialog, useDialogContext } from "./useDialog";

export interface DialogBackdropProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>((props, ref) => {
  const { ...otherProps } = props;

  const api = useDialogContext();

  return <div ref={composeRefs(ref, api.refs.backdrop)} {...api.dataProps} {...otherProps} />;
});

DialogBackdrop.displayName = "DialogBackdrop";

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const { onClick, ...otherProps } = props;

  const api = useDialogContext();

  return (
    <div
      ref={ref}
      onClick={useCallback((e) => {
        e.stopPropagation();
        onClick?.(e);
      }, [])}
      {...api.contentProps}
      {...otherProps}
    />
  );
});

DialogContent.displayName = "DialogContent";

export interface DialogTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>((props, ref) => {
  const { ...otherProps } = props;

  const api = useDialogContext();

  return <div ref={ref} {...api.titleProps} {...otherProps} />;
});

DialogTitle.displayName = "DialogTitle";

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  (props, ref) => {
    const { ...otherProps } = props;

    const api = useDialogContext();

    return <div ref={ref} {...api.descriptionProps} {...otherProps} />;
  },
);

DialogDescription.displayName = "DialogDescription";

export interface DialogCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DialogCloseButton = forwardRef<HTMLButtonElement, DialogCloseButtonProps>(
  (props, ref) => {
    const { asChild, ...otherProps } = props;

    const Comp = asChild ? Slot : "button";
    const api = useDialogContext();

    return <Comp aria-label="Close" ref={ref} {...api.closeButtonProps} {...otherProps} />;
  },
);

DialogCloseButton.displayName = "DialogCloseButton";

export interface DialogRootProps extends React.HTMLAttributes<HTMLDivElement> {
  onInteractOutside?: React.MouseEventHandler;
}

export const DialogRoot = forwardRef<HTMLDivElement, DialogRootProps>((props, ref) => {
  const { onInteractOutside, onClick, children, ...otherProps } = props;

  const api = useDialog({ onInteractOutside });

  return (
    <div
      ref={composeRefs(ref, api.refs.root)}
      onClick={useCallback((e) => {
        e.stopPropagation();
        onClick?.(e);
      }, [])}
      {...api.rootProps}
      {...otherProps}
    >
      <DialogProvider value={api}>{children}</DialogProvider>
    </div>
  );
});

DialogRoot.displayName = "DialogRoot";
