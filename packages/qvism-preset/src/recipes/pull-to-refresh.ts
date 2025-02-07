import { vars } from "@seed-design/vars";
import { defineRecipe } from "../utils/define-recipe";
import { pseudo } from "../utils/pseudo";

const pullToRefresh = defineRecipe({
  name: "pullToRefresh",
  slots: ["root", "indicator"],
  base: {
    root: {
      "--ptr-size": "44px",
      "--ptr-transition-duration": vars.$duration.s6,
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      transform: "translateY(min(calc(var(--ptr-displacement, 0) - var(--ptr-size)), 0))",
      transition: `transform ${vars.$duration.s6}`,

      [pseudo("[data-ptr-dragging]")]: {
        transition: "none",
      },
    },
  },
  variants: {},
  defaultVariants: {},
});

export default pullToRefresh;
