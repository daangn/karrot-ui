import type {
  ColorBg,
  ColorFg,
  ColorPalette,
  ColorStroke,
  Radius,
  Unit,
} from "@seed-design/vars";
import { vars } from "@seed-design/vars";
import clsx from "clsx";
import * as React from "react";

function handleColor(color: string | undefined) {
  if (!color) {
    return undefined;
  }
  const [type, value] = color.split(".");
  // @ts-ignore
  return vars.$color[type][value] ?? undefined;
}

function handleSize(size: string | undefined) {
  if (!size) {
    return undefined;
  }
  if (size === "full") {
    return "100%";
  }
  // @ts-ignore
  return vars.$unit[size] ?? undefined;
}

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: `bg.${ColorBg}` | `palette.${ColorPalette}`;

  color?: `fg.${ColorFg}` | `palette.${ColorPalette}`;

  borderColor?: `stroke.${ColorStroke}` | `palette.${ColorPalette}`;

  borderWidth?: 0 | 1 | (number & {});

  borderTopWidth?: 0 | 1 | (number & {});

  borderRightWidth?: 0 | 1 | (number & {});

  borderBottomWidth?: 0 | 1 | (number & {});

  borderLeftWidth?: 0 | 1 | (number & {});

  borderRadius?: Radius;

  borderTopLeftRadius?: Radius;

  borderTopRightRadius?: Radius;

  borderBottomRightRadius?: Radius;

  borderBottomLeftRadius?: Radius;

  width?: Unit | "full";

  minWidth?: Unit | "full";

  maxWidth?: Unit | "full";

  height?: Unit | "full";

  minHeight?: Unit | "full";

  maxHeight?: Unit | "full";

  top?: 0;

  left?: 0;

  right?: 0;

  bottom?: 0;

  padding?: Unit;

  paddingX?: Unit;

  paddingY?: Unit;

  paddingTop?: Unit;

  paddingRight?: Unit;

  paddingBottom?: Unit;

  paddingLeft?: Unit;

  display?: "block" | "flex" | "inline" | "inlineBlock" | "none";

  position?: "relative" | "absolute" | "fixed" | "sticky";

  overflowX?: "visible" | "hidden" | "scroll" | "auto";

  overflowY?: "visible" | "hidden" | "scroll" | "auto";

  flexGrow?: 0 | 1 | (number & {});

  flexShrink?: 0 | (number & {});

  // Flex

  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";

  flexWrap?: "wrap" | "nowrap";

  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";

  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";

  alignContent?: "flex-start" | "flex-end" | "center" | "stretch";

  gap?: Unit;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    background,
    color,
    borderColor,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    display,
    position,
    overflowX,
    overflowY,
    flexGrow,
    flexShrink,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    className,
    ...nativeProps
  } = props;

  return (
    <div
      ref={ref}
      className={clsx("seed-box", className)}
      style={
        {
          "--seed-box-background": handleColor(background),
          "--seed-box-color": handleColor(color),
          "--seed-box-border-color": handleColor(borderColor),
          "--seed-box-border-width":
            borderWidth !== undefined ? `${borderWidth}px` : undefined,
          "--seed-box-border-top-width":
            borderTopWidth !== undefined ? `${borderTopWidth}px` : undefined,
          "--seed-box-border-right-width":
            borderRightWidth !== undefined
              ? `${borderRightWidth}px`
              : undefined,
          "--seed-box-border-bottom-width":
            borderBottomWidth !== undefined
              ? `${borderBottomWidth}px`
              : undefined,
          "--seed-box-border-left-width":
            borderLeftWidth !== undefined ? `${borderLeftWidth}px` : undefined,
          "--seed-box-border-radius": borderRadius
            ? `var(--seed-v3-radius-${borderRadius})`
            : undefined,
          "--seed-box-border-top-left-radius": borderTopLeftRadius
            ? `var(--seed-v3-radius-${borderTopLeftRadius})`
            : undefined,
          "--seed-box-border-top-right-radius": borderTopRightRadius
            ? `var(--seed-v3-radius-${borderTopRightRadius})`
            : undefined,
          "--seed-box-border-bottom-right-radius": borderBottomRightRadius
            ? `var(--seed-v3-radius-${borderBottomRightRadius})`
            : undefined,
          "--seed-box-border-bottom-left-radius": borderBottomLeftRadius
            ? `var(--seed-v3-radius-${borderBottomLeftRadius})`
            : undefined,
          "--seed-box-width": handleSize(width),
          "--seed-box-min-width": handleSize(minWidth),
          "--seed-box-max-width": handleSize(maxWidth),
          "--seed-box-height": handleSize(height),
          "--seed-box-min-height": handleSize(minHeight),
          "--seed-box-max-height": handleSize(maxHeight),
          "--seed-box-padding": padding
            ? `var(--seed-v3-unit-${padding})`
            : undefined,
          "--seed-box-padding-x": paddingX
            ? `var(--seed-v3-unit-${paddingX})`
            : undefined,
          "--seed-box-padding-y": paddingY
            ? `var(--seed-v3-unit-${paddingY})`
            : undefined,
          "--seed-box-padding-top": paddingTop
            ? `var(--seed-v3-unit-${paddingTop})`
            : undefined,
          "--seed-box-padding-right": paddingRight
            ? `var(--seed-v3-unit-${paddingRight})`
            : undefined,
          "--seed-box-padding-bottom": paddingBottom
            ? `var(--seed-v3-unit-${paddingBottom})`
            : undefined,
          "--seed-box-padding-left": paddingLeft
            ? `var(--seed-v3-unit-${paddingLeft})`
            : undefined,
          "--seed-box-display": display,
          "--seed-box-position": position,
          "--seed-box-overflow-x": overflowX,
          "--seed-box-overflow-y": overflowY,
          "--seed-box-flex-grow": flexGrow,
          "--seed-box-flex-shrink": flexShrink,
          "--seed-box-flex-direction": flexDirection,
          "--seed-box-flex-wrap": flexWrap,
          "--seed-box-justify-content": justifyContent,
          "--seed-box-align-items": alignItems,
          "--seed-box-align-content": alignContent,
          "--seed-box-gap": gap ? `var(--seed-v3-unit-${gap})` : undefined,
          ...props.style,
        } as React.CSSProperties
      }
      {...nativeProps}
    />
  );
});

export interface FlexProps extends Omit<BoxProps, "display"> {
  /**
   * @default "flex"
   */
  display?: "flex" | "none";

  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  wrap?: "wrap" | "nowrap";
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const { direction, wrap, ...rest } = props;

    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={direction}
        flexWrap={wrap}
        {...rest}
      />
    );
  },
);
