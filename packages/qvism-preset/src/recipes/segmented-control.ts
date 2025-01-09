import { segmentedControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { disabled, active, pseudo, checked, not } from "../utils/pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: ["root", "segment", "segmentLabel", "segmentLabelPlaceholder", "indicator"],
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
    segment: {
      display: "grid",

      minWidth: vars.base.enabled.segment.minWidth,
      height: vars.base.enabled.segment.height,

      borderRadius: vars.base.enabled.segment.cornerRadius,

      overflow: "hidden",

      userSelect: "none",

      lineHeight: vars.base.enabled.segment.lineHeight,

      [pseudo(not(disabled))]: {
        cursor: "pointer",
      },

      [pseudo(not(disabled), active)]: {
        backgroundColor: vars.base.enabledPressed.segment.color,
      },

      [pseudo(not(disabled), checked, active)]: {
        backgroundColor: vars.base.enabledSelectedPressed.indicator.color,
      },
    },
    segmentLabel: {
      gridArea: "1 / 1 / 1 / 1",

      paddingInline: `calc(${vars.base.enabled.segment.paddingX} - 1px)`,
      marginBlock: "auto",

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
      gridArea: "1 / 1 / 1 / 1",

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
      insetInlineStart: vars.base.enabled.root.padding,

      width: `calc((100% - ${vars.base.enabled.root.padding} * 2) / var(--seed-design-segmented-control-segment-count))`,
      transform:
        "translateX(calc(var(--seed-design-segmented-control-current-segment-index) * 100%))",

      zIndex: -1,

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
