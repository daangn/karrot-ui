import type {
  ColorExpression,
  CubicBezierExpression,
  DimensionExpression,
  DurationExpression,
  NumberExpression,
  RootageAST,
  TokenDeclaration,
  ValueExpression,
} from "../types";

interface ColorToken {
  $type: "color";
  $value: string;
}

interface DimensionToken {
  $type: "dimension";
  $value: { value: number; unit: "px" | "rem" };
}

interface NumberToken {
  $type: "number";
  $value: number;
}

interface CubicBezierToken {
  $type: "cubicBezier";
  $value: readonly [number, number, number, number];
}

interface DurationToken {
  $type: "duration";
  $value: { value: number; unit: "s" | "ms" };
}

type Token = ColorToken | DimensionToken | NumberToken | CubicBezierToken | DurationToken;

interface TokenGroup {
  [key: string]: TokenGroup | Token;
}

function handleColor(expr: ColorExpression): ColorToken {
  return { $type: "color", $value: expr.value };
}

function handleDimension(expr: DimensionExpression): DimensionToken {
  return { $type: "dimension", $value: { value: expr.value, unit: expr.unit } };
}

function handleNumber(expr: NumberExpression): NumberToken {
  return { $type: "number", $value: expr.value };
}

function handleCubicBezier(expr: CubicBezierExpression): CubicBezierToken {
  return { $type: "cubicBezier", $value: expr.value };
}

function handleDuration(expr: DurationExpression): DurationToken {
  return { $type: "duration", $value: { value: expr.value, unit: expr.unit } };
}

function handleValue(expr: ValueExpression): Token {
  switch (expr.type) {
    case "color":
      return handleColor(expr);
    case "dimension":
      return handleDimension(expr);
    case "number":
      return handleNumber(expr);
    case "cubicBezier":
      return handleCubicBezier(expr);
    case "duration":
      return handleDuration(expr);
    default:
      throw new Error(`Invalid value expression type: ${expr.type}`);
  }
}

function handleDeclaration(decl: TokenDeclaration) {
  const { token } = decl;
  const value = handleValue(token.value);

  const group = token.group.reduceRight((acc, key) => ({ [key]: acc }), value);
  return group;
}

export function getJSON(ast: RootageAST): TokenGroup {
  const { tokens } = ast;
}
