import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { visuallyHidden } from "@seed-design/recipe/visuallyHidden";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";

const { withProvider } = createStyleContext(visuallyHidden);

export interface VisuallyHiddenProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const VisuallyHidden = withProvider<HTMLDivElement, VisuallyHiddenProps>(
  Primitive.div,
  "root",
);
