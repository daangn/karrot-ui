import * as React from "react";
import { Box, type BoxProps } from "../Box/Box";
import { handleAlign, type Align } from "../../utils/align";
import { mergeProps } from "@seed-design/dom-utils";

export interface StackProps extends Omit<BoxProps, "display" | "direction" | "alignItems"> {
  align?: Align;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { align, ...otherProps } = props;

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection="column"
      alignItems={handleAlign(align)}
      {...mergeProps({ style: { "--seed-text-align": align } as React.CSSProperties }, otherProps)}
    />
  );
});
