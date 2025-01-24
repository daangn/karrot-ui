import { describe, expect, it, test } from "vitest";
import YAML from "yaml";
import { parse } from "../parse";
import type { Model } from "../types";
import { getComponentSpecDts, getComponentSpecMjs, getTokenDts, getTokenMjs } from "./typescript";

describe("getTokenMjs", () => {
  it("should generate esm definitions", () => {
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
          name: "dimension",
        },
        data: {
          collection: "global",
          tokens: {
            "$dimension.s1_5": {
              values: {
                default: "6px",
              },
            },
          },
        },
      },
    ];

    const result = getTokenMjs(parse(models));

    expect(result).toMatchInlineSnapshot(`
    [
      {
        "code": "export * as palette from \\"./palette.mjs\\";
    export * as bg from \\"./bg.mjs\\";",
        "path": "color/index.mjs",
      },
      {
        "code": "export const gray00 = \\"var(--seed-v3-color-palette-gray-00)\\";
    export const gray100 = \\"var(--seed-v3-color-palette-gray-100)\\";",
        "path": "color/palette.mjs",
      },
      {
        "code": "export const layer1 = \\"var(--seed-v3-color-bg-layer-1)\\";",
        "path": "color/bg.mjs",
      },
      {
        "code": "export const s1_5 = \\"var(--seed-v3-dimension-s1_5)\\";",
        "path": "dimension.mjs",
      },
    ]
  `);
  });

  it("should generate esm definitions with nesting", () => {
    const models: Model[] = [
      {
        kind: "Tokens",
        metadata: {
          id: "1",
          name: "dimension",
        },
        data: {
          collection: "global",
          tokens: {
            "$dimension.s1_5": {
              values: {
                default: "6px",
              },
            },
            "$dimension.spacing-x.default": {
              values: {
                default: "$dimension.s1_5",
              },
            },
            "$dimension.spacing-x.test.value": {
              values: {
                default: "$dimension.s1_5",
              },
            },
          },
        },
      },
    ];

    const result = getTokenMjs(parse(models));

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "code": "export const s1_5 = \\"var(--seed-v3-dimension-s1_5)\\";

      export * as spacingX from \\"./spacing-x/index.mjs\\";",
          "path": "dimension/index.mjs",
        },
        {
          "code": "export const default = \\"var(--seed-v3-dimension-spacing-x-default)\\";

      export * as test from \\"./test.mjs\\";",
          "path": "dimension/spacing-x/index.mjs",
        },
        {
          "code": "export const value = \\"var(--seed-v3-dimension-spacing-x-test-value)\\";",
          "path": "dimension/spacing-x/test.mjs",
        },
      ]
    `);
  });
});

describe("getTokenDts", () => {
  it("should generate typescript definitions", () => {
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
          name: "dimension",
        },
        data: {
          collection: "global",
          tokens: {
            "$dimension.s1_5": {
              values: {
                default: "6px",
              },
            },
          },
        },
      },
    ];

    const result = getTokenDts(parse(models));

    expect(result).toMatchInlineSnapshot(`
    [
      {
        "code": "export * as palette from \\"./palette\\";
    export * as bg from \\"./bg\\";",
        "path": "color/index.d.ts",
      },
      {
        "code": "export declare const gray00 = \\"var(--seed-v3-color-palette-gray-00)\\";
    export declare const gray100 = \\"var(--seed-v3-color-palette-gray-100)\\";",
        "path": "color/palette.d.ts",
      },
      {
        "code": "export declare const layer1 = \\"var(--seed-v3-color-bg-layer-1)\\";",
        "path": "color/bg.d.ts",
      },
      {
        "code": "export declare const s1_5 = \\"var(--seed-v3-dimension-s1_5)\\";",
        "path": "dimension.d.ts",
      },
    ]
  `);
  });

  it("should generate typescript definitions with nesting", () => {
    const models: Model[] = [
      {
        kind: "Tokens",
        metadata: {
          id: "1",
          name: "dimension",
        },
        data: {
          collection: "global",
          tokens: {
            "$dimension.s1_5": {
              values: {
                default: "6px",
              },
            },
            "$dimension.spacing-x.default": {
              values: {
                default: "$dimension.s1_5",
              },
            },
          },
        },
      },
    ];

    const result = getTokenDts(parse(models));

    expect(result).toMatchInlineSnapshot(`
    [
      {
        "code": "export declare const s1_5 = \\"var(--seed-v3-dimension-s1_5)\\";

    export * as spacingX from \\"./spacing-x\\";",
        "path": "dimension/index.d.ts",
      },
      {
        "code": "export declare const default = \\"var(--seed-v3-dimension-spacing-x-default)\\";",
        "path": "dimension/spacing-x.d.ts",
      },
    ]
  `);
  });
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

  const result = getComponentSpecMjs(parse(models), "test");

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

  const result = getComponentSpecDts(parse(models), "test");

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
