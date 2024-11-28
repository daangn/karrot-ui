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
      // XXX: css reset 생기면 제거
      border: "none",
      padding: 0,
      backgroundColor: "transparent",
      font: "inherit",

      position: "relative",

      minWidth: vars.base.enabled.option.minWidth,

      zIndex: 10,

      borderRadius: vars.base.enabled.option.cornerRadius,

      overflow: "hidden",

      userSelect: "none",

      lineHeight: vars.base.enabled.option.lineHeight,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.option.color,
      },

      [pseudo(selected, active)]: {
        backgroundColor: vars.base.selectedPressed.option.color,
      },
    },
    optionLabel: {
      position: "absolute",
      insetInline: 0,
      transform: "translateY(-50%)",
      insetBlockStart: "50%",

      paddingInline: `calc(${vars.base.enabled.option.paddingX} - 1px)`,

      textAlign: "center",
      fontWeight: vars.base.enabled.option.fontWeight,
      fontSize: vars.base.enabled.option.fontSize,

      whiteSpace: "nowrap",

      textOverflow: "ellipsis",
      overflow: "hidden",

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

      textAlign: "center",
      fontWeight: vars.base.selected.option.fontWeight,
      fontSize: vars.base.enabled.option.fontSize,

      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",

      opacity: 0,
    },
    indicator: {
      position: "absolute",
      insetBlock: vars.base.enabled.root.padding,

      borderRadius: vars.base.enabled.indicator.cornerRadius,

      backgroundColor: vars.base.enabled.indicator.color,

      // XXX: token으로 교체
      boxShadow: "0 1px 6px rgba(0, 0, 0, 5%)",

      willChange: "left, width",
      // XXX: 임의
      transition: "left 0.2s, width 0.2s",
    },
  },
  variants: {},
});

export default segmentedControl;
