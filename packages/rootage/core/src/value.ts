import type {
  ColorExpression,
  CubicBezierExpression,
  DimensionExpression,
  DurationExpression,
  GradientExpression,
  GradientItemExpression,
  NumberExpression,
  ShadowExpression,
  ShadowItemExpression,
  Value,
  ValueExpression,
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
      const value = Number.parseFloat(match[1]!);
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
      const value = Number.parseFloat(match[1]!);
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

function parseGradientItem(expr: unknown): GradientItemExpression | null {
  if (typeof expr === "object" && expr !== null && "color" in expr && "position" in expr) {
    const color = parseColor(expr.color);
    const position = parseNumber(expr.position);

    if (color && position) {
      return {
        color: color.value,
        position: position.value,
      };
    }
  }
  return null;
}

function parseGradient(expr: unknown): GradientExpression | null {
  if (
    typeof expr === "object" &&
    expr !== null &&
    "type" in expr &&
    "value" in expr &&
    expr.type === "gradient" &&
    Array.isArray(expr.value)
  ) {
    const parsedGradients: GradientExpression["value"] = [];

    for (const gradientItem of expr.value) {
      const parsedGradient = parseGradientItem(gradientItem);
      if (parsedGradient) {
        parsedGradients.push(parsedGradient);
      } else {
        return null; // If any shadow value fails to parse, return null
      }
    }

    return {
      type: "gradient",
      value: parsedGradients,
    };
  }
  return null;
}

export function parseValueExpression(input: Value): ValueExpression {
  const result =
    parseColor(input) ||
    parseDimension(input) ||
    parseNumber(input) ||
    parseDuration(input) ||
    parseCubicBezier(input) ||
    parseShadow(input) ||
    parseGradient(input);

  if (result) {
    return result;
  }

  throw new Error(`Invalid value expression ${JSON.stringify(input, null, 2)}`);
}
