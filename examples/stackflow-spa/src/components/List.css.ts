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

  paddingInline: vars.$dimension.s4,
  minHeight: vars.$dimension.s13,

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
  fontSize: vars.$fontSize.s5,
  lineHeight: vars.$lineHeight.s5,
  fontWeight: vars.$fontWeight.regular,
});

export const icon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: vars.$color.fg.neutralMuted,
  width: vars.$dimension.s4,
  height: vars.$dimension.s4,
});

export const listItemGroup = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${vars.$color.stroke.neutral}`,

  marginTop: vars.$dimension.s6,
  fontWeight: vars.$fontWeight.bold,
});

export const listItemGroupTitle = style({
  color: vars.$color.fg.neutral,
  fontSize: vars.$fontSize.s4,
  lineHeight: vars.$lineHeight.s5,

  paddingInline: vars.$dimension.s4,
  marginBottom: vars.$dimension.s1,
});
