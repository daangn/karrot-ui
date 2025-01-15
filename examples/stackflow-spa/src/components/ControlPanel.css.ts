import { vars } from "@seed-design/vars";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,

  backgroundColor: vars.$color.bg.layerDefault,
  borderTop: `1px solid ${vars.$color.stroke.neutral}`,
});

export const item = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  paddingInline: vars.$dimension.s4,
  minHeight: vars.$dimension.s13,

  borderBottom: `1px solid ${vars.$color.stroke.neutral}`,
});

export const title = style({
  color: vars.$color.fg.neutral,
  fontSize: vars.$fontSize.s5,
  lineHeight: vars.$lineHeight.s5,
  fontWeight: vars.$fontWeight.bold,
});
