import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import type * as React from "react";
import { forwardRef } from "react";
import { useSwitch, type UseSwitchProps } from "./useSwitch";
import { SwitchProvider, useSwitchContext } from "./useSwitchContext";

export interface SwitchRootProps
  extends UseSwitchProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLLabelElement> {}

export const SwitchRoot = forwardRef<HTMLLabelElement, SwitchRootProps>((props, ref) => {
  const api = useSwitch(props);
  return (
    <SwitchProvider value={api}>
      <Primitive.label ref={ref} {...api.rootProps} {...api.restProps} />
    </SwitchProvider>
  );
});
SwitchRoot.displayName = "SwitchRoot";

export interface SwitchControlProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const SwitchControl = forwardRef<HTMLDivElement, SwitchControlProps>((props, ref) => {
  const { controlProps } = useSwitchContext();
  return <Primitive.div ref={ref} {...controlProps} {...props} />;
});
SwitchControl.displayName = "SwitchControl";

export interface SwitchThumbProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const SwitchThumb = forwardRef<HTMLDivElement, SwitchThumbProps>((props, ref) => {
  const { thumbProps } = useSwitchContext();
  return <Primitive.div ref={ref} {...thumbProps} {...props} />;
});
SwitchThumb.displayName = "SwitchThumb";

export interface SwitchHiddenInputProps
  extends PrimitiveProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

export const SwitchHiddenInput = forwardRef<HTMLInputElement, SwitchHiddenInputProps>(
  ({ onBlur, onChange, onFocus, onKeyDown, onKeyUp, ...otherProps }, ref) => {
    const { getHiddenInputProps } = useSwitchContext();
    return (
      <Primitive.input
        ref={ref}
        {...getHiddenInputProps({ onBlur, onChange, onFocus, onKeyDown, onKeyUp })}
        {...otherProps}
      />
    );
  },
);
SwitchHiddenInput.displayName = "SwitchHiddenInput";
