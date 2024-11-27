import { describe, expect, it, test } from "vitest";
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

test("parseTokensData should parse tokens data", () => {
  const input: TokensModel = {
    kind: "Tokens",
    metadata: {
      name: "tokens",
      id: "id",
    },
    data: {
      collection: "collection",
      tokens: {
        "$color.bg.layer-1": {
          values: {
            light: "#ffffff",
            dark: "#000000",
          },
        },
      },
    },
  };

  const result = parseTokensModel(input);

  expect(result).toEqual([
    {
      collection: "collection",
      token: { type: "token", group: ["color", "bg"], key: "layer-1" },
      values: [
        { mode: "light", value: { type: "color", value: "#ffffff" } },
        { mode: "dark", value: { type: "color", value: "#000000" } },
      ],
    },
  ]);
});
