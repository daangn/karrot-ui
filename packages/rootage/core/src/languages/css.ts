import type {
  CubicBezierExpression,
  ValueExpression,
  RootageAST,
  ShadowExpression,
  TokenExpression,
} from "../types";

const PREFIX = "seed-v3";

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
  ast: RootageAST,
  options: {
    banner: string;
    selectors: {
      [collection: string]: {
        [mode: string]: string;
      };
    };
  },
) {
  const { tokens, tokenCollections } = ast;

  const rules = tokenCollections
    .flatMap((collection) => {
      const inCollection = tokens.filter((token) => token.collection === collection.name);
      return collection.modes
        .map((mode) => {
          const decls = inCollection
            .map(
              (binding) =>
                `${stringifyTokenName(binding.token)}: ${stringifyCssValue(binding.values.find((v) => v.mode === mode).value)};`,
            )
            .join("\n  ");

          return `${options.selectors[collection.name][mode]} {
  ${decls}
}`;
        })
        .join("\n\n");
    })
    .join("\n\n");

  return `${options.banner}${rules}`;
}
