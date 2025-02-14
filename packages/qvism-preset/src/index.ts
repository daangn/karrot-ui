import { keyframes } from "./keyframes";
import { patterns } from "./patterns";
import { recipes } from "./recipes";
import { tokens } from "./tokens";

export default {
  theme: {
    tokens,
    recipes,
    keyframes,
    patterns,
  },
  globalCss: {
    ":root": {
      "--seed-safe-area-top": "0px",
      "--seed-safe-area-bottom": "0px",

      "@supports (left: constant(safe-area-inset-left))": {
        "--seed-safe-area-top": "constant(safe-area-inset-top)",
        "--seed-safe-area-bottom": "constant(safe-area-inset-bottom)",
      },

      "@supports (left: env(safe-area-inset-left))": {
        "--seed-safe-area-top": "env(safe-area-inset-top)",
        "--seed-safe-area-bottom": "env(safe-area-inset-bottom)",
      },
    },
  },
};
