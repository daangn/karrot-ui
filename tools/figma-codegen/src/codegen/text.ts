import { getTypographyVariableName } from "./variable";

export async function createTextProps(
  segmentBoundVariables: ReturnType<TextNode["getStyledTextSegments"]>[number]["boundVariables"],
) {
  const fontSizeBoundVariables = segmentBoundVariables?.fontSize;
  const fontStyleBoundVariables = segmentBoundVariables?.fontStyle;
  const lineHeightBoundVariables = segmentBoundVariables?.lineHeight;

  return {
    fontSize: fontSizeBoundVariables
      ? await getTypographyVariableName(fontSizeBoundVariables.id)
      : null,
    fontWeight: fontStyleBoundVariables
      ? await getTypographyVariableName(fontStyleBoundVariables.id)
      : null,
    lineHeight: lineHeightBoundVariables
      ? await getTypographyVariableName(lineHeightBoundVariables.id)
      : null,
  };
}
