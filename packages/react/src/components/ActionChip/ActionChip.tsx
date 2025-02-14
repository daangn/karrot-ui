import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { actionChip, type ActionChipVariantProps } from "@seed-design/recipe/action-chip";
import type * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";

const { withProvider, withContext } = createStyleContext(actionChip);

export interface ActionChipRootProps
  extends ActionChipVariantProps,
    PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ActionChipRoot = withProvider<HTMLButtonElement, ActionChipRootProps>(
  Primitive.button,
  "root",
);
ActionChipRoot.displayName = "ActionChip";

export interface ActionChipLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ActionChipLabel = withContext<HTMLSpanElement, ActionChipLabelProps>(
  Primitive.span,
  "label",
);

export interface ActionChipPrefixIconProps extends IconProps {}

export const ActionChipPrefixIcon = withContext<SVGSVGElement, ActionChipPrefixIconProps>(
  Icon,
  "prefixIcon",
);

export interface ActionChipSuffixIconProps extends IconProps {}

export const ActionChipSuffixIcon = withContext<SVGSVGElement, ActionChipSuffixIconProps>(
  Icon,
  "suffixIcon",
);

export interface ActionChipIconProps extends IconProps {}

export const ActionChipIcon = withContext<SVGSVGElement, ActionChipIconProps>(Icon, "icon");

export interface ActionChipCountProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const ActionChipCount = withContext<HTMLSpanElement, ActionChipCountProps>(
  Primitive.span,
  "count",
);
