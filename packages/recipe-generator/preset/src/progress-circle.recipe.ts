import { progressCircle as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
// import { disabled, focus, active, pseudo } from "./pseudo";

const progressCircle = defineRecipe({
  name: "progressCircle",
  slots: ["root", "track", "indicator", "indicator-path"],
  base: {
    root: {
      display: "inline-block",
      position: "relative",
    },
    track: {
      position: "absolute",
      inset: 0,

      width: "100%",
      height: "100%",
    },
    indicator: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",

      position: "absolute",
      inset: 0,

      width: "100%",
      height: "100%",

      transitionTimingFunction: vars.base.enabled.indicator.transitionTimingFunction,
      transitionDuration: vars.base.enabled.indicator.transitionDuration,
    },
    "indicator-path": {
      stroke: "currentColor",
      strokeDasharray: "80, 200",
      strokeDashoffset: "0",
      strokeLinecap: "round",
      strokeWidth: "5.2px",

      rotate: "-90deg",
      transformOrigin: "center",
      transformBox: "fill-box",
    },
  },
  variants: {
    variant: {
      neutral: {
        track: {
          fill: vars.variantNeutral.enabled.track.fill,
        },
        indicator: {
          color: vars.variantNeutral.enabled.indicator.color,
        },
      },
      brand: {
        track: {
          fill: vars.variantBrand.enabled.track.fill,
        },
        indicator: {
          color: vars.variantBrand.enabled.indicator.color,
        },
      },
      white: {
        track: {
          fill: vars.variantWhite.enabled.track.fill,
        },
        indicator: {
          color: vars.variantWhite.enabled.indicator.color,
        },
      },
    },
    size: {
      small: {
        root: {
          width: vars.sizeSmall.enabled.root.size,
          height: vars.sizeSmall.enabled.root.size,
        },
      },
      medium: {
        root: {
          width: vars.sizeMedium.enabled.root.size,
          height: vars.sizeMedium.enabled.root.size,
        },
      },
    },
    indeterminate: {
      true: {
        root: {
          animation: `rotate ${vars.indeterminateTrue.enabled.indicator.rotateDuration} ${vars.indeterminateTrue.enabled.indicator.rotateTimingFunction} infinite`,
        },
        "indicator-path": {
          animation: `
            headDash ${vars.indeterminateTrue.enabled.indicator.headDuration} ${vars.indeterminateTrue.enabled.indicator.headTimingFunction} infinite normal none running,
            tailDash ${vars.indeterminateTrue.enabled.indicator.tailDuration} ${vars.indeterminateTrue.enabled.indicator.tailTimingFunction} infinite normal none running
          `,
        },
      },
      false: {
        "indicator-path": {
          transitionDuration: `var(--seed-spinner-determinate-duration, ${vars.base.enabled.indicator.transitionDuration})`,
          transitionTimingFunction: `var(--seed-spinner-determinate-timing-function, ${vars.base.enabled.indicator.transitionTimingFunction})`,
          transitionProperty: "stroke-dasharray",
        },
      },
    },
  },
  keyframes: {
    rotate: {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },

    headDash: {
      "0%": {
        strokeDasharray: "1, 200",
      },
      "75%": {
        strokeDasharray: "112, 200",
      },
      "100%": {
        strokeDasharray: "112, 200",
      },
    },

    tailDash: {
      "0%": {
        strokeDashoffset: "0",
      },
      "33.3%": {
        strokeDashoffset: "0",
      },
      "100%": {
        strokeDashoffset: "-110",
      },
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "medium",
    indeterminate: false,
  },
});

export default progressCircle;
