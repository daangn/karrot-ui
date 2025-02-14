import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { fab, type FabVariantProps } from "@seed-design/css/recipes/fab";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";

const { withProvider } = createStyleContext(fab);

////////////////////////////////////////////////////////////////////////////////////

export interface FabProps
  extends FabVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Fab = withProvider<HTMLButtonElement, FabProps>(Primitive.button, "root");
