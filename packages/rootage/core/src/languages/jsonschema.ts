import dedent from "dedent";
import { stringifyTokenExpression } from "../token";
import type { RootageCtx } from "../types";

export function getJsonSchema(ctx: RootageCtx): string {
  const { tokens } = ctx;

  const tokenAnnotations = tokens.map(({ token, values }) => {
    const title = stringifyTokenExpression(token);

    const readableValues = values.map(({ mode, value }) => {
      const readableValue = (() => {
        switch (value.type) {
          case "token":
            return stringifyTokenExpression(value);
          case "dimension":
            return `${value.value}${value.unit}`;
          case "duration":
            return `${value.value}${value.unit}`;
          case "cubicBezier":
            return value.value.join(", ");
          case "shadow":
            return value.value
              .map(
                ({ offsetX, offsetY, blur, spread, color }) =>
                  `${offsetX.value}${offsetX.unit} ${offsetY.value}${offsetY.unit} ${blur.value}${blur.unit} ${spread.value}${spread.unit} ${color}`,
              )
              .join(" / ");
          default:
            return `${value.value}`;
        }
      })();

      return { mode, value: readableValue };
    });

    return {
      title,
      description: readableValues.map(({ mode, value }) => `${mode}: ${value}`).join("\\n"),
      markdownDescription: readableValues
        .map(({ mode, value }) => `- ${mode}: \`${value}\``)
        .join("\\n\\n"),
    };
  });

  return dedent.withOptions({ escapeSpecialCharacters: false })`{
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
            "$ref": "#/definitions/durationShorthand"
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
      "durationShorthand": {
        "type": "string",
        "pattern": "^\\d+(\\.\\d+)?(s|ms)$"
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
          ${tokenAnnotations
            .map(
              (annotations) =>
                `{ ${[
                  `"const": "${annotations.title}"`,
                  ...Object.keys(annotations).map(
                    (key) => `"${key}": "${annotations[key as keyof typeof annotations]}"`,
                  ),
                ].join(", ")} }`,
            )
            .join(",\n          ")}
        ]
      }
    }
  }`;
}
