import { controlChip, type ControlChipVariantProps } from "@seed-design/css/recipes/control-chip";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";

const { withProvider } = createStyleContext(controlChip);

export interface ControlChipBaseProps extends PrimitiveProps, ControlChipVariantProps {}

export interface ControlChipProps
  extends ControlChipBaseProps,
    React.HTMLAttributes<HTMLButtonElement> {}

export const ControlChip = withProvider<HTMLButtonElement, ControlChipProps>(
  Primitive.button,
  "root",
);
