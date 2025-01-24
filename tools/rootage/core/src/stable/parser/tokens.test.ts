import { describe, expect, it } from "vitest";
import { parseTokensModel } from "./tokens";
import type { TokensModel } from "./document";
import * as factory from "./factory";

describe("parseTokensModel", () => {
  it("should parse token model", () => {
    const input: TokensModel = {
      kind: "Tokens",
      metadata: {
        name: "tokens",
        id: "id",
      },
      data: {
        collection: "collection",
        tokens: {
          "$color.palette.gray-00": {
            values: {
              light: {
                type: "color",
                value: "#ffffff",
              },
              dark: {
                type: "color",
                value: "#000000",
              },
            },
          },
          "$color.bg.layer-1": {
            values: {
              light: {
                type: "color",
                value: "$color.palette.gray-00",
              },
              dark: {
                type: "color",
                value: "$color.palette.gray-00",
              },
            },
          },
        },
      },
    };

    const result = parseTokensModel(input);

    expect(result).toEqual([
      factory.createColorTokenDeclaration(
        "collection",
        factory.createTokenLit(["color", "palette"], "gray-00"),
        [
          { mode: "light", value: factory.createColorHexLit("#ffffff") },
          { mode: "dark", value: factory.createColorHexLit("#000000") },
        ],
      ),
      factory.createColorTokenDeclaration(
        "collection",
        factory.createTokenLit(["color", "bg"], "layer-1"),
        [
          { mode: "light", value: factory.createTokenLit(["color", "palette"], "gray-00") },
          { mode: "dark", value: factory.createTokenLit(["color", "palette"], "gray-00") },
        ],
      ),
    ]);
  });

  it("should parse token model with description", () => {
    const input: TokensModel = {
      kind: "Tokens",
      metadata: {
        name: "tokens",
        id: "id",
      },
      data: {
        collection: "collection",
        tokens: {
          "$color.palette.gray-00": {
            description: "Gray color 0",
            values: {
              light: {
                type: "color",
                value: "#ffffff",
              },
              dark: {
                type: "color",
                value: "#000000",
              },
            },
          },
          "$color.bg.layer-1": {
            description: "Default background color",
            values: {
              light: {
                type: "color",
                value: "$color.palette.gray-00",
              },
              dark: {
                type: "color",
                value: "$color.palette.gray-00",
              },
            },
          },
        },
      },
    };

    const result = parseTokensModel(input);

    expect(result).toEqual([
      factory.createColorTokenDeclaration(
        "collection",
        factory.createTokenLit(["color", "palette"], "gray-00"),
        [
          { mode: "light", value: factory.createColorHexLit("#ffffff") },
          { mode: "dark", value: factory.createColorHexLit("#000000") },
        ],
        "Gray color 0",
      ),
      factory.createColorTokenDeclaration(
        "collection",
        factory.createTokenLit(["color", "bg"], "layer-1"),
        [
          { mode: "light", value: factory.createTokenLit(["color", "palette"], "gray-00") },
          { mode: "dark", value: factory.createTokenLit(["color", "palette"], "gray-00") },
        ],
        "Default background color",
      ),
    ]);
  });
});
