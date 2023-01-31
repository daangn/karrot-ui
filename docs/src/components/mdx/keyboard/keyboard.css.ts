import { vars } from "@seed-design/design-token";
import { style } from "@vanilla-extract/css";

export const keyboard = style([
  {
    padding: "6px 8px",
    lineHeight: "2.3",
    borderRadius: "6px",
    border: `2px solid ${vars.$scale.color.gray900}`,
    margin: "0px 2px",
  },
]);

export const rightArrowCurvingLeftKey = style([
  keyboard,
  {
    fontFamily: "system-ui",
  },
]);
