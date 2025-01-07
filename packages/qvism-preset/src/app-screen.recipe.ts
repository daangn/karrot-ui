import { vars } from "@seed-design/vars";
import { topNavigation as navVars } from "@seed-design/vars/component";
import { defineRecipe, enterAnimation, exitAnimation } from "./helper";

const MIN_SAFE_AREA_INSET_TOP = "0px"; // TODO: turn into public interface

const TransitionIOS = {
  duration: "300ms",
  timingFunction: "cubic-bezier(0.22, 0.1, 0.3, 0.85)", // approximates iOS spring animation
};

const FadeInFromBottomAndroid = {
  duration: "300ms", // actually 350ms, but currently stackflow does not allow duration per activity.
  timingFunction: "cubic-bezier(0.23, 0.1, 0.32, 1)", // approximates Easing.out(Easing.poly(5)), https://api.flutter.dev/flutter/animation/Curves/easeOutQuint-constant.html
};

const FadeOutToBottomAndroid = {
  duration: "300ms", // actually 150ms, but currently stackflow does not allow duration per activity.
  timingFunction: "linear",
};

const transform = ({
  translateX = "0",
  translateY = "0",
}: {
  translateX?: string;
  translateY?: string;
}) => `translate3d(${translateX}, ${translateY}, 0)`;

const push = "[data-global-transition-state=enter-active] &[data-activity-is-top]";
const pop = "[data-global-transition-state=exit-active] &[data-activity-is-top]";
const idle = "[data-global-transition-state=enter-done] &[data-activity-is-top]";
const pushBehind = "[data-global-transition-state=enter-active] &:not([data-activity-is-top])";
const popBehind = "[data-global-transition-state=exit-active] &:not([data-activity-is-top])";
const idleBehind = "[data-global-transition-state=enter-done] &:not([data-activity-is-top])";
const swipeBackSwiping = "[data-swipe-back-state=swiping] &[data-activity-is-top]";
const swipeBackSwipingBehind = "[data-swipe-back-state=swiping] &:not([data-activity-is-top])";

const slideFromRightIOS = {
  outsideOffsetX: "100%",
  behindOffsetX: "-30%",
  swipeBackDisplacement: "var(--swipe-back-displacement, 0)",
  swipeBackDisplacementBehind: "calc((var(--swipe-back-displacement, 0) - 1) * 0.3)",
  swipeBackDisplacementRatio: "var(--swipe-back-displacement-ratio, 0)",
};

