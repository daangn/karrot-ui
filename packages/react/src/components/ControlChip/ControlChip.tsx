import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { Checkbox as CheckboxPrimitive, useCheckboxContext } from "@seed-design/react-checkbox";
import { controlChip, type ControlChipVariantProps } from "@seed-design/recipe/controlChip";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";
import { createWithStateProps } from "../../utils/createWithStateProps";

const { withProvider, withContext } = createStyleContext(controlChip);
const withStateProps = createWithStateProps([useCheckboxContext]);

export interface ControlChipRootProps
  extends ControlChipVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLLabelElement> {}

export const ControlChipRoot = withProvider<HTMLLabelElement, ControlChipRootProps>(
  CheckboxPrimitive.Root,
  "root",
);
ControlChipRoot.displayName = "ControlChip";

export interface ControlChipLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ControlChipLabel = withContext<HTMLSpanElement, ControlChipLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

export interface ControlChipPrefixIconProps extends IconProps {}

export const ControlChipPrefixIcon = withContext<SVGSVGElement, ControlChipPrefixIconProps>(
  withStateProps(Icon),
  "prefixIcon",
);

export interface ControlChipSuffixIconProps extends IconProps {}

export const ControlChipSuffixIcon = withContext<SVGSVGElement, ControlChipSuffixIconProps>(
  withStateProps(Icon),
  "suffixIcon",
);

export interface ControlChipIconProps extends IconProps {}

export const ControlChipIcon = withContext<SVGSVGElement, ControlChipIconProps>(
  withStateProps(Icon),
  "icon",
);

export interface ControlChipCountProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ControlChipCount = withContext<HTMLSpanElement, ControlChipCountProps>(
  withStateProps(Primitive.span),
  "count",
);
