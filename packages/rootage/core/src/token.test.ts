import { describe, expect, it, test } from "vitest";
import {
  isTokenExpression,
  parseTokenExpression,
  parseTokensData,
  stringifyTokenCssVar,
} from "./token";
import type { TokensData } from "./types";

describe("isTokenExpression", () => {
  it("should return true for token expression", () => {
    const expression = "$color.bg.layer-1";

    const result = isTokenExpression(expression);

    expect(result).toEqual(true);
  });

  it("should return false for non-token expression", () => {
    const expression = "color.bg.layer-1";

    const result = isTokenExpression(expression);

    expect(result).toEqual(false);
  });
});

describe("parseTokenExpression", () => {
  it("should parse token expression", () => {
    const expression = "$color.bg.layer-1";

    const result = parseTokenExpression(expression);

    expect(result).toEqual({ type: "token", group: ["color", "bg"], key: "layer-1" });
  });

  it("should parse token expression with numeric index", () => {
    const expression = "$unit[1]";

    const result = parseTokenExpression(expression);

    expect(result).toEqual({ type: "token", group: ["unit"], key: "1" });
  });

  it("should reject invalid token expression", () => {
    const expression = "color.bg.layer-1";

    expect(() => parseTokenExpression(expression)).toThrowError("Invalid token format");
  });
});

test("parseTokensData should parse tokens data", () => {
  const input: TokensData = {
    collection: "collection",
    tokens: {
      "$color.bg.layer-1": {
        values: {
          light: "#ffffff",
          dark: "#000000",
        },
      },
    },
  };

  const result = parseTokensData(input);

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

test("stringifyTokenCssVar should stringify token expression", () => {
  const token = { type: "token" as const, group: ["color", "bg"], key: "layer-1" };

  const result = stringifyTokenCssVar(token);

  expect(result).toEqual("var(--seed-v3-color-bg-layer-1)");
});
