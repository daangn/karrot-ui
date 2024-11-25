import { expect, test } from "vitest";
import type { Model } from "../types";
import { getTokenCss, stringifyTokenReference } from "./css";

test("stringifyTokenReference should stringify token expression", () => {
  const token = { type: "token" as const, group: ["color", "bg"], key: "layer-1" };

  const result = stringifyTokenReference(token);

  expect(result).toEqual("var(--seed-v3-color-bg-layer-1)");
});

test("getTokenCss should generate css code", () => {
  const models: Model[] = [
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
          "$unit.x1": {
            values: {
              default: "4px",
            },
          },
        },
      },
    },
  ];

  const result = getTokenCss(models, {
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
      --seed-v3-unit-x1: 4px;
    }"
  `);
});
