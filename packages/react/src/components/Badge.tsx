import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { badge, type BadgeVariantProps } from "@seed-design/recipe/badge";
import type * as React from "react";
import { createStyleContext } from "../utils/createStyleContext";

const { withProvider, withContext } = createStyleContext(badge);

////////////////////////////////////////////////////////////////////////////////////

export interface BadgeRootProps
  extends BadgeVariantProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const BadgeRoot = withProvider<HTMLSpanElement, BadgeRootProps>(Primitive.span, "root", {
  defaultProps: {
    size: "medium",
    shape: "rectangle",
    variant: "weak",
    tone: "neutral",
  },
});

////////////////////////////////////////////////////////////////////////////////////

export interface BadgeLabelProps extends PrimitiveProps, React.HTMLAttributes<HTMLSpanElement> {}

export const BadgeLabel = withContext<HTMLSpanElement, BadgeLabelProps>(Primitive.span, "label");
