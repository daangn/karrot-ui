import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import {
  SegmentedControl as SegmentedControlPrimitive,
  useSegmentedControlItemContext,
} from "@seed-design/react-segmented-control";
import {
  segmentedControl,
  type SegmentedControlVariantProps,
} from "@seed-design/recipe/segmented-control";
import { forwardRef } from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";

const { withProvider, withContext } = createStyleContext(segmentedControl);
const withStateProps = createWithStateProps([useSegmentedControlItemContext]);

export interface SegmentedControlRootProps
  extends SegmentedControlVariantProps,
    SegmentedControlPrimitive.RootProps {}

export const SegmentedControlRoot = withProvider<HTMLDivElement, SegmentedControlRootProps>(
  SegmentedControlPrimitive.Root,
  "root",
);

export interface SegmentedControlIndicatorProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const SegmentedControlIndicator = withContext<
  HTMLDivElement,
  SegmentedControlIndicatorProps
>(Primitive.div, "indicator");

export interface SegmentedControlItemProps extends SegmentedControlPrimitive.ItemProps {}

export const SegmentedControlItem = withContext<HTMLLabelElement, SegmentedControlItemProps>(
  SegmentedControlPrimitive.Item,
  "item",
);

export interface SegmentedControlItemHiddenInputProps
  extends SegmentedControlPrimitive.ItemHiddenInputProps {}

export const SegmentedControlItemHiddenInput = SegmentedControlPrimitive.ItemHiddenInput;

export interface SegmentedControlItemLabelProps
  extends PrimitiveProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  children: string;
}

const ConsistentWidthLabel = forwardRef<
  HTMLSpanElement,
  PrimitiveProps & Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> & { children: string }
>((props, ref) => {
  return <Primitive.span data-text={props.children} ref={ref} {...props} />;
});

export const SegmentedControlItemLabel = withContext<
  HTMLSpanElement,
  SegmentedControlItemLabelProps
>(withStateProps(ConsistentWidthLabel), "itemLabel");
