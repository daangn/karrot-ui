import { actionSheetItem as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { active, pseudo } from "../utils/pseudo";

const actionSheetItem = defineRecipe({
  name: "actionSheetItem",
  slots: ["root", "prefixIcon", "label"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",

      backgroundColor: vars.base.enabled.root.color,
      minHeight: vars.base.enabled.root.minHeight,
      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,
      gap: vars.base.enabled.root.gap,
      boxShadow: `inset 0 calc(-1 * ${vars.base.enabled.root.strokeBottomWidth}) 0 ${vars.base.enabled.root.strokeColor}`,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
      },
    },
    label: {
      fontSize: vars.base.enabled.label.fontSize,
      lineHeight: vars.base.enabled.label.lineHeight,
      fontWeight: vars.base.enabled.label.fontWeight,
    },
    prefixIcon: {
      display: "inline-flex",
      flexShrink: 0,

      width: vars.base.enabled.prefixIcon.size,
      height: vars.base.enabled.prefixIcon.size,
    },
  },
  variants: {
    tone: {
      neutral: {
        label: {
          color: vars.toneNeutral.enabled.label.color,
        },
        prefixIcon: {
          color: vars.toneNeutral.enabled.prefixIcon.color,
        },
      },
      danger: {
        label: {
          color: vars.toneDanger.enabled.label.color,
        },
        prefixIcon: {
          color: vars.toneDanger.enabled.prefixIcon.color,
        },
      },
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

export default actionSheetItem;
