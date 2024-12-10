import { vars } from "@seed-design/vars";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "grid",
  alignItems: "start",
  justifyContent: "center",
  justifyItems: "start",

  paddingBlock: vars.$unit.x4,
  paddingInline: vars.$unit.x4,
  gap: vars.$unit.x4,

  transformOrigin: "top left",
});

export const grid = style({
  backgroundSize: "64px 64px, 64px 64px, 16px 16px, 16px 16px",
  backgroundPosition: "16px 16px, 16px 16px, 16px 16px, 16px 16px",
  backgroundBlendMode: "difference",
  backgroundImage: [
    "linear-gradient(rgba(130, 130, 130, 0.5) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(130, 130, 130, 0.5) 1px, transparent 1px)",
    "linear-gradient(rgba(130, 130, 130, 0.25) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(130, 130, 130, 0.25) 1px, transparent 1px)",
  ].join(", "),
});
