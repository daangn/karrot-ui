import { getTypographyVariableName } from "./variable";

export function getTextStyleTag(textStyle: TextStyle) {
  if (textStyle.name.startsWith("heading")) return "h1";
  if (textStyle.name.startsWith("title")) return "h2";
  if (textStyle.name.startsWith("body")) return "p";
  if (textStyle.name.startsWith("label")) return "span";

  return "span";
}

export function createTextProps(
  segmentBoundVariables: ReturnType<TextNode["getStyledTextSegments"]>[number]["boundVariables"],
) {
  const fontSizeBoundVariables = segmentBoundVariables?.fontSize;
  const fontStyleBoundVariables = segmentBoundVariables?.fontStyle;
  const lineHeightBoundVariables = segmentBoundVariables?.lineHeight;

  return {
    fontSize: fontSizeBoundVariables ? getTypographyVariableName(fontSizeBoundVariables.id) : null,
    fontWeight: fontStyleBoundVariables
      ? getTypographyVariableName(fontStyleBoundVariables.id)
      : null,
    lineHeight: lineHeightBoundVariables
      ? getTypographyVariableName(lineHeightBoundVariables.id)
      : null,
  };
}
