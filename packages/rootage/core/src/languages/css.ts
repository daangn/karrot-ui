import { parseTokensData } from "../token";
import { parseTokenCollectionsData } from "../token-collection";
import type {
  CubicBezierExpression,
  Model,
  PrimitiveExpression,
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

export function stringifyTokenName(token: TokenExpression) {
  if (token.group.length === 0) {
    return `--${PREFIX}-${token.key.toString().replaceAll(".", "\\.")}`;
  }

  return `--${PREFIX}-${token.group.join("-")}-${token.key.toString().replaceAll(".", "\\.")}`;
}

export function stringifyTokenReference(token: TokenExpression) {
  return `var(${stringifyTokenName(token)})`;
}

export function stringifyCssValue(value: PrimitiveExpression | TokenExpression): string {
  return value.type === "token"
    ? stringifyTokenReference(value)
    : stringifyPrimitiveExpression(value);
}

export function getTokenCss(
  models: Model[],
  options: {
    banner: string;
    selectors: {
      [collection: string]: {
        [mode: string]: string;
      };
    };
  },
) {
  const tokenModels = models.filter((model) => model.kind === "Tokens");
  const collectionModels = models.filter((model) => model.kind === "TokenCollections");
  const tokenBindings = tokenModels.flatMap((model) => parseTokensData(model.data));
  const collectionBindings = collectionModels.flatMap((model) =>
    parseTokenCollectionsData(model.data),
  );

  const rules = collectionBindings
    .flatMap((collection) => {
      const inCollection = tokenBindings.filter((token) => token.collection === collection.name);
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
