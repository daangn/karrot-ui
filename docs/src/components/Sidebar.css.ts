import { vars } from "@seed-design/design-token";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import * as m from "../styles/media.css";
import * as u from "../styles/utils.css";

const SIDEBAR_WIDTH = "250px";

const slideIn = keyframes({
  "0%": {
    transform: "translateX(-80px)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const sidebar = recipe({
  base: [
    u.flexColumn,
    u.topLayer,

    {
      position: "fixed",
      top: 0,

      animation: `${slideIn} 0.2s ease`,
      background: vars.$semantic.color.paperDefault,
      paddingLeft: "20px",

      width: SIDEBAR_WIDTH,
      height: "100vh",
      transition:
        "background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease, transform 0.2s ease",
    },

    m.large({
      display: "none",
    }),
  ],

  variants: {
    open: {
      true: {
        opacity: 1,
        transform: "translateX(0)",
      },
      false: {
        opacity: 0,
        transform: "translateX(-80px)",
      },
    },
  },
});

export const sidebarDesktop = style([
  u.flexColumn,
  u.topLayer,
  {
    display: "none",
    position: "fixed",
    top: 0,

    background: vars.$semantic.color.paperDefault,
    paddingLeft: "20px",

    width: SIDEBAR_WIDTH,
    height: "100vh",
    transition: "background-color 0.2s ease, color 0.2s ease",
  },

  m.large({
    display: "flex",
    position: "sticky",
    top: 80,
    left: 0,
    paddingLeft: "30px",
    height: "calc(100vh - 80px)",
    zIndex: 1,
  }),
]);

export const sidebarLogo = style([
  {
    paddingLeft: "10px",
    marginBottom: "40px",
  },
]);

export const sidebarItemContainer = style([
  u.flexColumn,
  {
    position: "absolute",

    padding: "30px 0px",
    height: "100%",
    overflowY: "auto",
    overscrollBehavior: "contain",
  },

  m.large({
    top: 0,
  }),
]);

export const sidebarTitle = style([
  {
    fontSize: "24px",
    fontWeight: 700,

    width: `calc(${SIDEBAR_WIDTH} - 20px)`,
    transition: "color 0.2s ease",
    color: vars.$scale.color.gray900,
    paddingLeft: "10px",
    marginTop: "40px",
    marginBottom: "4px",
  },
]);

export const sidebarGroupContainer = style({
  marginTop: "6px",
  marginBottom: "10px",

  paddingInlineStart: "0px",
});

export const sidebarGroupTitle = style({
  fontSize: "12px",
  fontWeight: 600,
  color: vars.$scale.color.gray500,
  paddingLeft: "10px",
  marginTop: "10px",
});

export const sidebarItem = recipe({
  base: [
    u.flexAlignCenter,
    {
      width: `calc(${SIDEBAR_WIDTH} - 56px)`,
      height: "32px",
      fontSize: "16px",
      color: vars.$scale.color.gray700,
      transition: "background 0.2s ease",
      paddingLeft: "10px",
      marginTop: "6px",
      borderRadius: "4px",

      paddingInlineStart: "10px",

      ":hover": {
        backgroundColor: vars.$scale.color.grayAlpha50,
      },
    },
  ],

  variants: {
    highlight: {
      true: [
        {
          fontWeight: "bold",
          color: vars.$semantic.color.primary,
          backgroundColor: vars.$semantic.color.primaryLow,

          ":hover": {
            backgroundColor: vars.$semantic.color.primaryLowActive,
          },
        },
      ],
    },

    disable: {
      true: {
        color: vars.$scale.color.gray400,
      },
    },
  },
});

export const sidebarItemLink = recipe({
  variants: {
    disable: {
      true: {
        pointerEvents: "none",
      },
    },
  },
});

export const overlay = recipe({
  base: [
    u.flexCenter,
    u.middleLayer,
    {
      position: "fixed",
      top: 0,
      right: 0,

      height: "100%",
      width: "100vw",

      transition: "opacity 0.2s ease",
      backgroundColor: vars.$semantic.color.overlayDim,
      backdropFilter: "blur(2px)",
    },

    m.large({
      display: "none",
    }),
  ],

  variants: {
    open: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});
