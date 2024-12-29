import { expect, test } from "vitest";
import YAML from "yaml";
import { buildRootage } from "../build";
import type { Model } from "../types";
import { getComponentSpecDts, getComponentSpecMjs, getTokenDts, getTokenMjs } from "./typescript";

test("getTokenMjs should generate esm definitions", () => {
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
          "$unit.s1_5": {
            values: {
              default: "6px",
            },
          },
        },
      },
    },
  ];

  const result = getTokenMjs(buildRootage(models));

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
        "code": "export const s1_5 = \\"var(--seed-v3-unit-s1_5)\\";",
        "path": "unit",
      },
    ]
  `);
});

test("getTokenDts should generate typescript definitions", () => {
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
          "$unit.s1_5": {
            values: {
              default: "6px",
            },
          },
        },
      },
    },
  ];

  const result = getTokenDts(buildRootage(models));

  expect(result).toMatchInlineSnapshot(`
    [
      {
        "code": "export declare const gray00 = \\"var(--seed-v3-color-palette-gray-00)\\";
    export declare const gray100 = \\"var(--seed-v3-color-palette-gray-100)\\";",
        "path": "color/palette",
      },
      {
        "code": "export declare const layer1 = \\"var(--seed-v3-color-bg-layer-1)\\";",
        "path": "color/bg",
      },
      {
        "code": "export declare const s1_5 = \\"var(--seed-v3-unit-s1_5)\\";",
        "path": "unit",
      },
    ]
  `);
});

test("getComponentSpecMjs should generate esm definitions", () => {
  const yaml = `
kind: ComponentSpec
metadata:
  id: test
  name: test
data:
  base:
    enabled:
      root:
        color: "#ffffff"
  variant=primary:
    enabled:
      root:
        color: "#000000"
`;
  const models = [YAML.parse(yaml)];

  const result = getComponentSpecMjs(buildRootage(models), "test");

  expect(result).toMatchInlineSnapshot(`
    "export const vars = {
      \\"base\\": {
        \\"enabled\\": {
          \\"root\\": {
            \\"color\\": \\"#ffffff\\"
          }
        }
      },
      \\"variantPrimary\\": {
        \\"enabled\\": {
          \\"root\\": {
            \\"color\\": \\"#000000\\"
          }
        }
      }
    }"
  `);
});

test("getComponentSpecDts should generate typescript definitions", () => {
  const yaml = `
kind: ComponentSpec
metadata:
  id: test
  name: test
data:
  base:
    enabled:
      root:
        color: "#ffffff"
  variant=primary:
    enabled:
      root:
        color: "#000000"
`;
  const models = [YAML.parse(yaml)];

  const result = getComponentSpecDts(buildRootage(models), "test");

  expect(result).toMatchInlineSnapshot(`
    "export declare const vars: {
      \\"base\\": {
        \\"enabled\\": {
          \\"root\\": {
            \\"color\\": \\"#ffffff\\"
          }
        }
      },
      \\"variantPrimary\\": {
        \\"enabled\\": {
          \\"root\\": {
            \\"color\\": \\"#000000\\"
          }
        }
      }
    }"
  `);
});
