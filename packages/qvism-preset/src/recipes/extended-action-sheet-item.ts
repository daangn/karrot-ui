import {
  extendedActionSheetItem as vars,
  extendedActionSheet as rootVars,
} from "@seed-design/css/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { active, pseudo } from "../utils/pseudo";
import { prefixIcon } from "../utils/icon";

const extendedActionSheetItem = defineRecipe({
  name: "extended-action-sheet-item",
  slots: ["root"],
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
      boxShadow: `inset 0 calc(-1 * ${rootVars.base.enabled.divider.strokeBottomWidth}) 0 ${rootVars.base.enabled.divider.strokeColor}`,

      fontSize: vars.base.enabled.label.fontSize,
      lineHeight: vars.base.enabled.label.lineHeight,
      fontWeight: vars.base.enabled.label.fontWeight,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
      },
      "&:last-child": {
        boxShadow: "none",
      },

      ...prefixIcon({
        size: vars.base.enabled.prefixIcon.size,
      }),
    },
  },
  variants: {
    tone: {
      neutral: {
        root: {
          color: vars.toneNeutral.enabled.label.color,
          ...prefixIcon({
            color: vars.toneNeutral.enabled.prefixIcon.color,
          }),
        },
      },
      critical: {
        root: {
          color: vars.toneCritical.enabled.label.color,
          ...prefixIcon({
            color: vars.toneCritical.enabled.prefixIcon.color,
          }),
        },
      },
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

export default extendedActionSheetItem;
