import { vars } from "@seed-design/design-token";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import * as m from "../styles/media.css";
import * as t from "../styles/token.css";
import * as u from "../styles/utils.css";

export const content = style([t.content]);

export const markdown = style({});

globalStyle(`${markdown} > *:first-child`, {
  marginTop: "60px",
});

export const title = style([t.documentHeading1, { marginTop: "0px" }]);

export const titleContainer = style([
  u.flex,
  {
    alignItems: "flex-start",
  },
]);

export const primitiveLink = style([
  u.flexCenter,
  {
    backgroundColor: vars.$semantic.color.primaryLow,
    color: vars.$semantic.color.primary,

    padding: "4px 8px",
    borderRadius: "4px",

    marginTop: "18px",
    marginLeft: "18px",

    cursor: "pointer",
    transition: "background-color 0.2s ease",

    ":hover": {
      backgroundColor: vars.$semantic.color.primaryLowHover,
    },
  },
]);

export const primitiveText = style({
  marginLeft: "2px",
  fontWeight: "700",
});

export const subTitle = style([t.documentHeading2]);

export const titleDescription = style([t.documentCaption1]);

export const thumbnail = style([
  u.flexAlignCenter,
  {
    width: "100%",
    objectFit: "cover",
  },
]);

export const progressContainer = style([
  u.flexAlignCenter,
  {
    width: "100%",
    gap: "16px",
    flexWrap: "wrap",
    flexDirection: "column",
    marginBottom: "20px",
  },

  m.xsmall({
    flexDirection: "row",
  }),

  m.small({
    marginBottom: "0px",
  }),
]);

export const progress = recipe({
  base: [
    u.flexCenter,
    {
      flex: "1",
      justifyContent: "space-between",
      whiteSpace: "nowrap",

      padding: "10px 22px",
      width: "100%",

      borderRadius: "10px",
      border: `1px solid ${vars.$scale.color.gray100}`,
    },

    m.small({
      marginBottom: "40px",
    }),
  ],

  variants: {
    disabled: {
      true: {
        color: vars.$scale.color.gray400,
        pointerEvents: "none",
      },

      false: {
        ":hover": {
          backgroundColor: vars.$scale.color.gray100,
        },
      },
    },
  },
});

export const progressLeft = style([
  u.flexAlignCenter,
  {
    gap: "12px",
  },
]);

export const progressName = style([
  {
    fontSize: "18px",
    fontWeight: "500",
  },
]);

export const progressStatus = style([
  {
    fontSize: "12px",
  },
]);

export const progressIcon = recipe({
  base: [],
  variants: {
    disabled: {
      true: {
        color: vars.$scale.color.gray400,
      },
    },
  },
});

export const progressStatusDone = style([
  {
    borderRadius: "12px",
    padding: "4px 8px",
    color: vars.$scale.color.green700,
    backgroundColor: vars.$scale.color.greenAlpha100,
  },
]);
export const progressStatusInProgress = style([
  {
    borderRadius: "12px",
    padding: "4px 8px",
    color: vars.$scale.color.carrot600,
    backgroundColor: vars.$scale.color.carrotAlpha100,
  },
]);
export const progressStatusTodo = style([{}]);
