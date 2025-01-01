import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { extendedFab, type ExtendedFabVariantProps } from "@seed-design/recipe/extendedFab";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";

const { withContext, withProvider } = createStyleContext(extendedFab);

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedFabRootProps
  extends ExtendedFabVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ExtendedFabRoot = withProvider<HTMLButtonElement, ExtendedFabRootProps>(
  Primitive.button,
  "root",
  {
    defaultProps: {
      variant: "neutralSolid",
      size: "medium",
    },
  },
);

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedFabLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ExtendedFabLabel = withContext<HTMLSpanElement, ExtendedFabLabelProps>(
  Primitive.span,
  "label",
);

////////////////////////////////////////////////////////////////////////////////////

export interface ExtendedFabPrefixIconProps extends IconProps {}

export const ExtendedFabPrefixIcon = withContext<SVGSVGElement, ExtendedFabPrefixIconProps>(
  Icon,
  "prefixIcon",
);
