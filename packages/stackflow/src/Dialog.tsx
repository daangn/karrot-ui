import { composeRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { dialog } from "@seed-design/recipe/dialog";
import clsx from "clsx";
import type * as React from "react";
import { createContext, forwardRef, useCallback, useContext } from "react";
import { DialogProvider, useDialog, useDialogContext } from "./useDialog";

const StyleContext = createContext<ReturnType<typeof dialog> | null>(null);

const StyleProvider = StyleContext.Provider;

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a Dialog");
  }

  return context;
}

export interface DialogBackdropProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>((props, ref) => {
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
});

DialogBackdrop.displayName = "DialogBackdrop";

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
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
});

DialogContent.displayName = "DialogContent";

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>((props, ref) => {
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
});

DialogHeader.displayName = "DialogHeader";

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>((props, ref) => {
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
});

DialogFooter.displayName = "DialogFooter";

export interface DialogTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>((props, ref) => {
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

DialogTitle.displayName = "DialogTitle";

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
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

DialogDescription.displayName = "DialogDescription";

export interface DialogActionProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const DialogAction = forwardRef<HTMLDivElement, DialogActionProps>((props, ref) => {
  const { className, asChild, ...otherProps } = props;

  const classNames = useStyleContext();
  const api = useDialogContext();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={clsx(classNames.action, className)}
      {...api.dataProps}
      {...otherProps}
    />
  );
});

export interface DialogRootProps extends React.HTMLAttributes<HTMLDivElement> {
  onInteractOutside?: React.MouseEventHandler;
}

export const DialogRoot = forwardRef<HTMLDivElement, DialogRootProps>((props, ref) => {
  const { onInteractOutside, onClick, children, role = "dialog", ...otherProps } = props;

  const api = useDialog({ onInteractOutside });
  const classNames = dialog();

  return (
    <div
      ref={composeRefs(ref, api.refs.root)}
      role={role}
      data-stackflow-component-name="Dialog"
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

DialogRoot.displayName = "DialogRoot";
