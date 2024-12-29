import { describe, expect, it } from "vitest";

import YAML from "yaml";
import { parseComponentSpecModel } from "./component-spec";

import type { ComponentSpecDeclaration } from "./types";

describe("parseComponentSpecData", () => {
  it("should parse base only", () => {
    const yaml = `
  kind: ComponentSpec
  metadata:
    id: test
    name: test
  data:
    base:
      enabled:
        root:
          color: "#ffffff"
  `;

    const parsed = parseComponentSpecModel(YAML.parse(yaml));

    const expected: ComponentSpecDeclaration = {
      id: "test",
      name: "test",
      data: [
        {
          key: {},
          state: [
            {
              key: ["enabled"],
              slot: [
                {
                  key: "root",
                  property: [
                    {
                      key: "color",
                      value: {
                        type: "color",
                        value: "#ffffff",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(parsed).toEqual(expected);
  });

  it("should parse base and variants", () => {
    const yaml = `
  kind: ComponentSpec
  metadata:
    id: test
    name: test
  data:
    base:
      enabled:
        root:
          color: "#ffffff"
    variant=primary:
      enabled:
        root:
          color: "#000000"
  `;

    const parsed = parseComponentSpecModel(YAML.parse(yaml));

    const expected: ComponentSpecDeclaration = {
      id: "test",
      name: "test",
      data: [
        {
          key: {},
          state: [
            {
              key: ["enabled"],
              slot: [
                {
                  key: "root",
                  property: [
                    {
                      key: "color",
                      value: {
                        type: "color",
                        value: "#ffffff",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: {
            variant: "primary",
          },
          state: [
            {
              key: ["enabled"],
              slot: [
                {
                  key: "root",
                  property: [
                    {
                      key: "color",
                      value: {
                        type: "color",
                        value: "#000000",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(parsed).toEqual(expected);
  });

  it("should parse compound state", () => {
    const yaml = `
  kind: ComponentSpec
  metadata:
    id: test
    name: test
  data:
    base:
      enabled,selected:
        root:
          color: "#ffffff"
  `;

    const parsed = parseComponentSpecModel(YAML.parse(yaml));

    const expected: ComponentSpecDeclaration = {
      id: "test",
      name: "test",
      data: [
        {
          key: {},
          state: [
            {
              key: ["enabled", "selected"],
              slot: [
                {
                  key: "root",
                  property: [
                    {
                      key: "color",
                      value: {
                        type: "color",
                        value: "#ffffff",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(parsed).toEqual(expected);
  });

  it("should parse compound variants", () => {
    const yaml = `
  kind: ComponentSpec
  metadata:
    id: test
    name: test
  data:
    base:
      enabled:
        root:
          color: "#ffffff"
    variant=primary,shape=rounded:
      enabled:
        root:
          color: "#000000"
  `;

    const parsed = parseComponentSpecModel(YAML.parse(yaml));

    const expected: ComponentSpecDeclaration = {
      id: "test",
      name: "test",
      data: [
        {
          key: {},
          state: [
            {
              key: ["enabled"],
              slot: [
                {
                  key: "root",
                  property: [
                    {
                      key: "color",
                      value: {
                        type: "color",
                        value: "#ffffff",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          key: {
            variant: "primary",
            shape: "rounded",
          },
          state: [
            {
              key: ["enabled"],
              slot: [
                {
                  key: "root",
                  property: [
                    {
                      key: "color",
                      value: {
                        type: "color",
                        value: "#000000",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(parsed).toEqual(expected);
  });

  it("should parse shadow", () => {
    const yaml = `
  kind: ComponentSpec
  metadata:
    id: test
    name: test
  data:
    base:
      enabled:
        root:
          shadow:
            type: shadow
            value:
              - offsetX: 0px
                offsetY: 3px
                blur: 8px
                spread: 0px
                color: "#00000026"
              - offsetX: 0px
                offsetY: 1px
                blur: 3px
                spread: 0px
                color: "#0000000f"
  `;

    const parsed = parseComponentSpecModel(YAML.parse(yaml));

    const expected: ComponentSpecDeclaration = {
      id: "test",
      name: "test",
      data: [
        {
          key: {},
          state: [
            {
              key: ["enabled"],
              slot: [
                {
                  key: "root",
                  property: [
                    {
                      key: "shadow",
                      value: {
                        type: "shadow",
                        value: [
                          {
                            color: "#00000026",
                            offsetX: { value: 0, unit: "px" },
                            offsetY: { value: 3, unit: "px" },
                            blur: { value: 8, unit: "px" },
                            spread: { value: 0, unit: "px" },
                          },
                          {
                            color: "#0000000f",
                            offsetX: { value: 0, unit: "px" },
                            offsetY: { value: 1, unit: "px" },
                            blur: { value: 3, unit: "px" },
                            spread: { value: 0, unit: "px" },
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(parsed).toEqual(expected);
  });
});
