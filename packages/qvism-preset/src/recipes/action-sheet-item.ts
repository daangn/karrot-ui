import { actionSheetItem as vars, actionSheet as rootVars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { active, pseudo } from "../utils/pseudo";

const actionSheetItem = defineRecipe({
  name: "actionSheetItem",
  slots: ["root", "label"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",

      backgroundColor: vars.base.enabled.root.color,
      minHeight: vars.base.enabled.root.minHeight,
      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
      },

      "&:after": {
        content: "''",
        display: "block",
        position: "absolute",
        left: rootVars.base.enabled.divider.marginX,
        right: rootVars.base.enabled.divider.marginX,
        bottom: 0,
        height: rootVars.base.enabled.divider.strokeWidth,
        background: rootVars.base.enabled.divider.strokeColor,
      },
    },
    label: {
      fontSize: vars.base.enabled.label.fontSize,
      lineHeight: vars.base.enabled.label.lineHeight,
      fontWeight: vars.base.enabled.label.fontWeight,
    },
  },
  variants: {
    tone: {
      neutral: {
        label: {
          color: vars.toneNeutral.enabled.label.color,
        },
      },
      danger: {
        label: {
          color: vars.toneDanger.enabled.label.color,
        },
      },
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

export default actionSheetItem;
