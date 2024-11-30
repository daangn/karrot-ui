import { describe, expect, it } from "vitest";
import { parse } from "./parse";
import { isTokenRef, parseTokenExpression, parseTokensModel, resolveToken } from "./token";
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

describe("resolveToken", () => {
  it("should resolve value as is", () => {
    const input: TokensModel = {
      kind: "Tokens",
      metadata: {
        name: "tokens",
        id: "id",
      },
      data: {
        collection: "collection",
        tokens: {
          "$size-1": {
            values: {
              default: "4px",
            },
          },
          "$duration-1": {
            values: {
              default: "50ms",
            },
          },
        },
      },
    };

    const parsed = parse([input]);
    const result1 = resolveToken(parsed, "$size-1");
    const result2 = resolveToken(parsed, "$duration-1");

    expect(result1).toEqual({
      collection: "collection",
      token: { type: "token", group: [], key: "size-1" },
      values: [{ mode: "default", value: { type: "dimension", value: 4, unit: "px" } }],
    });
    expect(result2).toEqual({
      collection: "collection",
      token: { type: "token", group: [], key: "duration-1" },
      values: [{ mode: "default", value: { type: "duration", value: 50, unit: "ms" } }],
    });
  });

  it("should resolve to referenced token type for token ref", () => {
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

    const parsed = parse([input]);
    const result = resolveToken(parsed, "$color.bg.layer-1");

    expect(result).toEqual({
      collection: "collection",
      token: { type: "token", group: ["color", "palette"], key: "gray-00" },
      values: [
        { mode: "light", value: { type: "color", value: "#ffffff" } },
        { mode: "dark", value: { type: "color", value: "#000000" } },
      ],
    });
  });
});
