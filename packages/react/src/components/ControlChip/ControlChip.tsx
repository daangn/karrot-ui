import { useCheckboxContext } from "@seed-design/react-checkbox";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { useRadioGroupItemContext } from "@seed-design/react-radio-group";
import { controlChip, type ControlChipVariantProps } from "@seed-design/recipe/control-chip";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";
import { Icon, type IconProps } from "../private/Icon";

const { withProvider, withContext } = createStyleContext(controlChip);
const withStateProps = createWithStateProps([useCheckboxContext, useRadioGroupItemContext], {
  strict: false,
});

export interface ControlChipRootBaseProps extends PrimitiveProps, ControlChipVariantProps {}

export interface ControlChipRootProps
  extends ControlChipRootBaseProps,
    React.HTMLAttributes<HTMLButtonElement> {}

export const ControlChipRoot = withProvider<HTMLButtonElement, ControlChipRootProps>(
  Primitive.button,
  "root",
);

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
