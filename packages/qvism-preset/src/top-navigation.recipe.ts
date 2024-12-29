import { topNavigation as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const MIN_SAFE_AREA_INSET_TOP = "0px"; // TODO: turn into public interface
const COLOR_TRANSITION_DURATION = "0s";

const topNavigation = defineRecipe({
  name: "topNavigation",
  slots: [
    "root",
    "safeArea",
    "container",
    "left",
    "right",
    "title",
    "titleMain",
    "titleEdge",
    "titleText",
    "iconButton",
    "icon",
  ],
  base: {
    root: {
      zIndex: "var(--z-index-app-bar)",

      position: "absolute",
      boxSizing: "content-box",
      width: "100%",
      // TODO: do we need to set overflow?

      "&[data-transition-state=exit-active]": {
        transform: "translate3d(100%, 0, 0)",
        transition: `background-color ${COLOR_TRANSITION_DURATION}, box-shadow ${COLOR_TRANSITION_DURATION}, transform 0s`,
      },
    },
    safeArea: {
      height: `max(${MIN_SAFE_AREA_INSET_TOP}, env(safe-area-inset-top))`,
    },
    container: {
      display: "flex",
      alignItems: "flex-end",
      // TODO: do we need to set overflow?
      // TODO: add heightTransitionDuration
    },
    left: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
    right: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      marginLeft: "auto",
    },
    iconButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      display: "inline-block",
      flexShrink: 0,
    },
    title: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      height: "100%",
    },
    titleMain: {
      // width is calculated in js
      // TODO: add heightTransitionDuration
      transition: `color ${COLOR_TRANSITION_DURATION}`,
    },
    titleEdge: {
      appearance: "none",
      border: 0,
      padding: 0,
      background: "none",
      position: "absolute",
      top: 0,
      cursor: "pointer",
      left: "50%",
      height: "20px",
      transform: "translate(-50%)",
      maxWidth: "5rem",
      display: "none",
    },
    titleText: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
    },
  },
  variants: {
    theme: {
      cupertino: {
        container: {
          height: vars.themeCupertino.enabled.root.minHeight,
          paddingInline: vars.themeCupertino.enabled.root.paddingX,
          '[data-stackflow-activity-is-active="false"] &': {
            opacity: "calc(pow(var(--stackflow-swipe-back-ratio, 1), 2))",
          },
          '[data-stackflow-activity-is-active="true"] &': {
            opacity: "calc(1 - pow(var(--stackflow-swipe-back-ratio, 0), 2))",
          },
        },
        iconButton: {
          width: vars.themeCupertino.enabled.icon.targetSize,
          height: vars.themeCupertino.enabled.icon.targetSize,

          "&:first-child": {
            marginLeft: `calc(-1 * (${vars.themeCupertino.enabled.icon.targetSize} - ${vars.themeCupertino.enabled.icon.size}) / 2)`,
          },
          "&:last-child": {
            marginRight: `calc(-1 * (${vars.themeCupertino.enabled.icon.targetSize} - ${vars.themeCupertino.enabled.icon.size}) / 2)`,
          },
        },
        icon: {
          width: vars.themeCupertino.enabled.icon.size,
          height: vars.themeCupertino.enabled.icon.size,
          '[data-stackflow-activity-is-active="true"] &[data-transition-state="enter-active"]': {
            opacity: 1,
          },
          '[data-stackflow-activity-is-active="true"] &[data-transition-state="enter-done"]': {
            opacity: 1,
          },
        },
        titleMain: {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100%",
          left: "50%",
          transform: "translate(-50%)",
          top: `max(${MIN_SAFE_AREA_INSET_TOP}, env(safe-area-inset-top))`,
        },
        titleText: {
          fontSize: vars.themeCupertino.enabled.title.fontSize,
          fontWeight: vars.themeCupertino.enabled.title.fontWeight,
        },
        titleEdge: {
          display: "block",
        },
      },
      android: {
        root: {
          opacity: 0,
          transform: "translate3d(0, 160px, 0)",
          transition: `background-color ${COLOR_TRANSITION_DURATION}, box-shadow ${COLOR_TRANSITION_DURATION}, transform 300ms`, // TODO: define duration in rootage

          "&:is([data-transition-state=enter-active], [data-transition-state=enter-done])": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        container: {
          height: vars.themeAndroid.enabled.root.minHeight,
          paddingInline: vars.themeAndroid.enabled.root.paddingX,
        },
        iconButton: {
          width: vars.themeAndroid.enabled.icon.targetSize,
          height: vars.themeAndroid.enabled.icon.targetSize,

          "&:first-child": {
            marginLeft: `calc(-1 * (${vars.themeAndroid.enabled.icon.targetSize} - ${vars.themeAndroid.enabled.icon.size}) / 2)`,
          },
          "&:last-child": {
            marginRight: `calc(-1 * (${vars.themeAndroid.enabled.icon.targetSize} - ${vars.themeAndroid.enabled.icon.size}) / 2)`,
          },
        },
        icon: {
          width: vars.themeAndroid.enabled.icon.size,
          height: vars.themeAndroid.enabled.icon.size,
        },
        titleMain: {
          width: "100%",
          justifyContent: "flex-start",
          paddingLeft: "16px",
          boxSizing: "border-box",
        },
        titleText: {
          fontSize: vars.themeAndroid.enabled.title.fontSize,
          fontWeight: vars.themeAndroid.enabled.title.fontWeight,
        },
      },
    },
    tone: {
      layer: {
        root: {
          backgroundColor: vars.toneLayer.enabled.root.color,
        },
        icon: {
          color: vars.toneLayer.enabled.icon.color,
        },
        titleMain: {
          color: vars.toneLayer.enabled.title.color,
        },
      },
      transparent: {
        root: {
          backgroundColor: vars.toneTransparent.enabled.root.color,
        },
        icon: {
          color: vars.toneTransparent.enabled.icon.color,
        },
        titleMain: {
          color: vars.toneTransparent.enabled.title.color,
        },
      },
    },
    border: {
      true: {
        root: {
          boxShadow: `inset 0px calc(-1 * ${vars.dividerTrue.enabled.root.strokeWidth}) 0 ${vars.dividerTrue.enabled.root.strokeColor}`,
        },
      },
    },
  },
});

export default topNavigation;
