import { Slot } from "@radix-ui/react-slot";
import { dialog } from "@seed-design/recipe/dialog";
import clsx from "clsx";
import type * as React from "react";
import { createContext, forwardRef, useContext } from "react";
import { Dialog as Primitive } from "./primitive";

const StyleContext = createContext<ReturnType<typeof dialog> | null>(null);

const StyleProvider = StyleContext.Provider;

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a Dialog");
  }

  return context;
}

////////////////////////////////////////////////////////////////////////////////////

export interface DialogBackdropProps extends Primitive.BackdropProps {}

export const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>((props, ref) => {
  const { className, ...otherProps } = props;

  const classNames = useStyleContext();

  return (
    <Primitive.Backdrop
      ref={ref}
      className={clsx(classNames.backdrop, className)}
      {...otherProps}
    />
  );
});

DialogBackdrop.displayName = "DialogBackdrop";

////////////////////////////////////////////////////////////////////////////////////

export interface DialogContentProps extends Primitive.ContentProps {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const { className, ...otherProps } = props;

  const classNames = useStyleContext();

  return (
    <Primitive.Content ref={ref} className={clsx(classNames.content, className)} {...otherProps} />
  );
});

DialogContent.displayName = "DialogContent";

////////////////////////////////////////////////////////////////////////////////////

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>((props, ref) => {
  const { className, ...otherProps } = props;

  const classNames = useStyleContext();

  return <div ref={ref} className={clsx(classNames.header, className)} {...otherProps} />;
});

DialogHeader.displayName = "DialogHeader";

////////////////////////////////////////////////////////////////////////////////////

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>((props, ref) => {
  const { className, ...otherProps } = props;

  const classNames = useStyleContext();

  return <div ref={ref} className={clsx(classNames.footer, className)} {...otherProps} />;
});

DialogFooter.displayName = "DialogFooter";

////////////////////////////////////////////////////////////////////////////////////

export interface DialogTitleProps extends Primitive.TitleProps {}

export const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>((props, ref) => {
  const { className, ...otherProps } = props;

  const classNames = useStyleContext();

  return <div ref={ref} className={clsx(classNames.title, className)} {...otherProps} />;
});

DialogTitle.displayName = "DialogTitle";

////////////////////////////////////////////////////////////////////////////////////

export interface DialogDescriptionProps extends Primitive.DescriptionProps {}

export const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();

    return <div ref={ref} className={clsx(classNames.description, className)} {...otherProps} />;
  },
);

DialogDescription.displayName = "DialogDescription";

////////////////////////////////////////////////////////////////////////////////////

export interface DialogActionProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const DialogAction = forwardRef<HTMLDivElement, DialogActionProps>((props, ref) => {
  const { className, asChild, ...otherProps } = props;

  const classNames = useStyleContext();
  const Comp = asChild ? Slot : "div";

  return <Comp ref={ref} className={clsx(classNames.action, className)} {...otherProps} />;
});

DialogAction.displayName = "DialogAction";

////////////////////////////////////////////////////////////////////////////////////

export interface DialogRootProps extends Primitive.RootProps {}

export const DialogRoot = forwardRef<HTMLDivElement, DialogRootProps>((props, ref) => {
  const { children, role = "dialog", className, ...otherProps } = props;

  const classNames = dialog();

  return (
    <Primitive.Root
      ref={ref}
      role={role}
      data-stackflow-component-name="Dialog"
      className={clsx(classNames.container, className)}
      {...otherProps}
    >
      <StyleProvider value={classNames}>{children}</StyleProvider>
    </Primitive.Root>
  );
});

DialogRoot.displayName = "DialogRoot";
