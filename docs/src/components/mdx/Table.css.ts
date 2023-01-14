import { vars } from "@seed-design/design-token";
import { style } from "@vanilla-extract/css";

import * as m from "../../styles/media.css";

export const table = style([
  {
    display: "inline-block",
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0px",
    borderRadius: "8px",
    boxShadow: `0 0 0 1px ${vars.$scale.color.gray100}`,
    overflowX: "auto",
  },

  m.xsmall({
    display: "table",
  }),
]);

export const tableCell = style([
  {
    border: `1px solid ${vars.$scale.color.gray100}`,
    padding: "12px 24px",
    fontSize: "12px",
  },

  m.xsmall({
    fontSize: "14px",
    padding: "12px 16px",
  }),

  m.small({
    fontSize: "16px",
    padding: "16px 30px",
  }),
]);

export const tableHead = style([
  {
    fontWeight: "600",
    backgroundColor: vars.$scale.color.gray100,
  },
]);

export const tableBody = style({});

export const tableRow = style({});

export const tableData = style([tableCell, {}]);
