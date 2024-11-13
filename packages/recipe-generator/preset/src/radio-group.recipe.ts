import { radioGroup as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const radioGroup = defineRecipe({
  name: "radioGroup",
  slots: ["root", "label", "radios"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",

      gap: vars.base.enabled.root.gap,
    },
    radios: {
      display: "flex",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
  variants: {
    orientation: {
      horizontal: {
        radios: {
          flexDirection: "row",

          gap: vars.orientationVertical.enabled.radios.gap,
        },
      },
      vertical: {
        radios: {
          flexDirection: "column",
        },
      },
    },
  },
});

export default radioGroup;
