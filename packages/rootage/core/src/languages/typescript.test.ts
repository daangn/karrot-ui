import { expect, test } from "vitest";
import type { Model } from "../types";
import { getTokenTs } from "./typescript";

test("getTokenTs should generate typescript codes", () => {
  const models: Model[] = [
    {
      kind: "Tokens",
      metadata: {
        id: "2",
        name: "color",
      },
      data: {
        collection: "color",
        tokens: {
          "$color.palette.gray-00": {
            values: {
              light: "#ffffff",
              dark: "#000000",
            },
          },
          "$color.palette.gray-100": {
            values: {
              light: "#f8f9fa",
              dark: "#212529",
            },
          },
          "$color.bg.layer-1": {
            values: {
              light: "$color.palette.gray-00",
              dark: "$color.palette.gray-00",
            },
          },
        },
      },
    },
    {
      kind: "Tokens",
      metadata: {
        id: "3",
        name: "unit",
      },
      data: {
        collection: "global",
        tokens: {
          "$unit.x1_5": {
            values: {
              default: "6px",
            },
          },
        },
      },
    },
  ];

  const result = getTokenTs(models);

  expect(result).toMatchInlineSnapshot(`
    [
      {
        "code": "export const gray00 = \\"var(--seed-v3-color-palette-gray-00)\\";
    export const gray100 = \\"var(--seed-v3-color-palette-gray-100)\\";",
        "path": "color/palette",
      },
      {
        "code": "export const layer1 = \\"var(--seed-v3-color-bg-layer-1)\\";",
        "path": "color/bg",
      },
      {
        "code": "export const x1_5 = \\"var(--seed-v3-unit-x1_5)\\";",
        "path": "unit",
      },
    ]
  `);
});
