import * as React from "react";
import { handleAlignY, type AlignY } from "../../utils/align";
import { Box, type BoxProps } from "../Box/Box";

export interface SpreadProps
  extends Omit<BoxProps, "display" | "direction" | "flexWrap" | "justifyContent" | "alignItems"> {
  alignY?: AlignY;
}

export const Spread = React.forwardRef<HTMLDivElement, SpreadProps>((props, ref) => {
  const { alignY, ...otherProps } = props;

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection="row"
      justifyContent={"spaceBetween"}
      alignItems={handleAlignY(alignY) ?? "flexStart"}
      {...otherProps}
    />
  );
});
