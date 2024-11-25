import { expect, test } from "vitest";

import YAML from "yaml";
import { parseComponentSpecData } from "./component-spec";

import type { ComponentSpecExpression } from "./types";

test("parseComponentSpecData should parse base only", () => {
  const yaml = `
  base:
    enabled:
      root:
        color: "#ffffff"
  `;

  const parsed = parseComponentSpecData(YAML.parse(yaml));

  const expected: ComponentSpecExpression = [
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
  ];

  expect(parsed).toEqual(expected);
});

test("parseComponentSpecData should parse base and variants", () => {
  const yaml = `
  base:
    enabled:
      root:
        color: "#ffffff"
  variant=primary:
    enabled:
      root:
        color: "#000000"
  `;

  const parsed = parseComponentSpecData(YAML.parse(yaml));

  const expected: ComponentSpecExpression = [
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
  ];

  expect(parsed).toEqual(expected);
});

test("parseComponentSpecData should parse compound state", () => {
  const yaml = `
  base:
    enabled,selected:
      root:
        color: "#ffffff"
  `;

  const parsed = parseComponentSpecData(YAML.parse(yaml));

  const expected: ComponentSpecExpression = [
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
  ];

  expect(parsed).toEqual(expected);
});

test("parseComponentSpecData should parse compound variants", () => {
  const yaml = `
  base:
    enabled:
      root:
        color: "#ffffff"
  variant=primary,shape=rounded:
    enabled:
      root:
        color: "#000000"
  `;

  const parsed = parseComponentSpecData(YAML.parse(yaml));

  const expected: ComponentSpecExpression = [
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
  ];

  expect(parsed).toEqual(expected);
});

test("parseComponentSpecData should parse shadow", () => {
  const yaml = `
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

  const parsed = parseComponentSpecData(YAML.parse(yaml));

  const expected: ComponentSpecExpression = [
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
  ];

  expect(parsed).toEqual(expected);
});
