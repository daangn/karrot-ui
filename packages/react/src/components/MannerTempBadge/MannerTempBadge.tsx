import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import {
  mannerTempBadge,
  type MannerTempBadgeVariantProps,
} from "@seed-design/css/recipes/manner-temp-badge";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";

const { withProvider, withContext } = createStyleContext(mannerTempBadge);

////////////////////////////////////////////////////////////////////////////////////

export interface MannerTempBadgeRootProps
  extends MannerTempBadgeVariantProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const MannerTempBadgeRoot = withProvider<HTMLSpanElement, MannerTempBadgeRootProps>(
  Primitive.span,
  "root",
);

////////////////////////////////////////////////////////////////////////////////////

export interface MannerTempBadgeLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const MannerTempBadgeLabel = withContext<HTMLSpanElement, MannerTempBadgeLabelProps>(
  Primitive.span,
  "label",
);
