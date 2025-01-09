import { segmentedControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { disabled, active, pseudo, checked, not } from "../utils/pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: ["root", "segment", "segmentLabel", "segmentLabelPlaceholder", "indicator"],
  base: {
    root: {
      display: "grid",

      minWidth: "fit-content",
      maxWidth: "100%",

      padding: vars.base.enabled.root.padding,

      position: "relative",

      borderRadius: vars.base.enabled.root.cornerRadius,

      backgroundColor: vars.base.enabled.root.color,

      gridTemplateColumns: "repeat(var(--seed-design-segmented-control-count, 0), 1fr)",

      // XXX: css reset 생기면 제거
      boxSizing: "border-box",
    },
    segment: {
      // XXX: css reset 생기면 제거
      border: "none",
      padding: 0,
      backgroundColor: "transparent",
      font: "inherit",
      [pseudo(not(disabled))]: {
        cursor: "pointer",
      },

      position: "relative",

      minWidth: vars.base.enabled.segment.minWidth,
      height: vars.base.enabled.segment.height,

      zIndex: 10,

      borderRadius: vars.base.enabled.segment.cornerRadius,

      overflow: "hidden",

      userSelect: "none",

      lineHeight: vars.base.enabled.segment.lineHeight,

      [pseudo(not(disabled), active)]: {
        backgroundColor: vars.base.enabledPressed.segment.color,
      },

      [pseudo(not(disabled), checked, active)]: {
        backgroundColor: vars.base.enabledSelectedPressed.indicator.color,
      },
    },
    segmentLabel: {
      position: "absolute",
      insetInline: 0,
      transform: "translateY(-50%)",
      insetBlockStart: "50%",

      paddingInline: `calc(${vars.base.enabled.segment.paddingX} - 1px)`,

      textAlign: "center",
      fontWeight: vars.base.enabled.segment.fontWeight,
      fontSize: vars.base.enabled.segment.fontSize,

      whiteSpace: "nowrap",

      textOverflow: "ellipsis",
      overflow: "hidden",

      color: vars.base.enabled.segment.color,

      [pseudo(checked)]: {
        color: vars.base.enabledSelected.segment.color,

        fontWeight: vars.base.selected.segment.fontWeight,
      },

      [pseudo(disabled)]: {
        color: vars.base.disabled.segment.color,
      },
    },
    segmentLabelPlaceholder: {
      paddingInline: vars.base.enabled.segment.paddingX,

      textAlign: "center",
      fontWeight: vars.base.selected.segment.fontWeight,
      fontSize: vars.base.enabled.segment.fontSize,

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

      boxShadow: vars.base.enabled.indicator.shadow,

      willChange: "transform",
      transition: `transform ${vars.base.enabled.indicator.transformDuration} ${vars.base.enabled.indicator.transformTimingFunction}`,
    },
  },
  variants: {},
  defaultVariants: {},
});

export default segmentedControl;
