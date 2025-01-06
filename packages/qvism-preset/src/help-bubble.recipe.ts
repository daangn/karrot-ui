import { helpBubble as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { hidden, pseudo } from "./pseudo";

const helpBubble = defineRecipe({
  name: "helpBubble",
  slots: [
    "positioner",
    "backdrop",
    "content",
    "arrow",
    "title",
    "description",
    "closeButton",
    "closeIcon",
  ],
  base: {
    backdrop: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,

      width: "100vw",
      height: "100vh",

      background: vars.base.enabled.backdrop.color,

      [pseudo(hidden)]: {
        display: "none !important",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      background: vars.base.enabled.root.color,
      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,
      borderRadius: vars.base.enabled.root.cornerRadius,
      wordBreak: "keep-all",

      [pseudo(hidden)]: {
        display: "none !important",
      },
    },
    arrow: {
      fill: vars.base.enabled.arrow.color,
      width: "10px",
      height: "6px",
    },
    title: {
      color: vars.base.enabled.title.color,
      fontSize: vars.base.enabled.title.fontSize,
      fontWeight: vars.base.enabled.title.fontWeight,
    },
    description: {
      color: vars.base.enabled.description.color,
      fontSize: vars.base.enabled.description.fontSize,
      fontWeight: vars.base.enabled.description.fontWeight,
    },
    closeButton: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      top: vars.base.enabled.closeButton.fromTop,
      right: vars.base.enabled.closeButton.fromRight,
      color: vars.base.enabled.closeButton.color,
      width: vars.base.enabled.closeButton.targetSize,
      height: vars.base.enabled.closeButton.targetSize,
    },
    closeIcon: {
      width: vars.base.enabled.closeButton.size,
      height: vars.base.enabled.closeButton.size,
    },
  },
  variants: {},
  defaultVariants: {},
});

export default helpBubble;
