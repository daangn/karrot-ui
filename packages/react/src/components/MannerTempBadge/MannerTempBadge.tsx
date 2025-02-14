import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import {
  mannerTempBadge,
  type MannerTempBadgeVariantProps,
} from "@seed-design/css/recipes/manner-temp-badge";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";

const { withProvider } = createStyleContext(mannerTempBadge);

////////////////////////////////////////////////////////////////////////////////////

export interface MannerTempBadgeProps
  extends MannerTempBadgeVariantProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const MannerTempBadge = withProvider<HTMLSpanElement, MannerTempBadgeProps>(
  Primitive.span,
  "root",
);
