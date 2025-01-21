import { Dialog as DialogPrimitive, useDialogContext } from "@seed-design/react-dialog";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { actionSheet, type ActionSheetVariantProps } from "@seed-design/recipe/actionSheet";
import {
  actionSheetCloseButton,
  type ActionSheetCloseButtonVariantProps,
} from "@seed-design/recipe/actionSheetCloseButton";
import {
  actionSheetItem,
  type ActionSheetItemVariantProps,
} from "@seed-design/recipe/actionSheetItem";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";

const { withRootProvider, withContext } = createStyleContext(actionSheet);
const { withProvider: withItemProvider, withContext: withItemContext } =
  createStyleContext(actionSheetItem);
const { withProvider: withCloseButtonProvider, withContext: withCloseButtonContext } =
  createStyleContext(actionSheetCloseButton);
const withStateProps = createWithStateProps([useDialogContext]);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetRootProps extends ActionSheetVariantProps, DialogPrimitive.RootProps {}

export const ActionSheetRoot = withRootProvider<ActionSheetRootProps>(DialogPrimitive.Root, {
  defaultProps: {
    lazyMount: true,
    unmountOnExit: true,
  },
});

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetTriggerProps extends DialogPrimitive.TriggerProps {}

export const ActionSheetTrigger = DialogPrimitive.Trigger;

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetPositionerProps extends DialogPrimitive.PositionerProps {}

export const ActionSheetPositioner = withContext<HTMLDivElement, ActionSheetPositionerProps>(
  DialogPrimitive.Positioner,
  "positioner",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetBackdropProps extends DialogPrimitive.BackdropProps {}

export const ActionSheetBackdrop = withContext<HTMLDivElement, ActionSheetBackdropProps>(
  DialogPrimitive.Backdrop,
  "backdrop",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetContentProps extends DialogPrimitive.ContentProps {}

export const ActionSheetContent = withContext<HTMLDivElement, ActionSheetContentProps>(
  DialogPrimitive.Content,
  "content",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetHeaderProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const ActionSheetHeader = withContext<HTMLDivElement, ActionSheetHeaderProps>(
  withStateProps(Primitive.div),
  "header",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetTitleProps extends DialogPrimitive.TitleProps {}

export const ActionSheetTitle = withContext<HTMLHeadingElement, ActionSheetTitleProps>(
  withStateProps(Primitive.h2),
  "title",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetDescriptionProps extends DialogPrimitive.DescriptionProps {}

export const ActionSheetDescription = withContext<
  HTMLParagraphElement,
  ActionSheetDescriptionProps
>(withStateProps(Primitive.p), "description");

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ActionSheetList = withContext<HTMLDivElement, ActionSheetListProps>(
  withStateProps(Primitive.div),
  "list",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetItemProps
  extends PrimitiveProps,
    ActionSheetItemVariantProps,
    React.HTMLAttributes<HTMLButtonElement> {}

export const ActionSheetItem = withItemProvider<HTMLButtonElement, ActionSheetItemProps>(
  withStateProps(Primitive.button),
  "root",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetItemLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

export const ActionSheetItemLabel = withItemContext<HTMLSpanElement, ActionSheetItemLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetCloseButtonProps
  extends DialogPrimitive.CloseButtonProps,
    ActionSheetCloseButtonVariantProps {}

export const ActionSheetCloseButton = withCloseButtonProvider<
  HTMLDivElement,
  ActionSheetCloseButtonProps
>(DialogPrimitive.CloseButton, "root");

////////////////////////////////////////////////////////////////////////////////////

export interface ActionSheetCloseButtonLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ActionSheetCloseButtonLabel = withCloseButtonContext<
  HTMLSpanElement,
  ActionSheetCloseButtonLabelProps
>(Primitive.span, "label");
