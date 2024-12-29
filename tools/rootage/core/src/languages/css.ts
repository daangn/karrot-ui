import type {
  CubicBezierExpression,
  ValueExpression,
  RootageCtx,
  ShadowExpression,
  TokenExpression,
  GradientExpression,
} from "../types";

const PREFIX = "seed-v3";

function stringifyCubicBezierExpression(expr: CubicBezierExpression): string {
  return `cubic-bezier(${expr.value.join(", ")})`;
}

function stringifyShadowExpression(expr: ShadowExpression): string {
  return expr.value
    .map((item) => {
      return `${item.offsetX.value}${item.offsetX.unit} ${item.offsetY.value}${item.offsetY.unit} ${item.blur.value}${item.blur.unit} ${item.spread.value}${item.spread.unit} ${item.color}`;
    })
    .join(", ");
}

function stringifyGradientExpression(expr: GradientExpression): string {
  return expr.value.map((item) => `${item.color} ${item.position * 100}%`).join(", ");
}

export function stringifyValueExpression(expr: ValueExpression): string {
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

  if (expr.type === "gradient") {
    return stringifyGradientExpression(expr);
  }

  throw new Error("Invalid value expression");
}

export function stringifyTokenName(token: TokenExpression) {
  if (token.group.length === 0) {
    return `--${PREFIX}-${token.key.toString().replaceAll(".", "\\.")}`;
  }

  return `--${PREFIX}-${token.group.join("-")}-${token.key.toString().replaceAll(".", "\\.")}`;
}

export function stringifyTokenReference(token: TokenExpression) {
  return `var(${stringifyTokenName(token)})`;
}

export function stringifyCssValue(value: ValueExpression | TokenExpression): string {
  return value.type === "token" ? stringifyTokenReference(value) : stringifyValueExpression(value);
}

export function getTokenCss(
  ctx: RootageCtx,
  options: {
    banner: string;
    selectors: {
      [collection: string]: {
        [mode: string]: string;
      };
    };
  },
) {
  const { tokens, tokenCollections } = ctx;

  const rules = tokenCollections
    .flatMap((collection) => {
      const inCollection = tokens.filter((token) => token.collection === collection.name);
      return collection.modes
        .map((mode) => {
          const decls = inCollection
            .map(
              (binding) =>
                `${stringifyTokenName(binding.token)}: ${stringifyCssValue(binding.values.find((v) => v.mode === mode)!.value)};`,
            )
            .join("\n  ");

          const selector = options.selectors[collection.name]?.[mode];

          if (!selector) {
            throw new Error(
              `Selector for collection ${collection.name} and mode ${mode} is not defined`,
            );
          }

          return `${selector} {
  ${decls}
}`;
        })
        .join("\n\n");
    })
    .join("\n\n");

  return `${options.banner}${rules}`;
}
