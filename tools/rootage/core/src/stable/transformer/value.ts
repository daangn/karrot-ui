import type * as Shorthand from "./shorthand-document";
import type * as Document from "../parser/document";

function isHexColor(expr: unknown): expr is Shorthand.Color {
  if (typeof expr !== "string") {
    return false;
  }

  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  return regex.test(expr);
}

function isNumber(expr: unknown): expr is Shorthand.Number {
  return typeof expr === "number" && !Number.isNaN(expr);
}

function parseDimensionLit(expr: unknown): Document.DimensionLit | null {
  if (typeof expr !== "string") {
    return null;
  }

  const regex = /^(-?\d+(\.\d+)?)(px|rem)$/;
  const match = expr.match(regex);
  if (match) {
    const value = Number.parseFloat(match[1]!);
    const unit = match[3] as "px" | "rem";
    return { value, unit };
  }
  return null;
}

function parseDurationLit(str: string): Document.DurationLit | null {
  const regex = /^(\d+(\.\d+)?)(ms|s)$/;
  const match = str.match(regex);
  if (match) {
    const value = Number.parseFloat(match[1]!);
    const unit = match[3] as "ms" | "s";
    return { value, unit };
  }
  return null;
}

function transformColor(expr: unknown): Document.Color | null {
  if (isHexColor(expr)) {
    return { type: "color", value: expr };
  }
  return null;
}

function transformDimension(expr: unknown): Document.Dimension | null {
  const parsed = parseDimensionLit(expr);
  if (parsed) {
    return { type: "dimension", value: parsed };
  }
  return null;
}

function transformNumber(expr: unknown): Document.Number | null {
  if (typeof expr === "number") {
    if (!Number.isNaN(expr)) {
      return { type: "number", value: expr };
    }
  }
  return null;
}

function transformDuration(expr: unknown): Document.Duration | null {
  if (typeof expr === "string") {
    const parsed = parseDurationLit(expr);
    if (parsed) {
      return { type: "duration", value: parsed };
    }
  }
  return null;
}

function transformCubicBezier(expr: unknown): Document.CubicBezier | null {
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

function transformShadowLayer(expr: unknown): Document.ShadowLayer | null {
  if (
    typeof expr === "object" &&
    expr !== null &&
    "color" in expr &&
    "offsetX" in expr &&
    "offsetY" in expr &&
    "blur" in expr &&
    "spread" in expr
  ) {
    const offsetX = parseDimensionLit(expr.offsetX);
    const offsetY = parseDimensionLit(expr.offsetY);
    const blur = parseDimensionLit(expr.blur);
    const spread = parseDimensionLit(expr.spread);

    if (offsetX && offsetY && blur && spread && isHexColor(expr.color)) {
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
        color: expr.color,
      };
    }
  }
  return null;
}

function transformShadow(expr: unknown): Document.Shadow | null {
  if (
    typeof expr === "object" &&
    expr !== null &&
    "type" in expr &&
    "value" in expr &&
    expr.type === "shadow" &&
    Array.isArray(expr.value)
  ) {
    const value: Document.Shadow["value"] = [];

    for (const shadowItem of expr.value) {
      const layer = transformShadowLayer(shadowItem);
      if (layer) {
        value.push(layer);
      } else {
        return null; // If any shadow value fails to parse, return null
      }
    }

    return {
      type: "shadow",
      value: value,
    };
  }
  return null;
}

function transformGradientStop(expr: unknown): Document.GradientStop | null {
  if (typeof expr === "object" && expr !== null && "color" in expr && "position" in expr) {
    if (isHexColor(expr.color) && isNumber(expr.position)) {
      return {
        color: expr.color,
        position: expr.position,
      };
    }
  }
  return null;
}

function transformGradient(expr: unknown): Document.Gradient | null {
  if (
    typeof expr === "object" &&
    expr !== null &&
    "type" in expr &&
    "value" in expr &&
    expr.type === "gradient" &&
    Array.isArray(expr.value)
  ) {
    const value: Document.Gradient["value"] = [];

    for (const gradientItem of expr.value) {
      const stop = transformGradientStop(gradientItem);
      if (stop) {
        value.push(stop);
      } else {
        return null; // If any gradient value fails to parse, return null
      }
    }

    return {
      type: "gradient",
      value: value,
    };
  }
  return null;
}

export function transformValue(input: Shorthand.Value): Document.Value {
  const result =
    transformColor(input) ||
    transformDimension(input) ||
    transformNumber(input) ||
    transformDuration(input) ||
    transformCubicBezier(input) ||
    transformShadow(input) ||
    transformGradient(input);

  if (result) {
    return result;
  }

  throw new Error(`Invalid value expression ${JSON.stringify(input, null, 2)}`);
}
