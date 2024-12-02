import { style } from "@vanilla-extract/css";
import { $color, $fontSize, $fontWeight, $lineHeight, $unit } from "@seed-design/vars";

export const root = style({
  display: "flex",
  flexDirection: "column",
});

export const item = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  paddingInline: $unit.x4,
  minHeight: $unit.x13,

  borderBottom: `1px solid ${$color.stroke.neutral}`,
  ":last-child": {
    borderBottom: "none",
  },

  backgroundColor: $color.bg.layerDefault,
  ":active": {
    backgroundColor: $color.bg.layerDefaultPressed,
  },
});

export const title = style({
  color: $color.fg.neutral,
  fontSize: $fontSize.t5,
  lineHeight: $lineHeight.t5,
  fontWeight: $fontWeight.medium,
});

export const icon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: $color.fg.neutralMuted,
  width: $unit.x4,
  height: $unit.x4,
});
