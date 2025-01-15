import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import {
  RadioGroup as RadioGroupPrimitive,
  useRadioGroupItemContext,
} from "@seed-design/react-radio-group";
import { selectBox } from "@seed-design/recipe/selectBox";
import { selectBoxGroup } from "@seed-design/recipe/selectBoxGroup";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";
import { Icon, type IconProps } from "../private/Icon";

const { withProvider: withGroupProvider } = createStyleContext(selectBoxGroup);
const { withProvider, withContext } = createStyleContext(selectBox);
const withStateProps = createWithStateProps([useRadioGroupItemContext]);

export interface RadioSelectBoxRootProps extends RadioGroupPrimitive.RootProps {}

export const RadioSelectBoxRoot = withGroupProvider<HTMLDivElement, RadioSelectBoxRootProps>(
  RadioGroupPrimitive.Root,
  "root",
);

export interface RadioSelectBoxItemProps extends RadioGroupPrimitive.ItemProps {}

export const RadioSelectBoxItem = withProvider<HTMLLabelElement, RadioSelectBoxItemProps>(
  RadioGroupPrimitive.Item,
  "root",
);

export interface RadioSelectBoxContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const RadioSelectBoxContent = withContext<HTMLDivElement, RadioSelectBoxContentProps>(
  withStateProps(Primitive.div),
  "content",
);

export interface RadioSelectBoxLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const RadioSelectBoxLabel = withContext<HTMLSpanElement, RadioSelectBoxLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

export interface RadioSelectBoxDescriptionProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const RadioSelectBoxDescription = withContext<
  HTMLSpanElement,
  RadioSelectBoxDescriptionProps
>(withStateProps(Primitive.span), "description");

export interface RadioSelectBoxControlProps extends RadioGroupPrimitive.ItemControlProps {}

export const RadioSelectBoxControl = withContext<HTMLDivElement, RadioSelectBoxControlProps>(
  RadioGroupPrimitive.ItemControl,
  "radioControl",
);

export interface RadioSelectBoxIconProps extends IconProps {}

export const RadioSelectBoxIcon = withContext<SVGSVGElement, RadioSelectBoxIconProps>(
  withStateProps(Icon),
  "radioIcon",
);

export interface RadioSelectBoxHiddenInputProps extends RadioGroupPrimitive.ItemHiddenInputProps {}

export const RadioSelectBoxHiddenInput = RadioGroupPrimitive.ItemHiddenInput;