export const appScreen = defineRecipe({
  name: "appScreen",
  slots: ["root", "layer", "dim", "edge"],
  base: {
    root: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      right: 0,
      overflow: "hidden",
    },
    dim: {
      zIndex: "var(--z-index-dim)",
      position: "absolute",
      width: "100%",
      left: 0,
      right: 0,
      opacity: 0,
    },
    layer: {
      zIndex: "var(--z-index-layer)",
      boxSizing: "border-box",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      right: 0,
      overflowY: "scroll",
      WebkitOverflowScrolling: "touch",
      "&::-webkit-scrollbar": {
        display: "none",
      },

      backgroundColor: vars.$color.bg.layerDefault,
    },
    edge: {
      zIndex: "var(--z-index-edge)",
      position: "absolute",
      width: "20px",
      height: "100%",
      left: 0,
      right: 0,
    },
  },
  variants: {
    theme: {
      cupertino: {
        root: {
          "--app-bar-height": navVars.themeCupertino.enabled.root.minHeight,
        },
        dim: {
          height: "100%",
          background: vars.$color.bg.overlay,
        },
      },
      android: {
        root: {
          "--app-bar-height": navVars.themeAndroid.enabled.root.minHeight,
        },
        dim: {
          height: "var(--screen-height, 8vh)",
          background: `linear-gradient(${vars.$color.bg.overlay}, rgba(0, 0, 0, 0))`,
        },
        edge: {
          display: "none",
        },
      },
    },
    transitionStyle: {
      slideFromRightIOS: {
        root: {
          "--z-index-dim": "calc(var(--z-index-base) + 0)",
          "--z-index-layer": "calc(var(--z-index-base) + 2)",
          "--z-index-edge": "calc(var(--z-index-base) + 4)",
          "--z-index-app-bar": "calc(var(--z-index-base) + 7)",
        },
        layer: {
          transform: "translate3d(0, 0, 0)",
          // top
          [push]: enterAnimation({
            ...TransitionIOS,
            translateX: "100%",
          }),
          [pop]: {
            transform: transform({
              translateX: "var(--swipe-back-displacement, 0)",
            }),
            ...exitAnimation({
              ...TransitionIOS,
              translateX: "100%",
            }),
          },
          [idle]: enterAnimation({
            ...TransitionIOS,
            translateX: "var(--swipe-back-displacement, 0)",
          }),
          [swipeBackSwiping]: {
            animation: "none",
            transform: transform({
              translateX: "var(--swipe-back-displacement, 0)",
            }),
          },

          // behind
          [popBehind]: enterAnimation({
            ...TransitionIOS,
            translateX: "calc(-30% + var(--swipe-back-displacement, 0) * 0.3)",
          }),
          [pushBehind]: exitAnimation({
            ...TransitionIOS,
            translateX: "-30%",
          }),
          [idleBehind]: {
            transform: transform({
              translateX: "calc(-30% + var(--swipe-back-displacement, 0) * 0.3)",
            }),
            ...exitAnimation({
              ...TransitionIOS,
              translateX: "-30%",
            }),
          },
          [swipeBackSwipingBehind]: {
            animation: "none",
            transform: transform({
              translateX: "calc(-30% + var(--swipe-back-displacement, 0) * 0.3)",
            }),
          },
        },
        dim: {
          opacity: 1,
          [push]: enterAnimation({
            ...TransitionIOS,
            opacity: "0",
          }),
          [pop]: {
            opacity: "calc(1 - var(--swipe-back-displacement-ratio, 0))",
            ...exitAnimation({
              ...TransitionIOS,
              opacity: "0",
            }),
          },
          [idle]: enterAnimation({
            ...TransitionIOS,
            opacity: "calc(1 - var(--swipe-back-displacement-ratio, 0))",
          }),
          [swipeBackSwiping]: {
            animation: "none",
            opacity: "calc(1 - var(--swipe-back-displacement-ratio, 0))",
          },
        },
      },
      fadeFromBottomAndroid: {
        root: {
          "--z-index-dim": "calc(var(--z-index-base) + 0)",
          "--z-index-layer": "calc(var(--z-index-base) + 3)",
          "--z-index-edge": "calc(var(--z-index-base) + 4)",
          "--z-index-app-bar": "calc(var(--z-index-base) + 4)",
        },
        layer: {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
          [push]: {
            ...enterAnimation({
              ...FadeInFromBottomAndroid,
              opacity: "0",
              translateY: "var(--screen-height, 8vh)",
            }),
          },
          [pop]: {
            ...exitAnimation({
              ...FadeOutToBottomAndroid,
              opacity: "0",
              translateY: "var(--screen-height, 8vh)",
            }),
          },
        },
      },
    },
    hasAppBar: {
      true: {
        root: {
          "--app-bar-margin": "var(--app-bar-height)",

          "@supports (padding: max(0px)) and (padding: constant(safe-area-inset-top))": {
            "--app-bar-margin": `calc(var(--app-bar-height) + max(${MIN_SAFE_AREA_INSET_TOP}, constant(safe-area-inset-top)))`,
          },
          "@supports (padding: max(0px)) and (padding: env(safe-area-inset-top))": {
            "--app-bar-margin": `calc(var(--app-bar-height) + max(${MIN_SAFE_AREA_INSET_TOP}, env(safe-area-inset-top)))`,
          },
        },
        edge: {
          top: "var(--app-bar-height)",
          height: "calc(100% - var(--app-bar-height))",
        },
      },
    },
  },
  defaultVariants: {
    theme: "cupertino",
    transitionStyle: "slideFromRightIOS",
    hasAppBar: false,
  },
});

