import {
  segmentedControl as segmentedControlVars,
  segment as segmentVars,
} from "@seed-design/vars/component";
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

      padding: segmentedControlVars.base.enabled.root.padding,

      borderRadius: segmentedControlVars.base.enabled.root.cornerRadius,

      backgroundColor: segmentedControlVars.base.enabled.root.color,

      gridAutoFlow: "column",
      gridAutoColumns: "1fr",

      alignItems: "center",

      isolation: "isolate",
    },
    segment: {
      display: "grid",

      minWidth: segmentVars.base.enabled.root.minWidth,
      height: segmentVars.base.enabled.root.height,

      borderRadius: segmentVars.base.enabled.root.cornerRadius,

      overflow: "hidden",

      userSelect: "none",

      lineHeight: segmentVars.base.enabled.label.lineHeight,

      [pseudo(not(disabled))]: {
        cursor: "pointer",
      },

      [pseudo(not(disabled), active)]: {
        backgroundColor: segmentVars.base.enabledPressed.root.color,
      },

      [pseudo(not(disabled), checked, active)]: {
        backgroundColor: segmentVars.base.enabledSelectedPressed.root.color,
      },
    },
    segmentLabel: {
      gridArea: "1 / 1 / 1 / 1",

      paddingInline: `calc(${segmentVars.base.enabled.root.paddingX} - 1px)`,
      marginBlock: "auto",

      textAlign: "center",
      fontWeight: segmentVars.base.enabled.label.fontWeight,
      fontSize: segmentVars.base.enabled.label.fontSize,

      whiteSpace: "nowrap",

      textOverflow: "ellipsis",
      overflow: "hidden",

      color: segmentVars.base.enabled.label.color,

      [pseudo(checked)]: {
        color: segmentVars.base.enabledSelected.label.color,

        fontWeight: segmentVars.base.enabledSelected.label.fontWeight,
      },

      [pseudo(disabled)]: {
        color: segmentVars.base.disabled.label.color,
      },
    },
    segmentLabelPlaceholder: {
      gridArea: "1 / 1 / 1 / 1",

      paddingInline: segmentVars.base.enabled.root.paddingX,

      textAlign: "center",
      fontWeight: segmentVars.base.enabledSelected.label.fontWeight,
      fontSize: segmentVars.base.enabled.label.fontSize,

      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",

      opacity: 0,
    },
    indicator: {
      position: "absolute",
      insetBlock: segmentedControlVars.base.enabled.root.padding,
      insetInlineStart: segmentedControlVars.base.enabled.root.padding,

      width: `calc((100% - ${segmentedControlVars.base.enabled.root.padding} * 2) / var(--segment-count))`,
      transform: "translateX(calc(var(--segment-index) * 100%))",

      zIndex: -1,

      borderRadius: segmentVars.base.enabled.root.cornerRadius,

      backgroundColor: segmentVars.base.enabledSelected.root.color,

      boxShadow: segmentVars.base.enabledSelected.root.shadow,

      willChange: "transform",
      transition: `transform ${segmentVars.base.enabledSelected.root.transformDuration} ${segmentVars.base.enabledSelected.root.transformTimingFunction}`,
    },
  },
  variants: {},
  defaultVariants: {},
});

export default segmentedControl;
