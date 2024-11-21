import { segmentedControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { disabled, active, pseudo, selected } from "./pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: ["root", "option", "indicator"],
  base: {
    root: {
      position: "relative",

      display: "flex",

      height: vars.base.enabled.root.height,

      borderRadius: vars.base.enabled.root.cornerRadius,

      padding: vars.base.enabled.root.padding,

      backgroundColor: vars.base.enabled.root.color,

      minWidth: "min-content",
    },
    option: {
      flexGrow: "1",

      borderRadius: vars.base.enabled.option.cornerRadius,

      paddingInline: vars.base.enabled.option.paddingX,
      paddingBlock: vars.base.enabled.option.paddingY,

      minWidth: vars.base.enabled.option.minWidth,

      fontSize: vars.base.enabled.option.fontSize,
      fontWeight: vars.base.enabled.option.fontWeight,
      lineHeight: "1.3125rem",

      color: vars.base.enabled.option.color,

      zIndex: "10",

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.option.color,
      },

      [pseudo(selected)]: {
        color: vars.base.selected.option.color,

        fontWeight: vars.base.selected.option.fontWeight,
      },

      [pseudo(selected, active)]: {
        backgroundColor: vars.base.selectedPressed.option.color,
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
    },
  },
  variants: {},
});

export default segmentedControl;
