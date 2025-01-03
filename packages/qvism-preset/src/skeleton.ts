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

        backgroundImage: `linear-gradient(90deg, ${vars.base.enabled.shimmer.color})`,
        backgroundRepeat: "no-repeat",
        animationFillMode: "forwards",

        animationName: "shimmer",
        animationDuration: vars.base.enabled.shimmer.duration,
        animationTimingFunction: vars.base.enabled.shimmer.timingFunction,
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
    shimmer: {
      "0%": {
        transform: "translateX(-100%)",
      },
      "100%": {
        transform: "translateX(100%)",
      },
    },
  },
  defaultVariants: {
    shape: "rounded",
  },
});

export default skeleton;
