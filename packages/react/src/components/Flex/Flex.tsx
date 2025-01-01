import * as React from "react";
import { Box, type BoxProps } from "../Box/Box";

export interface FlexProps extends Omit<BoxProps, "display"> {
  /**
   * @default "flex"
   */
  display?: "flex" | "none";

  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  wrap?: "wrap" | "nowrap";
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { direction, wrap, ...rest } = props;

  return <Box ref={ref} display="flex" flexDirection={direction} flexWrap={wrap} {...rest} />;
});
