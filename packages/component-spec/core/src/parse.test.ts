import { expect, test } from "vitest";

import YAML from "yaml";
import { parseComponent } from "./parse";

import type { ParsedComponentExpression } from "./types";

test("parse array", () => {
  const yaml = `
  base:
    enabled:
      root:
        height: 31px
        width: 51px
        shadow:
          - 0px 3px 8px 0px rgba(0, 0, 0, 0.15)
          - 0px 1px 3px 0px rgba(0, 0, 0, 0.06)
  `;

  const parsed = parseComponent(YAML.parse(yaml));

  const expected: ParsedComponentExpression = [
    {
      key: {},
      state: [
        {
          key: ["enabled"],
          slot: [
            {
              key: "root",
              property: [
                { key: "height", value: "31px" },
                { key: "width", value: "51px" },
                {
                  key: "shadow",
                  value: [
                    "0px 3px 8px 0px rgba(0, 0, 0, 0.15)",
                    "0px 1px 3px 0px rgba(0, 0, 0, 0.06)",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  expect(parsed).toEqual(expected);
});

test("parse array with token", () => {
  const yaml = `
  base:
    enabled:
      root:
        height: 31px
        width: 51px
        color: $color.bg.layer-1
        shadow:
          - 0px 3px 8px 0px rgba(0, 0, 0, 0.15)
          - 0px 1px 3px 0px rgba(0, 0, 0, 0.06)
          - $shadow.1
  `;

  const parsed = parseComponent(YAML.parse(yaml));

  const expected: ParsedComponentExpression = [
    {
      key: {},
      state: [
        {
          key: ["enabled"],
          slot: [
            {
              key: "root",
              property: [
                { key: "height", value: "31px" },
                { key: "width", value: "51px" },
                { key: "color", value: { category: "color", group: ["bg"], key: "layer-1" } },
                {
                  key: "shadow",
                  value: [
                    "0px 3px 8px 0px rgba(0, 0, 0, 0.15)",
                    "0px 1px 3px 0px rgba(0, 0, 0, 0.06)",
                    { category: "shadow", group: [], key: "1" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  expect(parsed).toEqual(expected);
});
