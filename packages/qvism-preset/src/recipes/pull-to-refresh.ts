import { vars } from "@seed-design/vars";
import { defineRecipe } from "../utils/define-recipe";
import { pseudo } from "../utils/pseudo";

const pullToRefresh = defineRecipe({
  name: "pull-to-refresh",
  slots: ["root", "indicator"],
  base: {
    root: {
      "--ptr-size": "44px",
      "--ptr-transition-duration": vars.$duration.d6,

      height: "100%",
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      transform: "translateY(min(calc(var(--ptr-displacement, 0) - var(--ptr-size)), 0px))",
      transition: `transform ${vars.$duration.d6}`,

      [pseudo("[data-ptr-dragging]")]: {
        transition: "none",
      },
    },
  },
  variants: {},
  defaultVariants: {},
});

export default pullToRefresh;
