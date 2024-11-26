import dedent from "dedent";
import { stringifyTokenExpression } from "../token";
import type { RootageAST } from "../types";

export function getJsonSchema(ast: RootageAST): string {
  const { tokens } = ast;
  const tokenNames = tokens.map((token) => stringifyTokenExpression(token.token));

  return dedent`{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "ComponentSpecModel",
    "type": "object",
    "properties": {
      "kind": {
        "type": "string",
        "const": "ComponentSpec"
      },
      "metadata": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        },
        "required": ["id", "name"],
        "additionalProperties": false
      },
      "data": {
        "type": "object",
        "properties": {
          "base": {
            "$ref": "#/definitions/variant"
          }
        },
        "patternProperties": {
          "^.*=.*$": {
            "$ref": "#/definitions/variant"
          }
        },
        "additionalProperties": false
      }
    },
    "required": ["kind", "metadata", "data"],
    "additionalProperties": false,
    "definitions": {
      "variant": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/state"
        }
      },
      "state": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/slot"
        }
      },
      "slot": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/righthandValue"
        }
      },
      "righthandValue": {
        "anyOf": [
          {
            "$ref": "#/definitions/colorShorthand"
          },
          {
            "$ref": "#/definitions/dimensionShorthand"
          },
          {
            "$ref": "#/definitions/numberShorthand"
          },
          {
            "$ref": "#/definitions/cubicBezier"
          },
          {
            "$ref": "#/definitions/shadow"
          },
          {
            "$ref": "#/definitions/tokenRef"
          }
        ]
      },
      "colorShorthand": {
        "type": "string",
        "pattern": "^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$"
      },
      "dimensionShorthand": {
        "type": "string",
        "pattern": "^\\d+(\\.\\d+)?(px|rem)$"
      },
      "numberShorthand": {
        "type": "number"
      },
      "cubicBezier": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "cubicBezier"
          },
          "value": {
            "type": "array",
            "items": {
              "type": "number"
            },
            "minItems": 4,
            "maxItems": 4
          }
        },
        "required": ["type", "value"],
        "additionalProperties": false
      },
      "shadow": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "shadow"
          },
          "value": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "color": {
                  "$ref": "#/definitions/colorShorthand"
                },
                "offsetX": {
                  "$ref": "#/definitions/dimensionShorthand"
                },
                "offsetY": {
                  "$ref": "#/definitions/dimensionShorthand"
                },
                "blur": {
                  "$ref": "#/definitions/dimensionShorthand"
                },
                "spread": {
                  "$ref": "#/definitions/dimensionShorthand"
                }
              },
              "required": ["color", "offsetX", "offsetY", "blur", "spread"],
              "additionalProperties": false
            }
          }
        },
        "required": ["type", "value"],
        "additionalProperties": false
      },
      "tokenRef": {
        "type": "string",
        "anyOf": [
          ${tokenNames.map((name) => `{ "const": "${name}" }`).join(",\n          ")}
        ]
      }
    }
  }`;
}
