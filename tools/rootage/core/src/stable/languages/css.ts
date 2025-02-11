import type {
  CubicBezierLit,
  GradientLit,
  ShadowLit,
  TokenCollectionDeclaration,
  TokenDeclaration,
  TokenLit,
  ValueLit,
} from "../parser/ast";

const PREFIX = "seed";

function stringifyCubicBezierLit(expr: CubicBezierLit): string {
  return `cubic-bezier(${expr.value.join(", ")})`;
}

function stringifyShadowLit(expr: ShadowLit): string {
  return expr.layers
    .map((item) => {
      return `${item.offsetX.value}${item.offsetX.unit} ${item.offsetY.value}${item.offsetY.unit} ${item.blur.value}${item.blur.unit} ${item.spread.value}${item.spread.unit} ${item.color.value}`;
    })
    .join(", ");
}

function stringifyGradientLit(expr: GradientLit): string {
  return expr.stops.map((item) => `${item.color.value} ${item.position.value * 100}%`).join(", ");
}

export function stringifyValueLit(expr: ValueLit): string {
  if (expr.kind === "ColorHexLit") {
    return expr.value;
  }

  if (expr.kind === "DimensionLit") {
    return `${expr.value}${expr.unit}`;
  }

  if (expr.kind === "NumberLit") {
    return expr.value.toString();
  }

  if (expr.kind === "DurationLit") {
    return `${expr.value}${expr.unit}`;
  }

  if (expr.kind === "CubicBezierLit") {
    return stringifyCubicBezierLit(expr);
  }

  if (expr.kind === "ShadowLit") {
    return stringifyShadowLit(expr);
  }

  if (expr.kind === "GradientLit") {
    return stringifyGradientLit(expr);
  }

  throw new Error("Invalid value expression");
}

export function stringifyTokenName(token: TokenLit) {
  if (token.group.length === 0) {
    return `--${PREFIX}-${token.key.toString().replaceAll(".", "\\.")}`;
  }

  return `--${PREFIX}-${token.group.join("-")}-${token.key.toString().replaceAll(".", "\\.")}`;
}

export function stringifyTokenReference(token: TokenLit) {
  return `var(${stringifyTokenName(token)})`;
}

export function stringifyCssValue(value: ValueLit | TokenLit): string {
  return value.kind === "TokenLit" ? stringifyTokenReference(value) : stringifyValueLit(value);
}

export function getTokenCss(
  ast: {
    tokens: TokenDeclaration[];
    tokenCollections: TokenCollectionDeclaration[];
  },
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
