import { Primitive } from "@seed-design/react-primitive";
import { forwardRef } from "react";

export interface IconProps {
  svg: React.ReactNode;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ svg, ...otherProps }, ref) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: SVG is used as a child of a button element, so it is not required to have a title
    <Primitive.svg ref={ref} aria-hidden asChild {...otherProps}>
      {svg}
    </Primitive.svg>
  );
});
