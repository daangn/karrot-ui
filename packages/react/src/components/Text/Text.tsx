import { text, type TextVariantProps } from "@seed-design/recipe/text";
import {
  vars,
  type ColorFg,
  type ColorPalette,
  type FontSize,
  type FontWeight,
  type LineHeight,
} from "@seed-design/vars";
import clsx from "clsx";
import type * as React from "react";
import { useMemo } from "react";

function handleColor(color: string | undefined) {
  if (!color) {
    return undefined;
  }
  const [type, value] = color.split(".");
  // @ts-ignore
  return vars.$color[type][value] ?? undefined;
}

function handleFontWeight(spacing: string | undefined) {
  if (!spacing) {
    return undefined;
  }
  // @ts-ignore
  return vars.$fontWeight[spacing] ?? undefined;
}

function handleFontSize(size: string | undefined) {
  if (!size) {
    return undefined;
  }
  // @ts-ignore
  return vars.$fontSize[size] ?? size;
}

function handleLineHeight(lineHeight: string | undefined) {
  if (!lineHeight) {
    return undefined;
  }
  // @ts-ignore
  return vars.$lineHeight[lineHeight] ?? lineHeight;
}

export interface TextProps
  extends Omit<TextVariantProps, "maxLines">,
    React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The element to render as
   * @default "span"
   */
  as?: "dt" | "dd" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong" | "legend";

  /**
   * The color of the text.
   */
  color?: `fg.${ColorFg}` | `palette.${ColorPalette}`;

  /**
   * The font size of the text. applied only if the variant is not set.
   */
  fontSize?: FontSize;

  /**
   * The line height of the text. applied only if the variant is not set.
   */
  lineHeight?: LineHeight;

  /**
   * The font weight of the text. applied only if the variant is not set.
   */
  fontWeight?: FontWeight;

  /**
   * The maximum number of lines to display. If the text overflows, it will be truncated.
   */
  maxLines?: number;
}

function mapMaxLines(maxLines: number | undefined): "none" | "single" | "multi" {
  if (maxLines === undefined) {
    return "none";
  }
  if (maxLines === 1) {
    return "single";
  }
  return "multi";
}

export const Text = ({
  as,
  color,
  variant,
  fontSize,
  lineHeight,
  fontWeight,
  maxLines,
  children,
  className,
  style,
  ...otherProps
}: TextProps) => {
  const Comp = as || "span";
  const classNames = useMemo(
    () =>
      text({
        variant,
        maxLines: mapMaxLines(maxLines),
      }),
    [variant, maxLines],
  );

  return (
    <Comp
      className={clsx(classNames.root, className)}
      style={
        {
          "--seed-max-lines": maxLines,
          "--seed-text-color": handleColor(color),
          "--seed-font-size": handleFontSize(fontSize),
          "--seed-line-height": handleLineHeight(lineHeight ?? fontSize),
          "--seed-font-weight": handleFontWeight(fontWeight),
          ...style,
        } as React.CSSProperties
      }
      {...otherProps}
    >
      {children}
    </Comp>
  );
};
