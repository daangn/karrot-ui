import { Checkbox as CheckboxPrimitive, useCheckboxContext } from "@seed-design/react-checkbox";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { selectBox } from "@seed-design/recipe/selectBox";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";
import { Icon, type IconProps } from "../private/Icon";

const { withProvider, withContext } = createStyleContext(selectBox);
const withStateProps = createWithStateProps([useCheckboxContext]);

export interface CheckSelectBoxRootProps extends CheckboxPrimitive.RootProps {}

export const CheckSelectBoxRoot = withProvider<HTMLLabelElement, CheckSelectBoxRootProps>(
  CheckboxPrimitive.Root,
  "root",
);

export interface CheckSelectBoxContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const CheckSelectBoxContent = withContext<HTMLDivElement, CheckSelectBoxContentProps>(
  withStateProps(Primitive.div),
  "content",
);

export interface CheckSelectBoxLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const CheckSelectBoxLabel = withContext<HTMLSpanElement, CheckSelectBoxLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

export interface CheckSelectBoxDescriptionProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const CheckSelectBoxDescription = withContext<
  HTMLSpanElement,
  CheckSelectBoxDescriptionProps
>(withStateProps(Primitive.span), "description");

export interface CheckSelectBoxControlProps extends CheckboxPrimitive.ControlProps {}

export const CheckSelectBoxControl = withContext<HTMLDivElement, CheckSelectBoxControlProps>(
  CheckboxPrimitive.Control,
  "checkboxControl",
);

export interface CheckSelectBoxIconProps extends IconProps {}

export const CheckSelectBoxIcon = withContext<SVGSVGElement, CheckSelectBoxIconProps>(
  withStateProps(Icon),
  "checkboxIcon",
);

export interface CheckSelectBoxHiddenInputProps extends CheckboxPrimitive.HiddenInputProps {}

export const CheckSelectBoxHiddenInput = CheckboxPrimitive.HiddenInput;
