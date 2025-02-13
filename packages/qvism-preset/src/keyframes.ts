import { defineKeyframes } from "./utils/define-keyframes";

export const keyframes = defineKeyframes({
  enter: {
    from: {
      opacity: "var(--seed-enter-opacity, 1)",
      transform: `translate3d(var(--seed-enter-translate-x, 0), var(--seed-enter-translate-y, 0), 0)
      scale3d(var(--seed-enter-scale, 1), var(--seed-enter-scale, 1), var(--seed-enter-scale, 1))
      rotate(var(--seed-enter-rotate, 0))`,
    },
  },

  exit: {
    to: {
      opacity: "var(--seed-exit-opacity, 1)",
      transform: `translate3d(var(--seed-exit-translate-x, 0), var(--seed-exit-translate-y, 0), 0)
      scale3d(var(--seed-exit-scale, 1), var(--seed-exit-scale, 1), var(--seed-exit-scale, 1))
      rotate(var(--seed-exit-rotate, 0))`,
    },
  },

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
