import { expect, test } from "vitest";
import * as factory from "../parser/factory";
import { parse } from "../parser/parse";
import type * as Shorthand from "../transformer/shorthand-document";
import { getTokenCss, stringifyTokenReference, stringifyValueLit } from "./css";
import { transform } from "../transformer/transform";

test("stringifyTokenReference should stringify token expression", () => {
  const token = factory.createTokenLit(["color", "bg"], "layer-1");

  const result = stringifyTokenReference(token);

  expect(result).toEqual("var(--seed-v3-color-bg-layer-1)");
});

test("stringifyValueExpression should stringify shadow expression", () => {
  const shadow = factory.createShadowLit([
    factory.createShadowLayerLit(
      factory.createColorHexLit("#000000"),
      factory.createDimensionLit(2, "px"),
      factory.createDimensionLit(3, "px"),
      factory.createDimensionLit(4, "px"),
      factory.createDimensionLit(0, "px"),
    ),
  ]);

  const result = stringifyValueLit(shadow);

  expect(result).toEqual("2px 3px 4px 0px #000000");
});

test("stringifyValueExpression should stringify gradient expression", () => {
  const gradient = factory.createGradientLit([
    factory.createGradientStopLit(factory.createColorHexLit("#000000"), factory.createNumberLit(0)),
    factory.createGradientStopLit(factory.createColorHexLit("#ffffff"), factory.createNumberLit(1)),
  ]);

  const result = stringifyValueLit(gradient);

  expect(result).toEqual("#000000 0%, #ffffff 100%");
});

test("getTokenCss should generate css code", () => {
  const models: Shorthand.Model[] = [
    {
      kind: "TokenCollections",
      metadata: {
        id: "1",
        name: "collection",
      },
      data: [
        {
          name: "color",
          modes: ["light", "dark"],
        },
        {
          name: "global",
          modes: ["default"],
        },
      ],
    },
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
          "$dimension.s1": {
            values: {
              default: "4px",
            },
          },
        },
      },
    },
  ];

  const result = getTokenCss(parse(transform(models)), {
    banner: "",
    selectors: {
      global: {
        default: ":root",
      },
      color: {
        light: `:root[data-theme="light"]`,
        dark: `:root[data-theme="dark"]`,
      },
    },
  });

  expect(result).toMatchInlineSnapshot(`
    ":root[data-theme=\\"light\\"] {
      --seed-v3-color-palette-gray-00: #ffffff;
      --seed-v3-color-bg-layer-1: var(--seed-v3-color-palette-gray-00);
    }

    :root[data-theme=\\"dark\\"] {
      --seed-v3-color-palette-gray-00: #000000;
      --seed-v3-color-bg-layer-1: var(--seed-v3-color-palette-gray-00);
    }

    :root {
      --seed-v3-dimension-s1: 4px;
    }"
  `);
});
