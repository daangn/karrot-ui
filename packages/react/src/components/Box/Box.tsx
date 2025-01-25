import type {
  ColorBg,
  ColorFg,
  ColorPalette,
  ColorStroke,
  Dimension,
  Radius,
  SpacingX,
  SpacingY,
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

function handleDimension(dimension: string | undefined) {
  if (!dimension) {
    return undefined;
  }
  const [type, value] = dimension.split(".");
  // @ts-ignore
  return vars.$dimension[dimension] ?? vars.$dimension[type][value] ?? undefined;
}

function handleSize(size: string | undefined) {
  if (!size) {
    return undefined;
  }
  if (size === "full") {
    return "100%";
  }
  // @ts-ignore
  return vars.$dimension[size] ?? size;
}

function handleRadius(radius: string | undefined) {
  if (!radius) {
    return undefined;
  }
  // @ts-ignore
  return vars.$radius[radius] ?? undefined;
}

function handleDisplay(
  display: "block" | "flex" | "inlineFlex" | "inline" | "inlineBlock" | "none" | undefined,
) {
  if (!display) {
    return undefined;
  }

  return {
    block: "block",
    flex: "flex",
    inlineFlex: "inline-flex",
    inline: "inline",
    inlineBlock: "inline-block",
    none: "none",
  }[display];
}

function handleFlexDirection(flexDirection: string | undefined) {
  if (!flexDirection) {
    return undefined;
  }

  return {
    row: "row",
    column: "column",
    rowReverse: "row-reverse",
    columnReverse: "column-reverse",
  }[flexDirection];
}

function handleJustifyContent(justifyContent: string | undefined) {
  if (!justifyContent) {
    return undefined;
  }

  return {
    flexStart: "flex-start",
    flexEnd: "flex-end",
    center: "center",
    spaceBetween: "space-between",
    spaceAround: "space-around",
  }[justifyContent];
}

function handleAlignItems(alignItems: string | undefined) {
  if (!alignItems) {
    return undefined;
  }

  return {
    flexStart: "flex-start",
    flexEnd: "flex-end",
    center: "center",
    stretch: "stretch",
  }[alignItems];
}

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;

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

  width?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}` | "full" | (string & {});

  minWidth?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}` | "full" | (string & {});

  maxWidth?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}` | "full" | (string & {});

  height?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}` | "full" | (string & {});

  minHeight?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}` | "full" | (string & {});

  maxHeight?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}` | "full" | (string & {});

  top?: 0;

  left?: 0;

  right?: 0;

  bottom?: 0;

  padding?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;

  paddingX?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;

  paddingY?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;

  paddingTop?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;

  paddingRight?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;

  paddingBottom?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;

  paddingLeft?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;

  display?: "block" | "flex" | "inlineFlex" | "inline" | "inlineBlock" | "none";

  position?: "relative" | "absolute" | "fixed" | "sticky";

  overflowX?: "visible" | "hidden" | "scroll" | "auto";

  overflowY?: "visible" | "hidden" | "scroll" | "auto";

  flexGrow?: 0 | 1 | (number & {});

  flexShrink?: 0 | (number & {});

  // Flex

  flexDirection?: "row" | "column" | "rowReverse" | "columnReverse";

  flexWrap?: "wrap" | "nowrap";

  justifyContent?: "flexStart" | "flexEnd" | "center" | "spaceBetween" | "spaceAround";

  alignItems?: "flexStart" | "flexEnd" | "center" | "stretch";

  alignContent?: "flexStart" | "flexEnd" | "center" | "stretch";

  alignSelf?: "flexStart" | "flexEnd" | "center" | "stretch";

  gap?: Dimension | `spacingX.${SpacingX}` | `spacingY.${SpacingY}`;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    as: Comp = "div",
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
    alignSelf,
    gap,
    className,
    style,
    ...nativeProps
  } = props;

  return (
    <Comp
      ref={ref}
      className={clsx("seed-box", className)}
      style={
        {
          "--seed-box-background": handleColor(background),
          "--seed-box-color": handleColor(color),
          "--seed-box-border-color": handleColor(borderColor),
          "--seed-box-border-width": borderWidth !== undefined ? `${borderWidth}px` : undefined,
          "--seed-box-border-top-width":
            borderTopWidth !== undefined ? `${borderTopWidth}px` : undefined,
          "--seed-box-border-right-width":
            borderRightWidth !== undefined ? `${borderRightWidth}px` : undefined,
          "--seed-box-border-bottom-width":
            borderBottomWidth !== undefined ? `${borderBottomWidth}px` : undefined,
          "--seed-box-border-left-width":
            borderLeftWidth !== undefined ? `${borderLeftWidth}px` : undefined,
          "--seed-box-border-radius": handleRadius(borderRadius),
          "--seed-box-border-top-left-radius": handleRadius(borderTopLeftRadius),
          "--seed-box-border-top-right-radius": handleRadius(borderTopRightRadius),
          "--seed-box-border-bottom-right-radius": handleRadius(borderBottomRightRadius),
          "--seed-box-border-bottom-left-radius": handleRadius(borderBottomLeftRadius),
          "--seed-box-width": handleSize(width),
          "--seed-box-min-width": handleSize(minWidth),
          "--seed-box-max-width": handleSize(maxWidth),
          "--seed-box-height": handleSize(height),
          "--seed-box-min-height": handleSize(minHeight),
          "--seed-box-max-height": handleSize(maxHeight),
          "--seed-box-padding": handleDimension(padding),
          "--seed-box-padding-x": handleDimension(paddingX),
          "--seed-box-padding-y": handleDimension(paddingY),
          "--seed-box-padding-top": handleDimension(paddingTop),
          "--seed-box-padding-right": handleDimension(paddingRight),
          "--seed-box-padding-bottom": handleDimension(paddingBottom),
          "--seed-box-padding-left": handleDimension(paddingLeft),
          "--seed-box-gap": handleDimension(gap),
          "--seed-box-display": handleDisplay(display),
          "--seed-box-position": position,
          "--seed-box-overflow-x": overflowX,
          "--seed-box-overflow-y": overflowY,
          "--seed-box-flex-grow": flexGrow,
          "--seed-box-flex-shrink": flexShrink,
          "--seed-box-flex-direction": handleFlexDirection(flexDirection),
          "--seed-box-flex-wrap": flexWrap,
          "--seed-box-justify-content": handleJustifyContent(justifyContent),
          "--seed-box-align-items": handleAlignItems(alignItems),
          "--seed-box-align-content": handleAlignItems(alignContent),
          "--seed-box-align-self": handleAlignItems(alignSelf),
          ...style,
        } as React.CSSProperties
      }
      {...nativeProps}
    />
  );
});
