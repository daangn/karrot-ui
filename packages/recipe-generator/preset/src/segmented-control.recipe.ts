import { segmentedControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { disabled, active, pseudo, selected } from "./pseudo";

const segmentedControl = defineRecipe({
  name: "segmentedControl",
  slots: [
    "root",
    "rootBeforeMounted",
    "trigger",
    "triggerLabel",
    "triggerLabelPlaceholder",
    "indicator",
  ],
  base: {
    root: {
      display: "grid",

      minWidth: "fit-content",
      maxWidth: "100%",

      padding: vars.base.enabled.root.padding,

      position: "relative",

      borderRadius: vars.base.enabled.root.cornerRadius,

      backgroundColor: vars.base.enabled.root.color,

      gridTemplateColumns: "repeat(var(--seed-design-segmented-control-tab-count, 0), 1fr)",

      // XXX: css reset 생기면 제거
      boxSizing: "border-box",

      ...{
        "--seed-design-segmented-control-current-tab-index": "var(--seed-design-current-tab-index)",
        "--seed-design-segmented-control-indicator-left": "var(--seed-design-tab-indicator-left)",
        "--seed-design-segmented-control-indicator-width": "var(--seed-design-tab-indicator-width)",
        "--seed-design-segmented-control-tab-count": "var(--seed-design-tab-count)",
      },
    },
    rootBeforeMounted: {
      display: "flex",
    },
    trigger: {
      // XXX: css reset 생기면 제거
      border: "none",
      padding: 0,
      backgroundColor: "transparent",
      font: "inherit",
      cursor: "pointer",

      position: "relative",

      minWidth: vars.base.enabled.trigger.minWidth,
      height: vars.base.enabled.trigger.height,

      zIndex: 10,

      borderRadius: vars.base.enabled.trigger.cornerRadius,

      overflow: "hidden",

      userSelect: "none",

      lineHeight: vars.base.enabled.trigger.lineHeight,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.trigger.color,
      },

      [pseudo(selected, active)]: {
        backgroundColor: vars.base.selectedPressed.trigger.color,
      },
    },
    triggerLabel: {
      position: "absolute",
      insetInline: 0,
      transform: "translateY(-50%)",
      insetBlockStart: "50%",

      paddingInline: `calc(${vars.base.enabled.trigger.paddingX} - 1px)`,

      textAlign: "center",
      fontWeight: vars.base.enabled.trigger.fontWeight,
      fontSize: vars.base.enabled.trigger.fontSize,

      whiteSpace: "nowrap",

      textOverflow: "ellipsis",
      overflow: "hidden",

      color: vars.base.enabled.trigger.color,

      [pseudo(selected)]: {
        color: vars.base.selected.trigger.color,

        fontWeight: vars.base.selected.trigger.fontWeight,
      },

      [pseudo(disabled)]: {
        color: vars.base.disabled.trigger.color,
      },
    },
    triggerLabelPlaceholder: {
      paddingInline: vars.base.enabled.trigger.paddingX,

      textAlign: "center",
      fontWeight: vars.base.selected.trigger.fontWeight,
      fontSize: vars.base.enabled.trigger.fontSize,

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

      willChange: "left",
      // XXX: 임의
      transition: "left 0.2s",

      left: "var(--seed-design-segmented-control-indicator-left, 0px)",
      width: "var(--seed-design-segmented-control-indicator-width, 0px)",
    },
  },
  variants: {},
});

export default segmentedControl;
