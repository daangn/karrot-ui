import { vars } from "@seed-design/css/vars";
import { keyframes } from "./keyframes";
import { recipes } from "./recipes";
import { tokens } from "./tokens";

export default {
  theme: {
    tokens,
    recipes,
    keyframes,
  },
  globalCss: {
    ":root": {
      "--seed-safe-area-top": "0px",
      "--seed-safe-area-bottom": "0px",

      "@supports (left: constant(safe-area-inset-left))": {
        "--seed-safe-area-top": "constant(safe-area-inset-top)",
        "--seed-safe-area-bottom": "constant(safe-area-inset-bottom)",
      },

      "@supports (left: env(safe-area-inset-left))": {
        "--seed-safe-area-top": "env(safe-area-inset-top)",
        "--seed-safe-area-bottom": "env(safe-area-inset-bottom)",
      },
    },
    ".seed-loading-indicator": {
      position: "absolute",
      display: "inline-flex",
    },
    ".seed-icon, .seed-prefix-icon, .seed-suffix-icon": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    ".seed-icon": {
      width: "var(--seed-icon-size)",
      height: "var(--seed-icon-size)",
      color: "var(--seed-icon-color, currentColor)",
    },
    ".seed-prefix-icon": {
      width: "var(--seed-prefix-icon-size)",
      height: "var(--seed-prefix-icon-size)",
      marginLeft: "var(--seed-prefix-icon-margin-left)",
      marginRight: "var(--seed-prefix-icon-margin-right)",
      marginTop: "var(--seed-prefix-icon-margin-top)",
      color: "var(--seed-prefix-icon-color, currentColor)",
    },
    ".seed-suffix-icon": {
      width: "var(--seed-suffix-icon-size)",
      height: "var(--seed-suffix-icon-size)",
      marginLeft: "var(--seed-suffix-icon-margin-left)",
      marginRight: "var(--seed-suffix-icon-margin-right)",
      marginTop: "var(--seed-suffix-icon-margin-top)",
      color: "var(--seed-suffix-icon-color, currentColor)",
    },
    ".seed-count": {
      fontSize: "var(--seed-count-font-size)",
      lineHeight: "var(--seed-count-line-height)",
      fontWeight: "var(--seed-count-font-weight)",
      color: "var(--seed-count-color)",
    },
    ".seed-box": {
      "--seed-box-background": "initial",
      "--seed-box-color": "initial",
      backgroundColor: "var(--seed-box-background)",
      color: "var(--seed-box-color)",

      "--seed-box-border-style": "solid",
      "--seed-box-border-color": "initial",
      borderStyle: "var(--seed-box-border-style)",
      borderColor: "var(--seed-box-border-color)",

      "--seed-box-border-width": "0",
      "--seed-box-border-top-width": "var(--seed-box-border-width)",
      "--seed-box-border-bottom-width": "var(--seed-box-border-width)",
      "--seed-box-border-left-width": "var(--seed-box-border-width)",
      "--seed-box-border-right-width": "var(--seed-box-border-width)",
      borderTopWidth: "var(--seed-box-border-top-width)",
      borderBottomWidth: "var(--seed-box-border-bottom-width)",
      borderLeftWidth: "var(--seed-box-border-left-width)",
      borderRightWidth: "var(--seed-box-border-right-width)",

      "--seed-box-padding": "0",
      "--seed-box-padding-y": "var(--seed-box-padding)",
      "--seed-box-padding-x": "var(--seed-box-padding)",
      "--seed-box-padding-bottom": "var(--seed-box-padding-y)",
      "--seed-box-padding-top": "var(--seed-box-padding-y)",
      "--seed-box-padding-left": "var(--seed-box-padding-x)",
      "--seed-box-padding-right": "var(--seed-box-padding-x)",
      paddingTop: "var(--seed-box-padding-top)",
      paddingBottom: "var(--seed-box-padding-bottom)",
      paddingLeft: "var(--seed-box-padding-left)",
      paddingRight: "var(--seed-box-padding-right)",

      "--seed-box-min-height": "initial",
      "--seed-box-max-height": "initial",
      "--seed-box-height": "initial",
      "--seed-box-min-width": "initial",
      "--seed-box-max-width": "initial",
      "--seed-box-width": "initial",
      minHeight: "var(--seed-box-min-height)",
      maxHeight: "var(--seed-box-max-height)",
      height: "var(--seed-box-height)",
      minWidth: "var(--seed-box-min-width)",
      maxWidth: "var(--seed-box-max-width)",
      width: "var(--seed-box-width)",

      "--seed-box-top": "initial",
      "--seed-box-bottom": "initial",
      "--seed-box-left": "initial",
      "--seed-box-right": "initial",
      top: "var(--seed-box-top)",
      bottom: "var(--seed-box-bottom)",
      left: "var(--seed-box-left)",
      right: "var(--seed-box-right)",

      "--seed-box-border-radius": "initial",
      "--seed-box-border-bottom-left-radius": "var(--seed-box-border-radius)",
      "--seed-box-border-bottom-right-radius": "var(--seed-box-border-radius)",
      "--seed-box-border-top-left-radius": "var(--seed-box-border-radius)",
      "--seed-box-border-top-right-radius": "var(--seed-box-border-radius)",
      borderBottomLeftRadius: "var(--seed-box-border-bottom-left-radius)",
      borderBottomRightRadius: "var(--seed-box-border-bottom-right-radius)",
      borderTopLeftRadius: "var(--seed-box-border-top-left-radius)",
      borderTopRightRadius: "var(--seed-box-border-top-right-radius)",

      "--seed-box-display": "block",
      "--seed-box-position": "initial",
      display: "var(--seed-box-display)",
      position: "var(--seed-box-position)",

      "--seed-box-overflow-x": "initial",
      "--seed-box-overflow-y": "initial",
      overflowX: "var(--seed-box-overflow-x)",
      overflowY: "var(--seed-box-overflow-y)",

      "--seed-box-flex-grow": "initial",
      "--seed-box-flex-shrink": "initial",
      flexGrow: "var(--seed-box-flex-grow)",
      flexShrink: "var(--seed-box-flex-shrink)",

      "--seed-box-flex-direction": "initial",
      "--seed-box-flex-wrap": "initial",
      "--seed-box-justify-content": "initial",
      "--seed-box-align-items": "stretch",
      "--seed-box-align-content": "stretch",
      "--seed-box-align-self": "auto",
      "--seed-box-gap": "initial",
      flexDirection: "var(--seed-box-flex-direction)",
      flexWrap: "var(--seed-box-flex-wrap)",
      justifyContent: "var(--seed-box-justify-content)",
      alignItems: "var(--seed-box-align-items)",
      alignContent: "var(--seed-box-align-content)",
      alignSelf: "var(--seed-box-align-self)",
      gap: "var(--seed-box-gap)",
    },
    ".seed-consistent-width": {
      // Consistent text width between font-weight changes
      "&:before": {
        content: "attr(data-text)",
        display: "block",
        visibility: "hidden",
        height: 0,
        fontWeight: vars.$fontWeight.regular,
      },
      "&:after": {
        content: "attr(data-text)",
        display: "block",
        visibility: "hidden",
        height: 0,
        fontWeight: vars.$fontWeight.bold,
      },
    },
  },
};
