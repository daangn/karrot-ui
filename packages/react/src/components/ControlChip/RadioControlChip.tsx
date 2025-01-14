import { RadioGroup as RadioGroupPrimitive } from "@seed-design/react-radio-group";
import type { ControlChipVariantProps } from "@seed-design/recipe/controlChip";
import { styleContext } from "./styleContext";

const { withRootProvider, withContext } = styleContext;

export interface RadioControlChipRootProps
  extends ControlChipVariantProps,
    RadioGroupPrimitive.RootProps {}

export const RadioControlChipRoot = withRootProvider<HTMLLabelElement, RadioControlChipRootProps>(
  RadioGroupPrimitive.Root,
);

export interface RadioControlChipItemProps
  extends ControlChipVariantProps,
    Omit<RadioGroupPrimitive.ItemProps, "size"> {}

export const RadioControlChipItem = withContext<HTMLLabelElement, RadioControlChipItemProps>(
  RadioGroupPrimitive.Item,
  "root",
);

export interface RadioControlChipItemHiddenInputProps
  extends RadioGroupPrimitive.ItemHiddenInputProps {}

export const RadioControlChipItemHiddenInput = RadioGroupPrimitive.ItemHiddenInput;
