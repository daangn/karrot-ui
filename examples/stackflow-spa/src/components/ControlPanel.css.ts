import { $color, $fontSize, $fontWeight, $lineHeight, $unit } from "@seed-design/vars";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,

  backgroundColor: $color.bg.layerDefault,
  borderTop: `1px solid ${$color.stroke.neutral}`,
});

export const item = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  paddingInline: $unit.x4,
  minHeight: $unit.x13,

  borderBottom: `1px solid ${$color.stroke.neutral}`,
});

export const title = style({
  color: $color.fg.neutral,
  fontSize: $fontSize.t5,
  lineHeight: $lineHeight.t5,
  fontWeight: $fontWeight.bold,
});
