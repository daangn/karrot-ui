import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { fab, type FabVariantProps } from "@seed-design/recipe/fab";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";

const { withContext, withProvider } = createStyleContext(fab);

////////////////////////////////////////////////////////////////////////////////////

export interface FabRootProps
  extends FabVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const FabRoot = withProvider<HTMLButtonElement, FabRootProps>(Primitive.button, "root");

////////////////////////////////////////////////////////////////////////////////////

export interface FabIconProps extends IconProps {}

export const FabIcon = withContext<SVGSVGElement, FabIconProps>(Icon, "icon");
