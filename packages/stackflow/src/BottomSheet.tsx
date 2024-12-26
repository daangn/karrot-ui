import { Slot } from "@radix-ui/react-slot";
import { bottomSheet } from "@seed-design/recipe/bottomSheet";
import clsx from "clsx";
import type * as React from "react";
import { createContext, forwardRef, useContext } from "react";
import { Dialog as Primitive } from "./primitive";

const StyleContext = createContext<ReturnType<typeof bottomSheet> | null>(null);

const StyleProvider = StyleContext.Provider;

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a BottomSheet");
  }

  return context;
}

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetBackdropProps extends Primitive.BackdropProps {}

export const BottomSheetBackdrop = forwardRef<HTMLDivElement, BottomSheetBackdropProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();

    return (
      <Primitive.Backdrop
        ref={ref}
        className={clsx(classNames.backdrop, className)}
        {...otherProps}
      />
    );
  },
);

BottomSheetBackdrop.displayName = "BottomSheetBackdrop";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetContentProps extends Primitive.ContentProps {}

export const BottomSheetContent = forwardRef<HTMLDivElement, BottomSheetContentProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();

    return (
      <Primitive.Content
        ref={ref}
        className={clsx(classNames.content, className)}
        {...otherProps}
      />
    );
  },
);

BottomSheetContent.displayName = "BottomSheetContent";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetHeader = forwardRef<HTMLDivElement, BottomSheetHeaderProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();

    return <div ref={ref} className={clsx(classNames.header, className)} {...otherProps} />;
  },
);

BottomSheetHeader.displayName = "BottomSheetHeader";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomSheetFooter = forwardRef<HTMLDivElement, BottomSheetFooterProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();

    return <div ref={ref} className={clsx(classNames.footer, className)} {...otherProps} />;
  },
);

BottomSheetFooter.displayName = "BottomSheetFooter";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetTitleProps extends Primitive.TitleProps {}

export const BottomSheetTitle = forwardRef<HTMLDivElement, BottomSheetTitleProps>((props, ref) => {
  const { className, ...otherProps } = props;

  const classNames = useStyleContext();

  return (
    <Primitive.Title ref={ref} className={clsx(classNames.title, className)} {...otherProps} />
  );
});

BottomSheetTitle.displayName = "BottomSheetTitle";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetDescriptionProps extends Primitive.DescriptionProps {}

export const BottomSheetDescription = forwardRef<HTMLDivElement, BottomSheetDescriptionProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();

    return (
      <Primitive.Description
        ref={ref}
        className={clsx(classNames.description, className)}
        {...otherProps}
      />
    );
  },
);

BottomSheetDescription.displayName = "BottomSheetDescription";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetCloseButtonProps extends Primitive.CloseButtonProps {}

export const BottomSheetCloseButton = forwardRef<HTMLButtonElement, BottomSheetCloseButtonProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;

    const classNames = useStyleContext();

    return (
      <Primitive.CloseButton
        ref={ref}
        className={clsx(classNames.closeButton, className)}
        {...otherProps}
      />
    );
  },
);

BottomSheetCloseButton.displayName = "BottomSheetCloseButton";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetCloseIconProps {
  svg: React.ReactNode;
}

export const BottomSheetCloseIcon = (props: BottomSheetCloseIconProps) => {
  const { svg } = props;

  const classNames = useStyleContext();

  return <Slot className={classNames.closeIcon}>{svg}</Slot>;
};

BottomSheetCloseIcon.displayName = "BottomSheetCloseIcon";

////////////////////////////////////////////////////////////////////////////////////

export interface BottomSheetRootProps extends Primitive.RootProps {}

export const BottomSheetRoot = forwardRef<HTMLDivElement, BottomSheetRootProps>((props, ref) => {
  const { children, className, ...otherProps } = props;

  const classNames = bottomSheet();

  return (
    <Primitive.Root
      ref={ref}
      data-stackflow-component-name="BottomSheet"
      className={clsx(classNames.container, className)}
      {...otherProps}
    >
      <StyleProvider value={classNames}>{children}</StyleProvider>
    </Primitive.Root>
  );
});

BottomSheetRoot.displayName = "BottomSheetRoot";
