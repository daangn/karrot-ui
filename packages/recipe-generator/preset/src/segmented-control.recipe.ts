import { segmentedControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { disabled, active, pseudo, checked } from "./pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: ["root", "option", "indicator"],
  base: {
    root: {
      position: "relative",

      display: "flex",

      borderRadius: vars.base.enabled.root.cornerRadius,

      padding: vars.base.enabled.root.padding,

      backgroundColor: vars.base.enabled.root.color,
    },
    option: {
      borderRadius: vars.base.enabled.option.cornerRadius,

      paddingInline: vars.base.enabled.option.paddingX,
      paddingBlock: vars.base.enabled.option.paddingY,

      fontSize: vars.base.enabled.option.fontSize,
      fontWeight: vars.base.enabled.option.fontWeight,

      color: vars.base.enabled.option.color,

      zIndex: "10",

      [pseudo(checked)]: {
        color: vars.base.selected.option.color,

        fontWeight: vars.base.selected.option.fontWeight,
      },

      [pseudo(disabled)]: {
        color: vars.base.disabled.option.color,
      },
    },
    indicator: {
      position: "absolute",
      insetBlock: vars.base.enabled.root.padding,

      borderRadius: vars.base.enabled.indicator.cornerRadius,

      backgroundColor: vars.base.enabled.indicator.color,

      boxShadow: vars.base.enabled.indicator.dropShadow,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.indicator.color,
      },

      [pseudo(checked, active)]: {
        backgroundColor: vars.base.selectedPressed.indicator.color,
      },
    },
  },
  variants: {},
});

export default segmentedControl;
