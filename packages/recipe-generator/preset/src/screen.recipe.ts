import { vars } from "@seed-design/vars";
import { topNavigation } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const MIN_SAFE_AREA_INSET_TOP = "0px"; // TODO: turn into public interface

const screen = defineRecipe({
  name: "screen",
  slots: ["root", "layer", "dim", "edge"],
  base: {
    root: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      right: 0,

      "&[data-transition-state=exit-done]": {
        transform: "translate3d(100%, 0, 0)",
      },
    },
    dim: {
      zIndex: "var(--z-index-dim)",

      position: "absolute",
      width: "100%",
      left: 0,
      right: 0,
      opacity: 0,

      transition: `transform ${vars.$duration.s6}, opacity ${vars.$duration.s6}`,

      "&:is([data-transition-state=enter-active], [data-transition-state=enter-done])": {
        opacity: 1,
      },
      "&:is([data-transition-state=exit-active], [data-transition-state=exit-done])": {
        opacity: 0,
      },
    },
    layer: {
      zIndex: "var(--z-index-layer)",

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
      transition: `transform ${vars.$duration.s6}, opacity ${vars.$duration.s6}`,
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
          "--app-bar-height": topNavigation.themeCupertino.enabled.root.minHeight,
        },
        dim: {
          height: "100%",
          background: vars.$color.bg.overlay,
        },
        layer: {
          transform: "translate3d(100%, 0, 0)",
          "&:is([data-transition-state=enter-active], [data-transition-state=enter-done])": {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      android: {
        root: {
          "--app-bar-height": topNavigation.themeAndroid.enabled.root.minHeight,
        },
        dim: {
          height: "10rem",
          background: `linear-gradient(${vars.$color.bg.overlay}, rgba(0, 0, 0, 0))`,
        },
        layer: {
          opacity: 0,
          transform: "translate3d(0, 10rem, 0)",
          "&:is([data-transition-state=enter-active], [data-transition-state=enter-done])": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
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
        layer: {
          boxSizing: "border-box",
          transition: `transform ${vars.$duration.s6}, opacity ${vars.$duration.s6}`, // TODO: add heightTransitionDuration
          height: "100%",
        },
        edge: {
          top: "var(--app-bar-height)",
          height: "calc(100% - var(--app-bar-height))",
        },
      },
    },
  },
});

export default screen;
