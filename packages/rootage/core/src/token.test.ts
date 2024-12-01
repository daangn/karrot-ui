import { describe, expect, it } from "vitest";
import { isTokenRef, parseTokenExpression, parseTokensModel } from "./token";
import type { TokensModel } from "./types";

describe("isTokenRef", () => {
  it("should return true for token expression", () => {
    const expression = "$color.bg.layer-1";

    const result = isTokenRef(expression);

    expect(result).toEqual(true);
  });

  it("should return false for non-token expression", () => {
    const expression = "color.bg.layer-1";

    const result = isTokenRef(expression);

    expect(result).toEqual(false);
  });
});

describe("parseTokenExpression", () => {
  it("should parse token expression", () => {
    const expression = "$color.bg.layer-1";

    const result = parseTokenExpression(expression);

    expect(result).toEqual({ type: "token", group: ["color", "bg"], key: "layer-1" });
  });

  it("should reject invalid token expression", () => {
    const expression = "color.bg.layer-1";

    // @ts-expect-error
    expect(() => parseTokenExpression(expression)).toThrowError("Invalid token format");
  });
});

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
    };

    const result = parseTokensModel(input);

    expect(result).toEqual([
      {
        collection: "collection",
        token: { type: "token", group: ["color", "palette"], key: "gray-00" },
        values: [
          { mode: "light", value: { type: "color", value: "#ffffff" } },
          { mode: "dark", value: { type: "color", value: "#000000" } },
        ],
      },
      {
        collection: "collection",
        token: { type: "token", group: ["color", "bg"], key: "layer-1" },
        values: [
          { mode: "light", value: { type: "token", group: ["color", "palette"], key: "gray-00" } },
          { mode: "dark", value: { type: "token", group: ["color", "palette"], key: "gray-00" } },
        ],
      },
    ]);
  });
});
