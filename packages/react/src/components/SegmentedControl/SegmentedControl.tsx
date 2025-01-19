import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import {
  SegmentedControl as SegmentedControlPrimitive,
  useSegmentedControlSegmentContext,
} from "@seed-design/react-segmented-control";
import {
  segmentedControl,
  type SegmentedControlVariantProps,
} from "@seed-design/recipe/segmentedControl";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";

const { withProvider, withContext } = createStyleContext(segmentedControl);
const withStateProps = createWithStateProps([useSegmentedControlSegmentContext]);

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

export interface SegmentedControlSegmentProps extends SegmentedControlPrimitive.SegmentProps {}

export const SegmentedControlSegment = withContext<HTMLLabelElement, SegmentedControlSegmentProps>(
  SegmentedControlPrimitive.Segment,
  "segment",
);

export interface SegmentedControlSegmentHiddenInputProps
  extends SegmentedControlPrimitive.SegmentHiddenInputProps {}

export const SegmentedControlSegmentHiddenInput = SegmentedControlPrimitive.SegmentHiddenInput;

export interface SegmentedControlSegmentLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const SegmentedControlSegmentLabel = withContext<
  HTMLSpanElement,
  SegmentedControlSegmentLabelProps
>(withStateProps(Primitive.span), "segmentLabel");

export interface SegmentedControlSegmentLabelPlaceholderProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const SegmentedControlSegmentLabelPlaceholder = withContext<
  HTMLSpanElement,
  SegmentedControlSegmentLabelPlaceholderProps
>(withStateProps(Primitive.span), "segmentLabelPlaceholder");
