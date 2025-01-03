import { mergeProps } from "@seed-design/dom-utils";
import { Checkbox as CheckboxPrimitive, useCheckboxContext } from "@seed-design/react-checkbox";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { checkbox, type CheckboxVariantProps } from "@seed-design/recipe/checkbox";
import { forwardRef } from "react";
import { createStyleContext } from "../../utils/createStyleContext";
import { createWithStateProps } from "../../utils/createWithStateProps";
import { Icon, type IconProps } from "../private/Icon";

const { withProvider, withContext, useClassNames } = createStyleContext(checkbox);
const withStateProps = createWithStateProps([useCheckboxContext]);

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxRootProps extends CheckboxVariantProps, CheckboxPrimitive.RootProps {}

export const CheckboxRoot = withProvider<HTMLLabelElement, CheckboxRootProps>(
  CheckboxPrimitive.Root,
  "root",
);

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxControlProps extends CheckboxPrimitive.ControlProps {}

export const CheckboxControl = withContext<HTMLDivElement, CheckboxControlProps>(
  CheckboxPrimitive.Control,
  "control",
);

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxCheckedIconProps extends IconProps {}

export const CheckboxCheckedIcon = forwardRef<SVGSVGElement, CheckboxCheckedIconProps>(
  ({ svg }, ref) => {
    const { stateProps, isChecked } = useCheckboxContext();
    const classNames = useClassNames();

    if (!isChecked) return null;

    const mergedProps = mergeProps(stateProps, { className: classNames.icon });

    return <Icon ref={ref} svg={svg} {...mergedProps} />;
  },
);

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxLabelProps extends PrimitiveProps, React.HTMLAttributes<HTMLSpanElement> {}

export const CheckboxLabel = withContext<HTMLDivElement, CheckboxLabelProps>(
  withStateProps(Primitive.span),
  "label",
);

////////////////////////////////////////////////////////////////////////////////////

export interface CheckboxHiddenInputProps extends CheckboxPrimitive.HiddenInputProps {}

export const CheckboxHiddenInput = CheckboxPrimitive.HiddenInput;
