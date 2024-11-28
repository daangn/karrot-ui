import { segmentedControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { disabled, active, pseudo, selected } from "./pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: ["root", "segment", "segmentLabel", "segmentLabelPlaceholder", "selectedIndicator"],
  base: {
    root: {
      display: "grid",

      minWidth: "fit-content",
      maxWidth: "100%",

      padding: vars.base.enabled.root.padding,

      position: "relative",

      borderRadius: vars.base.enabled.root.cornerRadius,

      backgroundColor: vars.base.enabled.root.color,

      // XXX: css reset 생기면 제거
      boxSizing: "border-box",
    },
    segment: {
      // XXX: css reset 생기면 제거
      border: "none",
      padding: 0,
      backgroundColor: "transparent",
      font: "inherit",
      cursor: "pointer",

      position: "relative",

      minWidth: vars.base.enabled.segment.minWidth,
      height: vars.base.enabled.segment.height,

      zIndex: 10,

      borderRadius: vars.base.enabled.segment.cornerRadius,

      overflow: "hidden",

      userSelect: "none",

      lineHeight: vars.base.enabled.segment.lineHeight,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.segment.color,
      },

      [pseudo(selected, active)]: {
        backgroundColor: vars.base.selectedPressed.segment.color,
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

      [pseudo(selected)]: {
        color: vars.base.selected.segment.color,

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
    selectedIndicator: {
      position: "absolute",
      insetBlock: vars.base.enabled.root.padding,

      borderRadius: vars.base.enabled.selectedIndicator.cornerRadius,

      backgroundColor: vars.base.enabled.selectedIndicator.color,

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
