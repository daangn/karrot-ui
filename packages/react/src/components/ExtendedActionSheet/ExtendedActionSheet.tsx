import { Dialog as DialogPrimitive, useDialogContext } from "@seed-design/react-dialog";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import {
  extendedActionSheet,
  type ExtendedActionSheetVariantProps,
} from "@seed-design/recipe/extended-action-sheet";
import {
  extendedActionSheetItem,
  type ExtendedActionSheetItemVariantProps,
} from "@seed-design/recipe/extended-action-sheet-item";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";
import { Icon, type IconProps } from "../private/Icon";

const { withRootProvider, withContext } = createStyleContext(extendedActionSheet);
const { withProvider: withItemProvider, withContext: withItemContext } =
  createStyleContext(extendedActionSheetItem);
const withStateProps = createWithStateProps([useDialogContext]);

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetRootProps
  extends ExtendedActionSheetVariantProps,
    DialogPrimitive.RootProps {}

export const ExtendedActionSheetRoot = withRootProvider<ExtendedActionSheetRootProps>(
  DialogPrimitive.Root,
  {
    defaultProps: {
      lazyMount: true,
      unmountOnExit: true,
    },
  },
);

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetTriggerProps extends DialogPrimitive.TriggerProps {}

export const ExtendedActionSheetTrigger = DialogPrimitive.Trigger;

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetPositionerProps extends DialogPrimitive.PositionerProps {}

export const ExtendedActionSheetPositioner = withContext<
  HTMLDivElement,
  ExtendedActionSheetPositionerProps
>(DialogPrimitive.Positioner, "positioner");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetBackdropProps extends DialogPrimitive.BackdropProps {}

export const ExtendedActionSheetBackdrop = withContext<
  HTMLDivElement,
  ExtendedActionSheetBackdropProps
>(DialogPrimitive.Backdrop, "backdrop");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetContentProps extends DialogPrimitive.ContentProps {}

export const ExtendedActionSheetContent = withContext<
  HTMLDivElement,
  ExtendedActionSheetContentProps
>(DialogPrimitive.Content, "content");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetHeaderProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const ExtendedActionSheetHeader = withContext<
  HTMLDivElement,
  ExtendedActionSheetHeaderProps
>(withStateProps(Primitive.div), "header");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetTitleProps extends DialogPrimitive.TitleProps {}

export const ExtendedActionSheetTitle = withContext<
  HTMLHeadingElement,
  ExtendedActionSheetTitleProps
>(withStateProps(Primitive.h2), "title");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetListProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const ExtendedActionSheetList = withContext<HTMLDivElement, ExtendedActionSheetListProps>(
  withStateProps(Primitive.div),
  "list",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ExtendedActionSheetGroup = withContext<HTMLDivElement, ExtendedActionSheetGroupProps>(
  withStateProps(Primitive.div),
  "group",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetItemProps
  extends PrimitiveProps,
    ExtendedActionSheetItemVariantProps,
    React.HTMLAttributes<HTMLButtonElement> {}

export const ExtendedActionSheetItem = withItemProvider<
  HTMLButtonElement,
  ExtendedActionSheetItemProps
>(withStateProps(Primitive.button), "root");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetItemLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

export const ExtendedActionSheetItemLabel = withItemContext<
  HTMLSpanElement,
  ExtendedActionSheetItemLabelProps
>(withStateProps(Primitive.span), "label");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetItemPrefixIconProps extends IconProps {}

export const ExtendedActionSheetItemPrefixIcon = withItemContext<
  HTMLSpanElement,
  ExtendedActionSheetItemPrefixIconProps
>(withStateProps(Icon), "prefixIcon");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetFooterProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const ExtendedActionSheetFooter = withContext<
  HTMLDivElement,
  ExtendedActionSheetFooterProps
>(withStateProps(Primitive.div), "footer");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetCloseButtonProps extends DialogPrimitive.CloseButtonProps {}

export const ExtendedActionSheetCloseButton = withContext<
  HTMLDivElement,
  ExtendedActionSheetCloseButtonProps
>(DialogPrimitive.CloseButton, "closeButton");

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedActionSheetCloseButtonLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ExtendedActionSheetCloseButtonLabel = withContext<
  HTMLSpanElement,
  ExtendedActionSheetCloseButtonLabelProps
>(Primitive.span, "closeButtonLabel");
