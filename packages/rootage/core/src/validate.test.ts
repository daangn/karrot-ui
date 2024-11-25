import { describe, expect, it, test } from "vitest";
import { validateModels } from "./validate";
import type { Model, TokensData } from "./types";

describe("validateModels", () => {
  it("should return true for valid models", () => {
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
        ],
      },
      {
        kind: "Tokens",
        metadata: {
          id: "2",
          name: "tokens",
        },
        data: {
          collection: "color",
          tokens: {
            "$color.bg.layer-1": {
              values: {
                light: "#ffffff",
                dark: "#000000",
              },
            },
          },
        },
      },
      {
        kind: "ComponentSpec",
        metadata: {
          id: "3",
          name: "component",
        },
        data: {
          base: {
            default: {
              default: {
                color: "$color.bg.layer-1",
              },
            },
          },
        },
      },
    ];

    const result = validateModels(models);

    expect(result.valid).toEqual(true);
  });

  it("should return false if token collection is not defined", () => {
    const models: Model[] = [
      {
        kind: "Tokens",
        metadata: {
          id: "2",
          name: "tokens",
        },
        data: {
          collection: "color",
          tokens: {
            "$color.bg.layer-1": {
              values: {
                light: "#ffffff",
                dark: "#000000",
              },
            },
          },
        },
      },
    ];

    const result = validateModels(models);

    expect(result.valid).toEqual(false);
  });

  it("should return false if mode is not defined in token collection", () => {
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
            modes: ["light"],
          },
        ],
      },
      {
        kind: "Tokens",
        metadata: {
          id: "2",
          name: "tokens",
        },
        data: {
          collection: "color",
          tokens: {
            "$color.bg.layer-1": {
              values: {
                light: "#ffffff",
                dark: "#000000",
              },
            },
          },
        },
      },
    ];

    const result = validateModels(models);

    expect(result.valid).toEqual(false);
  });

  it("should return false if referenced token is not defined - Tokens", () => {
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
            modes: ["light"],
          },
        ],
      },
      {
        kind: "Tokens",
        metadata: {
          id: "2",
          name: "tokens",
        },
        data: {
          collection: "color",
          tokens: {
            "$color.bg.layer-1": {
              values: {
                light: "$color.bg.layer-2",
              },
            },
          },
        },
      },
    ];

    const result = validateModels(models);

    expect(result.valid).toEqual(false);
  });

  it("should return false if referenced token is not defined - ComponentSpec", () => {
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
            modes: ["light"],
          },
        ],
      },
      {
        kind: "ComponentSpec",
        metadata: {
          id: "3",
          name: "component",
        },
        data: {
          base: {
            default: {
              default: {
                color: "$color.bg.layer-1",
              },
            },
          },
        },
      },
    ];

    const result = validateModels(models);

    expect(result.valid).toEqual(false);
  });
});
