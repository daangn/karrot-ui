import { controlChip, type ControlChipVariantProps } from "@seed-design/css/recipes/control-chip";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { withIconRequired } from "../Icon/Icon";

const { withProvider } = createStyleContext(controlChip);

export interface ControlChipBaseProps extends PrimitiveProps, ControlChipVariantProps {}

export interface ControlChipProps
  extends ControlChipBaseProps,
    React.HTMLAttributes<HTMLButtonElement> {}

export const ControlChip = withIconRequired(
  withProvider<HTMLButtonElement, ControlChipProps>(Primitive.button, "root"),
  (props: ControlChipProps) => props.layout === "iconOnly",
);
