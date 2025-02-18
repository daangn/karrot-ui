import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { actionChip, type ActionChipVariantProps } from "@seed-design/css/recipes/action-chip";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { withIconRequired } from "../Icon/Icon";

const { withProvider } = createStyleContext(actionChip);

export interface ActionChipProps
  extends ActionChipVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ActionChip = withIconRequired(
  withProvider<HTMLButtonElement, ActionChipProps>(Primitive.button, "root"),
  (props: ActionChipProps) => props.layout === "iconOnly",
);
ActionChip.displayName = "ActionChip";
