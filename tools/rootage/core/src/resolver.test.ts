import { describe, expect, it } from "vitest";
import { buildContext } from "./context";
import { parse } from "./parse";
import { resolveToken } from "./resolver";
import type { ResolvedTokenResult, TokensModel } from "./types";

const buildRootage = (models: TokensModel[]) => {
  const parsed = parse(models);
  return buildContext(parsed);
};

describe("resolveToken", () => {
  it("should resolve value as is", () => {
    const input: TokensModel = {
      kind: "Tokens",
      metadata: {
        name: "tokens",
        id: "id",
      },
      data: {
        collection: "global",
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

    const parsed = buildRootage([input]);
    const result1 = resolveToken(
      parsed,
      { type: "token", group: [], key: "size-1" },
      { global: "default" },
    );
    const result2 = resolveToken(
      parsed,
      { type: "token", group: [], key: "duration-1" },
      { global: "default" },
    );

    expect(result1).toEqual({
      path: ["$size-1"],
      value: { type: "dimension", value: 4, unit: "px" },
    } satisfies ResolvedTokenResult);
    expect(result2).toEqual({
      path: ["$duration-1"],
      value: { type: "duration", value: 50, unit: "ms" },
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
    };

    const parsed = buildRootage([input]);
    const resultLight = resolveToken(
      parsed,
      { type: "token", group: ["color", "bg"], key: "layer-1" },
      { color: "light" },
    );
    const resultDark = resolveToken(
      parsed,
      { type: "token", group: ["color", "bg"], key: "layer-1" },
      { color: "dark" },
    );

    expect(resultLight).toEqual({
      path: ["$color.bg.layer-1", "$color.palette.gray-00"],
      value: { type: "color", value: "#ffffff" },
    } satisfies ResolvedTokenResult);
    expect(resultDark).toEqual({
      path: ["$color.bg.layer-1", "$color.palette.gray-00"],
      value: { type: "color", value: "#000000" },
    } satisfies ResolvedTokenResult);
  });

  it("should track multiple reference", () => {
    const input: TokensModel = {
      kind: "Tokens",
      metadata: {
        name: "tokens",
        id: "id",
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
          "$color.bg.layer-default": {
            values: {
              light: "$color.bg.layer-1",
              dark: "$color.bg.layer-1",
            },
          },
        },
      },
    };

    const parsed = buildRootage([input]);
    const resultLight = resolveToken(
      parsed,
      { type: "token", group: ["color", "bg"], key: "layer-default" },
      { color: "light" },
    );
    const resultDark = resolveToken(
      parsed,
      { type: "token", group: ["color", "bg"], key: "layer-default" },
      { color: "dark" },
    );

    expect(resultLight).toEqual({
      path: ["$color.bg.layer-default", "$color.bg.layer-1", "$color.palette.gray-00"],
      value: { type: "color", value: "#ffffff" },
    } satisfies ResolvedTokenResult);
    expect(resultDark).toEqual({
      path: ["$color.bg.layer-default", "$color.bg.layer-1", "$color.palette.gray-00"],
      value: { type: "color", value: "#000000" },
    } satisfies ResolvedTokenResult);
  });
});
