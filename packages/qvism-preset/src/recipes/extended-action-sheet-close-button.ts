import { extendedActionSheetCloseButton as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { active, pseudo } from "../utils/pseudo";

const extendedActionSheetCloseButton = defineRecipe({
  name: "extended-action-sheet-close-button",
  slots: ["root", "label"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      backgroundColor: vars.base.enabled.root.color,
      minHeight: vars.base.enabled.root.minHeight,
      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,
      borderRadius: vars.base.enabled.root.cornerRadius,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
      },
    },
    label: {
      color: vars.base.enabled.label.color,
      fontSize: vars.base.enabled.label.fontSize,
      lineHeight: vars.base.enabled.label.lineHeight,
      fontWeight: vars.base.enabled.label.fontWeight,
    },
  },
  variants: {},
  defaultVariants: {},
});

export default extendedActionSheetCloseButton;
