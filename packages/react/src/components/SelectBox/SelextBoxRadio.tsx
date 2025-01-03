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

export interface SelectBoxRadioGroupProps extends RadioGroupPrimitive.RootProps {}

export const SelectBoxRadioGroup = withGroupProvider<HTMLDivElement, SelectBoxRadioGroupProps>(
  RadioGroupPrimitive.Root,
  "root",
);

export interface SelectBoxRadioRootProps extends RadioGroupPrimitive.ItemProps {}

export const SelectBoxRadioRoot = withProvider<HTMLLabelElement, SelectBoxRadioRootProps>(
  RadioGroupPrimitive.Item,
  "root",
);

export interface SelectBoxRadioContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const SelectBoxRadioContent = withContext<HTMLDivElement, SelectBoxRadioContentProps>(
  withStateProps(Primitive.div),
  "content",
);

export interface SelectBoxRadioLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const SelectBoxRadioLabel = withContext<HTMLSpanElement, SelectBoxRadioLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

export interface SelectBoxRadioDescriptionProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const SelectBoxRadioDescription = withContext<
  HTMLSpanElement,
  SelectBoxRadioDescriptionProps
>(withStateProps(Primitive.span), "description");

export interface SelectBoxRadioControlProps extends RadioGroupPrimitive.ItemControlProps {}

export const SelectBoxRadioControl = withContext<HTMLDivElement, SelectBoxRadioControlProps>(
  RadioGroupPrimitive.ItemControl,
  "radioControl",
);

export interface SelectBoxRadioIconProps extends IconProps {}

export const SelectBoxRadioIcon = withContext<SVGSVGElement, SelectBoxRadioIconProps>(
  withStateProps(Icon),
  "radioIcon",
);

export interface SelectBoxRadioHiddenInputProps extends RadioGroupPrimitive.ItemHiddenInputProps {}

export const SelectBoxRadioHiddenInput = RadioGroupPrimitive.ItemHiddenInput;
