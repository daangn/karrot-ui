import type {
  ColorExpression,
  ColorShorthand,
  CubicBezier,
  CubicBezierExpression,
  DimensionExpression,
  DimensionShorthand,
  DurationExpression,
  NumberExpression,
  Primitive,
  PrimitiveExpression,
  Shadow,
  ShadowExpression,
  ShadowItemExpression,
} from "./types";

function parseColor(expr: unknown): ColorExpression | null {
  if (typeof expr === "string") {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
    if (regex.test(expr)) {
      return { type: "color", value: expr };
    }
  }
  return null;
}

function parseDimension(expr: unknown): DimensionExpression | null {
  if (typeof expr === "string") {
    const regex = /^(\d+(\.\d+)?)(px|rem)$/;
    const match = expr.match(regex);
    if (match) {
      const value = Number.parseFloat(match[1]);
      const unit = match[3] as "px" | "rem";
      return { type: "dimension", value, unit };
    }
  }
  return null;
}

function parseNumber(expr: unknown): NumberExpression | null {
  if (typeof expr === "number") {
    if (!Number.isNaN(expr)) {
      return { type: "number", value: expr };
    }
  }
  return null;
}

function parseDuration(expr: unknown): DurationExpression | null {
  if (typeof expr === "string") {
    const regex = /^(\d+(\.\d+)?)(ms|s)$/;
    const match = expr.match(regex);
    if (match) {
      const value = Number.parseFloat(match[1]);
      const unit = match[3] as "ms" | "s";
      return { type: "duration", value, unit };
    }
  }
  return null;
}

function parseCubicBezier(expr: unknown): CubicBezierExpression | null {
  if (
    typeof expr === "object" &&
    expr !== null &&
    "type" in expr &&
    "value" in expr &&
    expr.type === "cubicBezier" &&
    Array.isArray(expr.value) &&
    expr.value.length === 4 &&
    expr.value.every((v) => typeof v === "number")
  ) {
    return {
      type: "cubicBezier",
      value: expr.value as [number, number, number, number],
    };
  }
  return null;
}

function parseShadowItem(expr: unknown): ShadowItemExpression | null {
  if (
    typeof expr === "object" &&
    expr !== null &&
    "color" in expr &&
    "offsetX" in expr &&
    "offsetY" in expr &&
    "blur" in expr &&
    "spread" in expr
  ) {
    const offsetX = parseDimension(expr.offsetX);
    const offsetY = parseDimension(expr.offsetY);
    const blur = parseDimension(expr.blur);
    const spread = parseDimension(expr.spread);
    const color = parseColor(expr.color);

    if (offsetX && offsetY && blur && spread && color) {
      return {
        offsetX: {
          value: offsetX.value,
          unit: offsetX.unit,
        },
        offsetY: {
          value: offsetY.value,
          unit: offsetY.unit,
        },
        blur: {
          value: blur.value,
          unit: blur.unit,
        },
        spread: {
          value: spread.value,
          unit: spread.unit,
        },
        color: color.value,
      };
    }
  }
  return null;
}

function parseShadow(expr: unknown): ShadowExpression | null {
  if (
    typeof expr === "object" &&
    expr !== null &&
    "type" in expr &&
    "value" in expr &&
    expr.type === "shadow" &&
    Array.isArray(expr.value)
  ) {
    const parsedShadows: ShadowExpression["value"] = [];

    for (const shadowItem of expr.value) {
      const parsedShadow = parseShadowItem(shadowItem);
      if (parsedShadow) {
        parsedShadows.push(parsedShadow);
      } else {
        return null; // If any shadow value fails to parse, return null
      }
    }

    return {
      type: "shadow",
      value: parsedShadows,
    };
  }
  return null;
}

export function parsePrimitiveExpression(input: Primitive): PrimitiveExpression {
  const result =
    parseColor(input) ||
    parseDimension(input) ||
    parseNumber(input) ||
    parseDuration(input) ||
    parseCubicBezier(input) ||
    parseShadow(input);

  if (result) {
    return result;
  }

  throw new Error(`Invalid primitive expression ${JSON.stringify(input, null, 2)}`);
}

function stringifyCubicBezierExpression(expr: CubicBezierExpression): string {
  return `cubic-bezier(${expr.value.join(", ")})`;
}

function stringifyShadowExpression(expr: ShadowExpression): string {
  return expr.value
    .map((item) => {
      return `${item.offsetX} ${item.offsetY} ${item.blur} ${item.spread} ${item.color}`;
    })
    .join(", ");
}

export function stringifyPrimitiveExpression(expr: PrimitiveExpression): string {
  if (expr.type === "color") {
    return expr.value;
  }

  if (expr.type === "dimension") {
    return `${expr.value}${expr.unit}`;
  }

  if (expr.type === "number") {
    return expr.value.toString();
  }

  if (expr.type === "duration") {
    return `${expr.value}${expr.unit}`;
  }

  if (expr.type === "cubicBezier") {
    return stringifyCubicBezierExpression(expr);
  }

  if (expr.type === "shadow") {
    return stringifyShadowExpression(expr);
  }

  throw new Error("Invalid primitive expression");
}
