import { expect, test } from "vitest";
import type { Model, TokensModel } from "../types";
import { getJsonSchema } from "./jsonschema";
import { parse } from "../parse";

test("getJsonSchema should generate jsonschema for component spec", () => {
  const models: TokensModel[] = [
    {
      kind: "Tokens",
      metadata: {
        id: "2",
        name: "color",
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
          "$color.palette.gray-100": {
            values: {
              light: "#f8f9fa",
              dark: "#212529",
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
    },
    {
      kind: "Tokens",
      metadata: {
        id: "3",
        name: "unit",
      },
      data: {
        collection: "global",
        tokens: {
          "$unit.x1_5": {
            values: {
              default: "6px",
            },
          },
        },
      },
    },
  ];

  const result = getJsonSchema(parse(models));

  expect(result).toMatchInlineSnapshot(`
    "{
      \\"$schema\\": \\"http://json-schema.org/draft-07/schema#\\",
      \\"title\\": \\"ComponentSpecModel\\",
      \\"type\\": \\"object\\",
      \\"properties\\": {
        \\"kind\\": {
          \\"type\\": \\"string\\",
          \\"const\\": \\"ComponentSpec\\"
        },
        \\"metadata\\": {
          \\"type\\": \\"object\\",
          \\"properties\\": {
            \\"id\\": {
              \\"type\\": \\"string\\"
            },
            \\"name\\": {
              \\"type\\": \\"string\\"
            }
          },
          \\"required\\": [\\"id\\", \\"name\\"],
          \\"additionalProperties\\": false
        },
        \\"data\\": {
          \\"type\\": \\"object\\",
          \\"properties\\": {
            \\"base\\": {
              \\"$ref\\": \\"#/definitions/variant\\"
            }
          },
          \\"patternProperties\\": {
            \\"^.*=.*$\\": {
              \\"$ref\\": \\"#/definitions/variant\\"
            }
          },
          \\"additionalProperties\\": false
        }
      },
      \\"required\\": [\\"kind\\", \\"metadata\\", \\"data\\"],
      \\"additionalProperties\\": false,
      \\"definitions\\": {
        \\"variant\\": {
          \\"type\\": \\"object\\",
          \\"additionalProperties\\": {
            \\"$ref\\": \\"#/definitions/state\\"
          }
        },
        \\"state\\": {
          \\"type\\": \\"object\\",
          \\"additionalProperties\\": {
            \\"$ref\\": \\"#/definitions/slot\\"
          }
        },
        \\"slot\\": {
          \\"type\\": \\"object\\",
          \\"additionalProperties\\": {
            \\"$ref\\": \\"#/definitions/righthandValue\\"
          }
        },
        \\"righthandValue\\": {
          \\"anyOf\\": [
            {
              \\"$ref\\": \\"#/definitions/colorShorthand\\"
            },
            {
              \\"$ref\\": \\"#/definitions/dimensionShorthand\\"
            },
            {
              \\"$ref\\": \\"#/definitions/numberShorthand\\"
            },
            {
              \\"$ref\\": \\"#/definitions/cubicBezier\\"
            },
            {
              \\"$ref\\": \\"#/definitions/shadow\\"
            },
            {
              \\"$ref\\": \\"#/definitions/tokenRef\\"
            }
          ]
        },
        \\"colorShorthand\\": {
          \\"type\\": \\"string\\",
          \\"pattern\\": \\"^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$\\"
        },
        \\"dimensionShorthand\\": {
          \\"type\\": \\"string\\",
          \\"pattern\\": \\"^\\\\\\\\d+(\\\\\\\\.\\\\\\\\d+)?(px|rem)$\\"
        },
        \\"numberShorthand\\": {
          \\"type\\": \\"number\\"
        },
        \\"cubicBezier\\": {
          \\"type\\": \\"object\\",
          \\"properties\\": {
            \\"type\\": {
              \\"type\\": \\"string\\",
              \\"const\\": \\"cubicBezier\\"
            },
            \\"value\\": {
              \\"type\\": \\"array\\",
              \\"items\\": {
                \\"type\\": \\"number\\"
              },
              \\"minItems\\": 4,
              \\"maxItems\\": 4
            }
          },
          \\"required\\": [\\"type\\", \\"value\\"],
          \\"additionalProperties\\": false
        },
        \\"shadow\\": {
          \\"type\\": \\"object\\",
          \\"properties\\": {
            \\"type\\": {
              \\"type\\": \\"string\\",
              \\"const\\": \\"shadow\\"
            },
            \\"value\\": {
              \\"type\\": \\"array\\",
              \\"items\\": {
                \\"type\\": \\"object\\",
                \\"properties\\": {
                  \\"color\\": {
                    \\"$ref\\": \\"#/definitions/colorShorthand\\"
                  },
                  \\"offsetX\\": {
                    \\"$ref\\": \\"#/definitions/dimensionShorthand\\"
                  },
                  \\"offsetY\\": {
                    \\"$ref\\": \\"#/definitions/dimensionShorthand\\"
                  },
                  \\"blur\\": {
                    \\"$ref\\": \\"#/definitions/dimensionShorthand\\"
                  },
                  \\"spread\\": {
                    \\"$ref\\": \\"#/definitions/dimensionShorthand\\"
                  }
                },
                \\"required\\": [\\"color\\", \\"offsetX\\", \\"offsetY\\", \\"blur\\", \\"spread\\"],
                \\"additionalProperties\\": false
              }
            }
          },
          \\"required\\": [\\"type\\", \\"value\\"],
          \\"additionalProperties\\": false
        },
        \\"tokenRef\\": {
          \\"type\\": \\"string\\",
          \\"anyOf\\": [
            { \\"const\\": \\"$color.palette.gray-00\\" },
            { \\"const\\": \\"$color.palette.gray-100\\" },
            { \\"const\\": \\"$color.bg.layer-1\\" },
            { \\"const\\": \\"$unit.x1_5\\" }
          ]
        }
      }
    }"
  `);
});
