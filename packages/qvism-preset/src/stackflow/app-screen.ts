import { vars } from "@seed-design/vars";
import { topNavigation as navVars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { fadeFromBottomAndroidAnimations, iOSAnimations } from "./animation";
import {
  idle,
  idleBehind,
  pop,
  popBehind,
  push,
  pushBehind,
  swipeBackSwiping,
  swipeBackSwipingBehind,
} from "./pseudo";

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

      "--app-bar-offset": "calc(var(--app-bar-height) + var(--seed-safe-area-top))",
    },
    dim: {
      zIndex: "var(--z-index-dim)",
      position: "absolute",
      width: "100%",
      top: 0,
      left: 0,
      right: 0,
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
          [push]: iOSAnimations.layer.push,
          [pop]: iOSAnimations.layer.pop,
          [idle]: iOSAnimations.layer.idle,
          [swipeBackSwiping]: iOSAnimations.layer.interaction,

          // behind
          [pushBehind]: iOSAnimations.layerBehind.push,
          [popBehind]: iOSAnimations.layerBehind.pop,
          [idleBehind]: iOSAnimations.layerBehind.idle,
          [swipeBackSwipingBehind]: iOSAnimations.layerBehind.interaction,
        },
        dim: {
          [push]: iOSAnimations.dim.push,
          [pop]: iOSAnimations.dim.pop,
          [idle]: iOSAnimations.dim.idle,
          [swipeBackSwiping]: iOSAnimations.dim.interaction,
        },
      },
      fadeFromBottomAndroid: {
        root: {
          "--z-index-dim": "calc(var(--z-index-base) + 0)",
          "--z-index-layer": "calc(var(--z-index-base) + 3)",
          "--z-index-edge": "calc(var(--z-index-base) + 4)",
          "--z-index-app-bar": "calc(var(--z-index-base) + 4)",
        },
        dim: {
          height: "160px",
          background: `linear-gradient(${vars.$color.bg.overlay}, rgba(0, 0, 0, 0))`,

          [push]: fadeFromBottomAndroidAnimations.dim.push,
          [pop]: fadeFromBottomAndroidAnimations.dim.pop,
        },
        layer: {
          transform: "translate3d(0, 0, 0)",

          [push]: fadeFromBottomAndroidAnimations.layer.push,
          [pop]: fadeFromBottomAndroidAnimations.layer.pop,
        },
      },
    },
    layerOffsetTop: {
      none: {},
      safeArea: {
        layer: {
          paddingTop: "var(--seed-safe-area-top)",
        },
      },
      appBar: {
        layer: {
          paddingTop: "var(--app-bar-offset)",
        },
      },
    },
    layerOffsetBottom: {
      none: {},
      safeArea: {
        layer: {
          paddingBottom: "var(--seed-safe-area-bottom)",
        },
      },
    },
  },
  defaultVariants: {
    theme: "cupertino",
    transitionStyle: "slideFromRightIOS",
    layerOffsetTop: "appBar",
    layerOffsetBottom: "none",
  },
});

export const appBar = defineRecipe({
  name: "appBar",
  slots: [
    "root",
    "left",
    "right",
    "title",
    "titleMain",
    "titleText",
    "subtitleText",
    "iconButton",
    "icon",
  ],
  base: {
    root: {
      zIndex: "var(--z-index-app-bar)",

      position: "absolute",
      boxSizing: "border-box",
      width: "100%",
      display: "flex",
      alignItems: "flex-end",

      "&:before": {
        content: '""',
        position: "absolute",
        pointerEvents: "none",
        inset: 0,
        zIndex: -1,
      },
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
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
      height: "100%",
    },
    titleMain: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    titleText: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
    },
    subtitleText: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
    },
  },
  variants: {
    titleLayout: {
      titleOnly: {},
      withSubtitle: {},
    },
    theme: {
      cupertino: {
        root: {
          [`${push}:before`]: iOSAnimations.appBarBackground.push,
          [`${pop}:before`]: iOSAnimations.appBarBackground.pop,
          [`${idle}:before`]: iOSAnimations.appBarBackground.idle,

          height: navVars.themeCupertino.enabled.root.minHeight,
          paddingInline: navVars.themeCupertino.enabled.root.paddingX,
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
          // top
          [push]: iOSAnimations.icon.push,
          [pop]: iOSAnimations.icon.pop,
          [idle]: iOSAnimations.icon.idle,
          [swipeBackSwiping]: iOSAnimations.icon.interaction,

          // behind
          [pushBehind]: iOSAnimations.iconBehind.push,
          [popBehind]: iOSAnimations.iconBehind.pop,
          [idleBehind]: iOSAnimations.iconBehind.idle,
          [swipeBackSwipingBehind]: iOSAnimations.iconBehind.interaction,
        },
        title: {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100%",
          left: 0,
          right: 0,
          paddingInline: "var(--centered-title-padding-x, 0)",
          pointerEvents: "none",

          // top
          [push]: iOSAnimations.title.push,
          [pop]: iOSAnimations.title.pop,
          [idle]: iOSAnimations.title.idle,
          [swipeBackSwiping]: iOSAnimations.title.interaction,

          // behind
          [pushBehind]: iOSAnimations.titleBehind.push,
          [popBehind]: iOSAnimations.titleBehind.pop,
          [idleBehind]: iOSAnimations.titleBehind.idle,
          [swipeBackSwipingBehind]: iOSAnimations.titleBehind.interaction,
        },
        titleText: {
          fontSize: navVars.themeCupertino.enabled.title.fontSize,
          fontWeight: navVars.themeCupertino.enabled.title.fontWeight,
        },
      },
      android: {
        root: {
          height: navVars.themeAndroid.enabled.root.minHeight,
          paddingInline: navVars.themeAndroid.enabled.root.paddingX,

          [push]: fadeFromBottomAndroidAnimations.appBar.push,
          [pop]: fadeFromBottomAndroidAnimations.appBar.pop,
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
        left: {
          paddingRight: "16px",
        },
        title: {
          width: "100%",
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
          "&:before": {
            backgroundColor: navVars.toneLayer.enabled.root.color,
          },
        },
        icon: {
          color: navVars.toneLayer.enabled.icon.color,
        },
        titleText: {
          color: navVars.toneLayer.enabled.title.color,
        },
      },
      transparent: {
        root: {
          "&:before": {
            backgroundColor: navVars.toneTransparent.enabled.root.color,
          },
        },
        icon: {
          color: navVars.toneTransparent.enabled.icon.color,
        },
        titleMain: {
          color: navVars.toneTransparent.enabled.title.color,
        },
      },
    },
    divider: {
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
    titleLayout: "titleOnly",
    divider: false,
  },
});
