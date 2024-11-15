import { radioGroup as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const radioGroup = defineRecipe({
  name: "radioGroup",
  slots: ["root", "label", "options"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",

      gap: vars.base.enabled.root.gap,
    },
    options: {
      display: "flex",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
  variants: {
    orientation: {
      horizontal: {
        options: {
          flexDirection: "row",

          gap: vars.orientationVertical.enabled.options.gap,
        },
      },
      vertical: {
        options: {
          flexDirection: "column",
        },
      },
    },
  },
});

export default radioGroup;
