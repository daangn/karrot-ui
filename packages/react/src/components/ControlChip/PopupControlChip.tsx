import { mergeProps, visuallyHidden } from "@seed-design/dom-utils";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import type { ControlChipVariantProps } from "@seed-design/recipe/controlChip";
import { forwardRef } from "react";
import { styleContext } from "./styleContext";

const { withProvider } = styleContext;

export interface PopupControlChipRootProps
  extends ControlChipVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PopupControlChipRoot = withProvider<HTMLButtonElement, PopupControlChipRootProps>(
  Primitive.button,
  "root",
);

export interface PopupControlChipHiddenInputProps
  extends PrimitiveProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

export const PopupControlChipHiddenInput = forwardRef<
  HTMLInputElement,
  PopupControlChipHiddenInputProps
>((props, ref) => <Primitive.input ref={ref} {...mergeProps({ style: visuallyHidden }, props)} />);