export const appBar = defineRecipe({
  name: "appBar",
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
      },
    },
    safeArea: {
      height: `max(${MIN_SAFE_AREA_INSET_TOP}, env(safe-area-inset-top))`,
    },
    container: {
      display: "flex",
      alignItems: "flex-end",
      // TODO: do we need to set overflow?
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
    titleMain: {},
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
          height: navVars.themeCupertino.enabled.root.minHeight,
          paddingInline: navVars.themeCupertino.enabled.root.paddingX,
          '[data-stackflow-activity-is-active="false"] &': {
            opacity: "calc(pow(var(--stackflow-swipe-back-displacement-ratio, 1), 2))",
          },
          '[data-stackflow-activity-is-active="true"] &': {
            opacity: "calc(1 - pow(var(--stackflow-swipe-back-displacement-ratio, 0), 2))",
          },
        },
        iconButton: {
          width: navVars.themeCupertino.enabled.icon.targetSize,
          height: navVars.themeCupertino.enabled.icon.targetSize,

          "&:first-child": {
            marginLeft: `calc(-1 * (${navVars.themeCupertino.enabled.icon.targetSize} - ${navVars.themeCupertino.enabled.icon.size}) / 2)`,
          },
          "&:last-child": {
            marginRight: `calc(-1 * (${navVars.themeCupertino.enabled.icon.targetSize} - ${navVars.themeCupertino.enabled.icon.size}) / 2)`,
          },
        },
        icon: {
          width: navVars.themeCupertino.enabled.icon.size,
          height: navVars.themeCupertino.enabled.icon.size,
        },
        titleMain: {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "var(--title-width, 100%)",
          height: "100%",
          left: "50%",
          transform: "translate(-50%)",
          top: `max(${MIN_SAFE_AREA_INSET_TOP}, env(safe-area-inset-top))`,
        },
        titleText: {
          fontSize: navVars.themeCupertino.enabled.title.fontSize,
          fontWeight: navVars.themeCupertino.enabled.title.fontWeight,
        },
        titleEdge: {
          display: "block",
        },
      },
      android: {
        root: {
          opacity: 0,
          transform: "translate3d(0, 160px, 0)",
          transition: "transform 300ms", // TODO: define duration in rootage

          "&:is([data-transition-state=enter-active], [data-transition-state=enter-done])": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        container: {
          height: navVars.themeAndroid.enabled.root.minHeight,
          paddingInline: navVars.themeAndroid.enabled.root.paddingX,
        },
        iconButton: {
          width: navVars.themeAndroid.enabled.icon.targetSize,
          height: navVars.themeAndroid.enabled.icon.targetSize,

          "&:first-child": {
            marginLeft: `calc(-1 * (${navVars.themeAndroid.enabled.icon.targetSize} - ${navVars.themeAndroid.enabled.icon.size}) / 2)`,
          },
          "&:last-child": {
            marginRight: `calc(-1 * (${navVars.themeAndroid.enabled.icon.targetSize} - ${navVars.themeAndroid.enabled.icon.size}) / 2)`,
          },
        },
        icon: {
          width: navVars.themeAndroid.enabled.icon.size,
          height: navVars.themeAndroid.enabled.icon.size,
        },
        titleMain: {
          width: "100%",
          justifyContent: "flex-start",
          paddingLeft: "16px",
          boxSizing: "border-box",
        },
        titleText: {
          fontSize: navVars.themeAndroid.enabled.title.fontSize,
          fontWeight: navVars.themeAndroid.enabled.title.fontWeight,
        },
      },
    },
    tone: {
      layer: {
        root: {
          backgroundColor: navVars.toneLayer.enabled.root.color,
        },
        icon: {
          color: navVars.toneLayer.enabled.icon.color,
        },
        titleMain: {
          color: navVars.toneLayer.enabled.title.color,
        },
      },
      transparent: {
        root: {
          backgroundColor: navVars.toneTransparent.enabled.root.color,
        },
        icon: {
          color: navVars.toneTransparent.enabled.icon.color,
        },
        titleMain: {
          color: navVars.toneTransparent.enabled.title.color,
        },
      },
    },
    border: {
      true: {
        root: {
          boxShadow: `inset 0px calc(-1 * ${navVars.dividerTrue.enabled.root.strokeWidth}) 0 ${navVars.dividerTrue.enabled.root.strokeColor}`,
        },
      },
    },
  },
  defaultVariants: {
    theme: "cupertino",
    tone: "layer",
    border: false,
  },
});
