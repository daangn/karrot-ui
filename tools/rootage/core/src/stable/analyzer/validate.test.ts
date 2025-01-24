import { describe, expect, it } from "vitest";
import { parse } from "../parser/parse";
import type { Model } from "../parser/document";
import { buildContext } from "./context";
import { validate } from "./validate";

const buildRootage = (models: Model[]) => {
  const parsed = parse(models);
  return buildContext(parsed);
};

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
                light: { type: "color", value: "#ffffff" },
                dark: { type: "color", value: "#000000" },
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
        data: [
          {
            variants: {},
            definitions: [
              {
                states: ["default"],
                slots: {
                  default: {
                    color: { type: "color", value: "$color.bg.layer-1" },
                  },
                },
              },
            ],
          },
        ],
      },
    ];

    const result = validate(buildRootage(models));

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
                light: { type: "color", value: "#ffffff" },
                dark: { type: "color", value: "#000000" },
              },
            },
          },
        },
      },
    ];

    const result = validate(buildRootage(models));

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
                light: { type: "color", value: "#ffffff" },
                dark: { type: "color", value: "#000000" },
              },
            },
          },
        },
      },
    ];

    const result = validate(buildRootage(models));

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
                light: { type: "color", value: "$color.bg.layer-2" },
              },
            },
          },
        },
      },
    ];

    const result = validate(buildRootage(models));

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
        data: [
          {
            variants: {},
            definitions: [
              {
                states: ["default"],
                slots: {
                  default: {
                    color: { type: "color", value: "$color.bg.layer-1" },
                  },
                },
              },
            ],
          },
        ],
      },
    ];

    const result = validate(buildRootage(models));

    expect(result.valid).toEqual(false);
  });
});
