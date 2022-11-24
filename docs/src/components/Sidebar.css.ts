import { vars } from "@seed-design/design-token";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import * as m from "../styles/media.css";
import * as u from "../styles/utils.css";

const TRANSITION_DURATION = "0.2s";
const TRANSITION_TIMING_FUNCTION = "ease";
const SIDEBAR_WIDTH = "216px";

export const sidebar = recipe({
  base: [
    u.flexColumn,
    u.topLayer,
    {
      position: "fixed",
      top: 0,
      background: vars.$semantic.color.paperDefault,
      paddingLeft: "20px",

      transition: `
        background-color ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION},
        left ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION},
        transform ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION},
        z-index ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION}
      `,

      width: SIDEBAR_WIDTH,
      height: "100vh",
    },

    m.large({
      position: "sticky",
      left: 0,
      paddingLeft: "60px",
    }),

    m.xlarge({
      paddingLeft: "0px",
    }),
  ],

  variants: {
    open: {
      true: [
        u.topLayer,
        {
          left: "0px",
        },
      ],
      false: [
        u.backLayer,
        {
          left: `-${SIDEBAR_WIDTH}`,
        },

        m.large({
          zIndex: 100,
          left: "0px",
        }),
      ],
    },
  },
});

export const logo = style([
  u.cursorPointer,
  {
    marginTop: "20px",
    marginBottom: "30px",
  },
]);
export const logoCircle = style([
  {
    fill: vars.$scale.color.gray900,
  },
]);
export const logoText = style([
  {
    stroke: vars.$scale.color.gray900,
  },
]);

export const categoryTitle = style([
  {
    fontSize: "26px",
    fontWeight: 700,

    width: "200px",
    transition: "color 0.2s ease",
    color: vars.$scale.color.gray900,
    marginTop: "40px",

    ":hover": {
      color: vars.$semantic.color.primaryHover,
    },
  },
]);

export const sidebarTitleLink = recipe({
  base: [
    {
      color: vars.$scale.color.gray900,
      transition: "color 0.2s ease",

      ":hover": {
        color: vars.$semantic.color.primaryHover,
      },
    },
  ],

  variants: {
    highlight: {
      true: [
        {
          color: vars.$semantic.color.primary,
        },
      ],
    },
  },
});

export const sidebarLink = recipe({
  base: [
    u.flex,
    {
      width: "200px",
      color: vars.$scale.color.gray600,
      transition: "color 0.2s ease",
      marginTop: "10px",

      ":hover": {
        color: vars.$semantic.color.primaryHover,
      },
    },
  ],

  variants: {
    highlight: {
      true: [
        {
          color: vars.$semantic.color.primary,
        },
      ],
    },
  },
});

export const sidebarButton = style([
  u.cursorPointer,
  u.middleLayer,
  {
    position: "fixed",
    margin: "20px",
    padding: "6px",
    borderRadius: "50%",
    width: "34px",
    height: "34px",
    transition: "background-color 0.2s ease",

    ":hover": {
      backgroundColor: vars.$scale.color.gray200,
    },
  },

  m.large({
    display: "none",
  }),
]);

export const overlay = recipe({
  base: [
    u.flexCenter,
    {
      position: "fixed",
      top: 0,
      right: 0,

      height: "100vh",

      transition: `
        backgroundColor ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION},
        opacity ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION},
        z-index ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION},
        width ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION}
      `,
    },
  ],

  variants: {
    open: {
      true: [
        u.middleLayer,
        {
          backgroundColor: vars.$scale.color.grayAlpha500,
          opacity: 1,
          width: `calc(100vw - ${SIDEBAR_WIDTH})`,
        },

        m.large({
          zIndex: -1,
          backgroundColor: undefined,
          opacity: 0,
          width: "100vw",
        }),
      ],
      false: [
        u.backLayer,
        {
          backgroundColor: undefined,
          opacity: 0,
          width: "100vw",
        },
      ],
    },
  },
});
