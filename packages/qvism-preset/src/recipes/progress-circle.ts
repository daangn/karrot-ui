import { progressCircle as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";

const progressCircle = defineRecipe({
  name: "progress-circle",
  slots: ["root", "track", "range"],
  base: {
    root: {
      display: "inline-flex",
      boxSizing: "border-box",
      position: "relative",

      "&[data-progress-state=indeterminate]": {
        // FIXME: temporal workaround for recipe name prefixing; We have to remove this once we have a proper solution
        animation: `progress-circle-rotate ${vars.indeterminateTrue.enabled.range.rotateDuration} ${vars.indeterminateTrue.enabled.range.rotateTimingFunction} infinite`,
      },
    },
    track: {
      stroke: "var(--track-color)",
    },
    range: {
      stroke: "var(--range-color)",
      strokeLinecap: "round",

      // determinate
      transitionDuration: vars.indeterminateFalse.enabled.range.lengthDuration,
      transitionTimingFunction: vars.indeterminateFalse.enabled.range.lengthTimingFunction,
      transitionProperty: "stroke-dasharray",

      // indeterminate
      "&[data-progress-state=indeterminate]": {
        // FIXME: temporal workaround for recipe name prefixing; We have to remove this once we have a proper solution
        animation: `
          progress-circle-headDash ${vars.indeterminateTrue.enabled.range.lengthDuration} ${vars.indeterminateTrue.enabled.range.headTimingFunction} infinite normal none running,
          progress-circle-tailDash ${vars.indeterminateTrue.enabled.range.lengthDuration} ${vars.indeterminateTrue.enabled.range.tailTimingFunction} infinite normal none running
        `,
      },
    },
  },
  variants: {
    tone: {
      neutral: {
        root: {
          "--track-color": vars.toneNeutral.enabled.track.color,
          "--range-color": vars.toneNeutral.enabled.range.color,
        },
      },
      brand: {
        root: {
          "--track-color": vars.toneBrand.enabled.track.color,
          "--range-color": vars.toneBrand.enabled.range.color,
        },
      },
      staticWhite: {
        root: {
          "--track-color": vars.toneStaticWhite.enabled.track.color,
          "--range-color": vars.toneStaticWhite.enabled.range.color,
        },
      },
      inherit: {
        root: {},
      },
    },
    size: {
      24: {
        root: {
          "--size": vars.size24.enabled.root.size,
          "--thickness": vars.size24.enabled.root.thickness,
        },
      },
      40: {
        root: {
          "--size": vars.size40.enabled.root.size,
          "--thickness": vars.size40.enabled.root.thickness,
        },
      },
      inherit: {
        root: {},
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
        strokeDasharray: "0, 1000%",
      },
      "75%": {
        strokeDasharray: "var(--circumference), 1000%",
      },
      "100%": {
        strokeDasharray: "var(--circumference), 1000%",
      },
    },

    tailDash: {
      "0%": {
        strokeDashoffset: 0,
      },
      "33.33%": {
        strokeDashoffset: 0,
      },
      "100%": {
        strokeDashoffset: "calc(var(--circumference) * -1)",
      },
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: 40,
  },
});

export default progressCircle;
