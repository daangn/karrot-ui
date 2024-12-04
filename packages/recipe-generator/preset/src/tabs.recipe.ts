import { tablist as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const tabs = defineRecipe({
  name: "tabs",
  slots: ["root", "triggerList", "contentList", "contentCamera", "content", "indicator"],
  base: {
    root: {
      overflow: "hidden",
    },
    triggerList: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "stretch",
      alignContent: "stretch",

      overflowX: "auto",
      msOverflowStyle: "none",
      scrollbarWidth: "none",

      background: vars.base.enabled.root.color,
      borderBottom: `${vars.base.enabled.root.strokeBottomWidth} solid ${vars.base.enabled.root.strokeColor}`,

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    contentList: {
      width: "100%",
    },
    contentCamera: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    content: {
      width: "100%",
      height: "100%",
      flexShrink: 0,
      overflowY: "auto",
    },
    indicator: {
      position: "absolute",
      willChange: "left, width",
      transition:
        "left 0.2s cubic-bezier(0.15, 0.3, 0.25, 1), width 0.2s cubic-bezier(0.15, 0.3, 0.25, 1)",
      left: "var(--seed-design-tabs-indicator-left, 0px)",
      width: "var(--seed-design-tabs-indicator-width, 0px)",
      color: vars.base.enabled.indicator.color,
      borderBottom: `${vars.base.enabled.indicator.height} solid ${vars.base.enabled.indicator.color}`,
      bottom: 0,
    },
  },
  variants: {
    layout: {
      fill: {
        triggerList: {
          padding: `0px ${vars.layoutFill.enabled.root.paddingX}`,
          justifyContent: "space-around",
        },
        indicator: {
          left: "calc(var(--seed-design-tabs-indicator-left, 0px) + 16px)",
          width: "calc(var(--seed-design-tabs-indicator-width, 0px) - 32px)",
        },
      },
      hug: {
        triggerList: {
          padding: `0px ${vars.layoutHug.enabled.root.paddingX}`,
          justifyContent: "flex-start",
        },
        indicator: {
          left: "calc(var(--seed-design-tabs-indicator-left, 0px))",
          width: "calc(var(--seed-design-tabs-indicator-width, 0px))",
        },
      },
    },
    size: {
      small: {
        root: {
          "--seed-design-tabs-trigger-list-height": vars.sizeSmall.enabled.root.height,
        },
        triggerList: {
          height: vars.sizeSmall.enabled.root.height,
        },
      },
      medium: {
        root: {
          "--seed-design-tabs-trigger-list-height": vars.sizeMedium.enabled.root.height,
        },
        triggerList: {
          height: vars.sizeMedium.enabled.root.height,
        },
      },
    },
    fixTriggerList: {
      true: {
        root: {
          position: "relative",
        },
        triggerList: {
          position: "sticky",
          top: 0,
        },
        contentList: {
          height: "calc(100% - var(--seed-design-tabs-trigger-list-height))",
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    layout: "hug",
    size: "small",
    fixTriggerList: false,
  },
});

export default tabs;
