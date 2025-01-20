import { getTypographyVariableName } from "./variable";

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
