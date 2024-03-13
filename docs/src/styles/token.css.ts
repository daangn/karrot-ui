import { classNames, vars } from "@seed-design/design-token";
import { style } from "@vanilla-extract/css";

import * as m from "./media.css";

export const main = style([
  {
    position: "relative",
    width: "100%",
    maxWidth: "1440px",
    display: "flex",
    margin: "auto",
  },

  m.large({
    columnGap: "20px",
  }),

  m.xlarge({
    maxWidth: "1600px",
    columnGap: "40px",
  }),
]);

export const content = style([
  {
    maxWidth: "900px",
    minHeight: "calc(100vh)",
    width: "100%",
    margin: "80px auto",
    padding: "0px 20px",

    wordBreak: "keep-all",
    overflowWrap: "break-word",
    lineHeight: "1.7",
    letterSpacing: "-0.04px",
  },

  m.medium({
    padding: "0px",
    paddingLeft: "20px",
  }),

  m.large({
    margin: "130px 0px",
  }),
]);

// NOTE: heading 1에는 margin top이 들어가지 않음. (보통 페이지 최상단에 위치하기 때문)
export const documentHeading1 = style([
  classNames.$semantic.typography.h1,
  {
    fontSize: "50px",
    marginTop: "0px",
  },

  m.small({
    fontSize: "66px",
    fontWeight: 700,
  }),
]);

export const documentHeading2 = style([
  classNames.$semantic.typography.h2,
  {
    fontSize: "32px",
    marginTop: "120px",
    marginBottom: "20px",
    fontWeight: 700,
  },
  m.small({
    marginTop: "120px",
    fontSize: "34px",
  }),
]);

export const documentHeading3 = style([
  classNames.$semantic.typography.h3,
  {
    fontSize: "20px",
    marginTop: "20px",
  },
  m.small({
    fontWeight: 700,
    fontSize: "20px",
    marginTop: "30px",
  }),
]);

export const documentHeading4 = style([
  classNames.$semantic.typography.h4,
  {
    fontSize: "20px",
    fontWeight: 700,
    marginTop: "20px",
  },

  m.small({
    marginTop: "35px",
  }),
]);

export const documentParagraph = style([
  classNames.$semantic.typography.bodyL1Regular,
  {
    fontSize: "16px",
    marginTop: "10px",
  },

  m.small({
    fontSize: "18px",
  }),
]);

export const documentCaption1 = style([
  classNames.$semantic.typography.title2Bold,
  {
    color: vars.$scale.color.gray500,
    fontSize: "18px",
  },
  m.small({
    fontSize: "20px",
  }),
]);

export const documentCaption2 = style([
  classNames.$semantic.typography.bodyL1Regular,
  {
    color: vars.$scale.color.gray600,
    fontSize: "16px",
  },
  m.small({
    fontSize: "18px",
  }),
]);
