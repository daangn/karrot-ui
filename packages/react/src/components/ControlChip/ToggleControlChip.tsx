import { Checkbox as CheckboxPrimitive } from "@seed-design/react-checkbox";
import type { ControlChipVariantProps } from "@seed-design/recipe/controlChip";
import { styleContext } from "./styleContext";

const { withProvider } = styleContext;

export interface ToggleControlChipRootProps
  extends ControlChipVariantProps,
    CheckboxPrimitive.RootProps {}

export const ToggleControlChipRoot = withProvider<HTMLLabelElement, ToggleControlChipRootProps>(
  CheckboxPrimitive.Root,
  "root",
);

export interface ToggleControlChipHiddenInputProps extends CheckboxPrimitive.HiddenInputProps {}

export const ToggleControlChipHiddenInput = CheckboxPrimitive.HiddenInput;
