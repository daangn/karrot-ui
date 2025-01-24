import { describe, expect, it } from "vitest";
import type * as Shorthand from "./shorthand-document";
import { transformTokensModel } from "./tokens";

describe("transformTokensModel", () => {
  it("should transform token model", () => {
    const input: Shorthand.TokensModel = {
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

    const result = transformTokensModel(input);

    expect(result).toEqual({
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
    });
  });

  it("should transform token model with description", () => {
    const input: Shorthand.TokensModel = {
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
              light: "#ffffff",
              dark: "#000000",
            },
          },
          "$color.bg.layer-1": {
            description: "Default background color",
            values: {
              light: "$color.palette.gray-00",
              dark: "$color.palette.gray-00",
            },
          },
        },
      },
    };

    const result = transformTokensModel(input);

    expect(result).toEqual({
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
    });
  });
});
