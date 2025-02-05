import { composeRefs } from "@radix-ui/react-compose-refs";
import { mergeProps } from "@seed-design/dom-utils";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import * as React from "react";
import {
  useSegmentedControl,
  type SegmentProps,
  type UseSegmentedControlProps,
} from "./useSegmentedControl";
import { SegmentedControlProvider, useSegmentedControlContext } from "./useSegmentedControlContext";
import {
  SegmentedControlSegmentProvider,
  useSegmentedControlSegmentContext,
} from "./useSegmentedControlSegmentContext";

export interface SegmentedControlRootProps
  extends UseSegmentedControlProps,
    PrimitiveProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {}

export const SegmentedControlRoot = React.forwardRef<HTMLDivElement, SegmentedControlRootProps>(
  (props, ref) => {
    const { value, defaultValue, onValueChange, form, name, disabled, ...otherProps } = props;

    const api = useSegmentedControl({
      value,
      defaultValue,
      onValueChange,
      disabled,
      form,
      name,
    });
    const mergedProps = mergeProps(api.rootProps, otherProps);

    return (
      <SegmentedControlProvider value={api}>
        <Primitive.div ref={composeRefs(ref, api.refs.root)} {...mergedProps} />
      </SegmentedControlProvider>
    );
  },
);
SegmentedControlRoot.displayName = "SegmentedControl";

export interface SegmentedControlSegmentProps
  extends SegmentProps,
    PrimitiveProps,
    Omit<React.InputHTMLAttributes<HTMLLabelElement>, "value"> {}

export const SegmentedControlSegment = React.forwardRef<
  HTMLLabelElement,
  SegmentedControlSegmentProps
>((props, ref) => {
  const { value, invalid, disabled, ...otherProps } = props;
  const { getSegmentProps } = useSegmentedControlContext();
  const itemProps = getSegmentProps({ value, disabled, invalid });
  const mergedProps = mergeProps(itemProps.rootProps, otherProps);

  return (
    <SegmentedControlSegmentProvider value={itemProps}>
      <Primitive.label ref={ref} {...mergedProps} />
    </SegmentedControlSegmentProvider>
  );
});
SegmentedControlSegment.displayName = "SegmentedControlSegment";

export interface SegmentedControlSegmentHiddenInputProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLInputElement> {}

export const SegmentedControlSegmentHiddenInput = React.forwardRef<
  HTMLInputElement,
  SegmentedControlSegmentHiddenInputProps
>((props, ref) => {
  const { hiddenInputProps } = useSegmentedControlSegmentContext();
  const mergedProps = mergeProps(hiddenInputProps, props);

  return <Primitive.input ref={ref} {...mergedProps} />;
});
SegmentedControlSegmentHiddenInput.displayName = "SegmentedControlSegmentHiddenInput";
