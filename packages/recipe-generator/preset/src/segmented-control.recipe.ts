import { segmentedControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { disabled, active, pseudo, selected } from "./pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: ["root", "option", "optionLabel", "optionLabelPlaceholder", "indicator"],
  base: {
    root: {
      display: "grid",

      height: vars.base.enabled.root.height,
      minWidth: "fit-content",
      maxWidth: "100%",

      padding: vars.base.enabled.root.padding,

      position: "relative",

      borderRadius: vars.base.enabled.root.cornerRadius,

      backgroundColor: vars.base.enabled.root.color,

      // XXX: css reset 생기면 제거
      boxSizing: "border-box",
    },
    option: {
      minWidth: vars.base.enabled.option.minWidth,

      zIndex: 10,

      borderRadius: vars.base.enabled.option.cornerRadius,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.option.color,
      },

      [pseudo(selected, active)]: {
        backgroundColor: vars.base.selectedPressed.option.color,
      },
    },
    optionLabel: {
      position: "absolute",
      inset: 0,

      paddingInline: vars.base.enabled.option.paddingX,
      paddingBlock: vars.base.enabled.option.paddingY,

      fontSize: vars.base.enabled.option.fontSize,
      lineHeight: "1.3125rem",
      textAlign: "center",
      fontWeight: vars.base.enabled.option.fontWeight,

      textOverflow: "ellipsis",
      overflowX: "hidden",

      color: vars.base.enabled.option.color,

      [pseudo(selected)]: {
        color: vars.base.selected.option.color,

        fontWeight: vars.base.selected.option.fontWeight,
      },

      [pseudo(disabled)]: {
        color: vars.base.disabled.option.color,
      },
    },
    optionLabelPlaceholder: {
      paddingInline: vars.base.enabled.option.paddingX,
      paddingBlock: vars.base.enabled.option.paddingY,

      fontSize: vars.base.enabled.option.fontSize,
      lineHeight: "1.3125rem",
      textAlign: "center",
      fontWeight: vars.base.selected.option.fontWeight,

      textOverflow: "ellipsis",
      overflowX: "hidden",

      opacity: 0,
    },
    indicator: {
      position: "absolute",
      insetBlock: vars.base.enabled.root.padding,

      borderRadius: vars.base.enabled.indicator.cornerRadius,

      backgroundColor: vars.base.enabled.indicator.color,

      boxShadow: vars.base.enabled.indicator.dropShadow,

      willChange: "left, width",
      // XXX: 임의
      transition: "left 0.2s, width 0.2s",
    },
  },
  variants: {},
});

export default segmentedControl;
