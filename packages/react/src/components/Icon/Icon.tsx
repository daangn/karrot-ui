import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface PrefixIconProps {
  svg: React.ReactNode;
}

export const PrefixIcon = forwardRef<SVGSVGElement, PrefixIconProps>(
  ({ svg, ...otherProps }, ref) => {
    return (
      <Slot
        ref={ref as React.ForwardedRef<HTMLElement>}
        aria-hidden
        className="seed-prefix-icon"
        {...otherProps}
      >
        {svg}
      </Slot>
    );
  },
);

export interface SuffixIconProps {
  svg: React.ReactNode;
}

export const SuffixIcon = forwardRef<SVGSVGElement, SuffixIconProps>(
  ({ svg, ...otherProps }, ref) => {
    return (
      <Slot
        ref={ref as React.ForwardedRef<HTMLElement>}
        aria-hidden
        className="seed-suffix-icon"
        {...otherProps}
      >
        {svg}
      </Slot>
    );
  },
);

export interface OnlyIconProps {
  svg: React.ReactNode;
}

export const OnlyIcon = forwardRef<SVGSVGElement, OnlyIconProps>(({ svg, ...otherProps }, ref) => {
  return (
    <Slot
      ref={ref as React.ForwardedRef<HTMLElement>}
      aria-hidden
      className="seed-only-icon"
      {...otherProps}
    >
      {svg}
    </Slot>
  );
});
