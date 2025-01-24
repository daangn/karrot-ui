import { AST, buildContext, css, Document, parse } from "@seed-design/rootage-core";

export function stringifyVariants(variants: AST.VariantExpression[]) {
  if (variants.length === 0) {
    return "base";
  }

  return variants.map(({ name, value }) => `${name}=${value}`).join(", ");
}

export function stringifyStates(states: AST.StateExpression[]) {
  return states.map(({ value }) => value).join(", ");
}

export function stringifyTokenLit(token: AST.TokenLit): Document.TokenRef {
  return `$${[...token.group, token.key].join(".")}`;
}

export function stringifyValueLit(lit: AST.ValueLit): string {
  switch (lit.kind) {
    case "DimensionLit":
      return lit.unit === "rem"
        ? `${css.stringifyValueLit(lit)} (${lit.value}rem)`
        : css.stringifyValueLit(lit);
    default:
      return css.stringifyValueLit(lit);
  }
}

export const getRootage = async () => {
  const index: { resources: { path: string }[] } = await import("@/public/rootage/index.json").then(
    (module) => {
      return module.default;
    },
  );
  const models: Document.Model[] = await Promise.all(
    index.resources.map((resource) => import(`@/public/rootage${resource.path}`)),
  );
  return buildContext(parse(models));
};
