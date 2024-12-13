import { skeleton as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

export const skeleton = defineRecipe({
  name: "skeleton",
  slots: ["root"],
  base: {
    root: {
      display: "inline-block",
      boxSizing: "border-box",
      overflow: "hidden",
      background: vars.base.enabled.root.color,

      "&::after": {
        content: "''",
        display: "block",
        width: "100%",
        height: "100%",

        backgroundImage: `linear-gradient(90deg, ${vars.base.enabled.wave.color})`,
        backgroundSize: "200% 100%",
        animationFillMode: "forwards",

        animationName: "wave",
        animationDuration: vars.base.enabled.wave.duration,
        animationTimingFunction: vars.base.enabled.wave.timingFunction,
        animationIterationCount: "infinite",
      },
    },
  },
  variants: {
    shape: {
      rounded: {
        root: {
          borderRadius: vars.shapeRounded.enabled.root.cornerRadius,
        },
      },
      circular: {
        root: {
          borderRadius: vars.shapeCircular.enabled.root.cornerRadius,
        },
      },
      rectangular: {
        root: {
          borderRadius: vars.shapeRectangular.enabled.root.cornerRadius,
        },
      },
    },
  },
  keyframes: {
    wave: {
      "0%": {
        backgroundPositionX: "100%",
      },
      "50%": {
        backgroundPositionX: "100%",
      },
      "100%": {
        backgroundPositionX: "-100%",
      },
    },
  },
});

export default skeleton;
