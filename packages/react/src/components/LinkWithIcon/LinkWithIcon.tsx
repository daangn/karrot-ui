import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import {
  linkWithIcon,
  type LinkWithIconVariantProps,
} from "@seed-design/css/recipes/link-with-icon";
import { createStyleContext } from "../../utils/createStyleContext";

import type * as React from "react";
import { withStyleProps, type StyleProps } from "../../utils/styled";

const { withProvider } = createStyleContext(linkWithIcon);

export interface LinkWithIconProps
  extends LinkWithIconVariantProps,
    PrimitiveProps,
    Pick<StyleProps, "color">,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}

export const LinkWithIcon = withProvider<HTMLButtonElement, LinkWithIconProps>(
  withStyleProps(Primitive.button),
  "root",
);
