import clsx from "clsx";
import * as React from "react";
import { useStyleProps, type StyleProps } from "../../utils/styled";

export interface BoxProps extends StyleProps, Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  as?: React.ElementType;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { style, restProps } = useStyleProps(props);
  const { as: Comp = "div", className, ...nativeProps } = restProps;

  return <Comp ref={ref} className={clsx("seed-box", className)} style={style} {...nativeProps} />;
});
