import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { textButton, type TextButtonVariantProps } from "@seed-design/css/recipes/text-button";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";

import type * as React from "react";

const { withProvider, withContext } = createStyleContext(textButton);

export interface TextButtonRootProps
  extends TextButtonVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const TextButtonRoot = withProvider<HTMLButtonElement, TextButtonRootProps>(
  Primitive.button,
  "root",
);

export interface TextButtonLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const TextButtonLabel = withContext<HTMLSpanElement, TextButtonLabelProps>(
  Primitive.span,
  "label",
);

export interface TextButtonPrefixIconProps extends IconProps {}

export const TextButtonPrefixIcon = withContext<SVGSVGElement, TextButtonPrefixIconProps>(
  Icon,
  "prefixIcon",
);

export interface TextButtonSuffixIconProps extends IconProps {}

export const TextButtonSuffixIcon = withContext<SVGSVGElement, TextButtonSuffixIconProps>(
  Icon,
  "suffixIcon",
);
