import * as React from "react";
import { handleAlign, handleAlignY, type Align, type AlignY } from "../../utils/align";
import { Box, type BoxProps } from "../Box/Box";

export interface InlineProps
  extends Omit<BoxProps, "display" | "direction" | "flexWrap" | "justifyContent" | "alignItems"> {
  align?: Align;

  alignY?: AlignY;
}

export const Inline = React.forwardRef<HTMLDivElement, InlineProps>((props, ref) => {
  const { align, alignY, ...otherProps } = props;

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={handleAlign(align) ?? "flexStart"}
      alignItems={handleAlignY(alignY) ?? "flexStart"}
      {...otherProps}
    />
  );
});
