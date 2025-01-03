import { Checkbox as CheckboxPrimitive, useCheckboxContext } from "@seed-design/react-checkbox";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { selectBox } from "@seed-design/recipe/selectBox";
import { selectBoxGroup } from "@seed-design/recipe/selectBoxGroup";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";
import { Icon, type IconProps } from "../private/Icon";

const { withProvider: withGroupProvider } = createStyleContext(selectBoxGroup);
const { withProvider, withContext } = createStyleContext(selectBox);
const withStateProps = createWithStateProps([useCheckboxContext]);

export interface SelectBoxCheckGroupProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const SelectBoxCheckGroup = withGroupProvider<HTMLDivElement, SelectBoxCheckGroupProps>(
  Primitive.div,
  "root",
);

export interface SelectBoxCheckRootProps extends CheckboxPrimitive.RootProps {}

export const SelectBoxCheckRoot = withProvider<HTMLLabelElement, SelectBoxCheckRootProps>(
  CheckboxPrimitive.Root,
  "root",
);

export interface SelectBoxCheckContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const SelectBoxCheckContent = withContext<HTMLDivElement, SelectBoxCheckContentProps>(
  withStateProps(Primitive.div),
  "content",
);

export interface SelectBoxCheckLabelProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const SelectBoxCheckLabel = withContext<HTMLSpanElement, SelectBoxCheckLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

export interface SelectBoxCheckDescriptionProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const SelectBoxCheckDescription = withContext<
  HTMLSpanElement,
  SelectBoxCheckDescriptionProps
>(withStateProps(Primitive.span), "description");

export interface SelectBoxCheckControlProps extends CheckboxPrimitive.ControlProps {}

export const SelectBoxCheckControl = withContext<HTMLDivElement, SelectBoxCheckControlProps>(
  CheckboxPrimitive.Control,
  "checkboxControl",
);

export interface SelectBoxCheckIconProps extends IconProps {}

export const SelectBoxCheckIcon = withContext<SVGSVGElement, SelectBoxCheckIconProps>(
  withStateProps(Icon),
  "checkboxIcon",
);

export interface SelectBoxCheckHiddenInputProps extends CheckboxPrimitive.HiddenInputProps {}

export const SelectBoxCheckHiddenInput = CheckboxPrimitive.HiddenInput;
