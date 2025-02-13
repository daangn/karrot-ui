import { defineKeyframes } from "./utils/define-keyframes";

export const keyframes = defineKeyframes({
  rotate: {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },

  "slide-x": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },

  "progress-circle-head": {
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

  "progress-circle-tail": {
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
});
