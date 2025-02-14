import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface IconProps {
  svg: React.ReactNode;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ svg, ...otherProps }, ref) => {
  return (
    <Slot ref={ref as React.ForwardedRef<HTMLElement>} aria-hidden {...otherProps}>
      {svg}
    </Slot>
  );
});
