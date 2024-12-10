import { style } from "@vanilla-extract/css";
import { vars } from "@seed-design/vars";

export const root = style({
  display: "flex",
  flexDirection: "column",
});

export const item = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  paddingInline: vars.$unit.x4,
  minHeight: vars.$unit.x13,

  borderBottom: `1px solid ${vars.$color.stroke.neutral}`,
  ":last-child": {
    borderBottom: "none",
  },

  backgroundColor: vars.$color.bg.layerDefault,
  ":active": {
    backgroundColor: vars.$color.bg.layerDefaultPressed,
  },
});

export const title = style({
  color: vars.$color.fg.neutral,
  fontSize: vars.$fontSize.t5,
  lineHeight: vars.$lineHeight.t5,
  fontWeight: vars.$fontWeight.medium,
});

export const icon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: vars.$color.fg.neutralMuted,
  width: vars.$unit.x4,
  height: vars.$unit.x4,
});
