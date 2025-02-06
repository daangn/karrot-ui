import {
  segmentedControlItem as itemVars,
  segmentedControl as vars,
} from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { active, checked, disabled, not, pseudo } from "../utils/pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: ["root", "indicator", "item", "itemLabel"],
  base: {
    root: {
      display: "grid",
      boxSizing: "border-box",
      minWidth: "fit-content",
      maxWidth: "100%",

      position: "relative",

      padding: vars.base.enabled.root.padding,

      borderRadius: vars.base.enabled.root.cornerRadius,

      backgroundColor: vars.base.enabled.root.color,

      gridAutoFlow: "column",
      gridAutoColumns: "1fr",

      alignItems: "center",

      isolation: "isolate",
    },
    indicator: {
      position: "absolute",
      zIndex: -1,
      willChange: "transform",
      transform: "translateX(calc(var(--segment-index) * 100%))",

      insetBlock: vars.base.enabled.root.padding,
      insetInlineStart: vars.base.enabled.root.padding,
      width: `calc((100% - ${vars.base.enabled.root.padding} * 2) / var(--segment-count))`,

      borderRadius: vars.base.enabled.indicator.cornerRadius,
      backgroundColor: vars.base.enabled.indicator.color,
      boxShadow: vars.base.enabled.indicator.shadow,
      transition: `transform ${vars.base.enabled.indicator.transformDuration} ${vars.base.enabled.indicator.transformTimingFunction}`,
    },
    item: {
      display: "grid",
      cursor: "pointer",

      minWidth: itemVars.base.enabled.root.minWidth,
      height: itemVars.base.enabled.root.height,

      borderRadius: itemVars.base.enabled.root.cornerRadius,

      overflow: "hidden",

      userSelect: "none",

      lineHeight: itemVars.base.enabled.label.lineHeight,

      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },

      [pseudo(not(checked), active)]: {
        backgroundColor: itemVars.base.pressed.root.color,
      },
    },
    itemLabel: {
      gridArea: "1 / 1 / 1 / 1",

      paddingInline: `calc(${itemVars.base.enabled.root.paddingX} - 1px)`,
      marginBlock: "auto",

      textAlign: "center",
      fontWeight: itemVars.base.enabled.label.fontWeight,
      fontSize: itemVars.base.enabled.label.fontSize,

      whiteSpace: "nowrap",

      textOverflow: "ellipsis",
      overflow: "hidden",

      color: itemVars.base.enabled.label.color,

      [pseudo(checked)]: {
        color: itemVars.base.selected.label.color,

        fontWeight: itemVars.base.selected.label.fontWeight,
      },

      [pseudo(disabled)]: {
        color: itemVars.base.disabled.label.color,
      },
    },
  },
  variants: {},
  defaultVariants: {},
});

export default segmentedControl;
