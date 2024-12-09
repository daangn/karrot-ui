import { progressCircle as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const progressCircle = defineRecipe({
  name: "progressCircle",
  slots: ["root", "track", "range"],
  base: {
    root: {
      display: "inline-flex",
      boxSizing: "border-box",
      position: "relative",
    },
    track: {},
    range: {
      strokeLinecap: "round",
      transitionProperty: "stroke-dashoffset",
    },
  },
  variants: {
    tone: {
      neutral: {
        track: {
          stroke: vars.toneNeutral.enabled.track.color,
        },
        range: {
          stroke: vars.toneNeutral.enabled.range.color,
        },
      },
      brand: {
        track: {
          stroke: vars.toneBrand.enabled.track.color,
        },
        range: {
          stroke: vars.toneBrand.enabled.range.color,
        },
      },
      staticWhite: {
        track: {
          stroke: vars.toneStaticWhite.enabled.track.color,
        },
        range: {
          stroke: vars.toneStaticWhite.enabled.range.color,
        },
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
    },
    indeterminate: {
      true: {
        root: {
          animation: `rotate ${vars.indeterminateTrue.enabled.range.rotateDuration} ${vars.indeterminateTrue.enabled.range.rotateTimingFunction} infinite`,
        },
        range: {
          animation: `
            headDash ${vars.indeterminateTrue.enabled.range.lengthDuration} ${vars.indeterminateTrue.enabled.range.headTimingFunction} infinite normal none running,
            tailDash ${vars.indeterminateTrue.enabled.range.lengthDuration} ${vars.indeterminateTrue.enabled.range.tailTimingFunction} infinite normal none running
          `,
        },
      },
      false: {
        range: {
          transitionDuration: vars.indeterminateFalse.enabled.range.lengthDuration,
          transitionTimingFunction: vars.indeterminateFalse.enabled.range.lengthTimingFunction,
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
    indeterminate: false,
  },
});

export default progressCircle;
