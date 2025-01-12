import * as React from "react";
import { Box, type BoxProps } from "../Box/Box";

export interface StackProps extends Omit<BoxProps, "display" | "direction"> {}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return <Box ref={ref} display="flex" flexDirection="column" {...props} />;
});
