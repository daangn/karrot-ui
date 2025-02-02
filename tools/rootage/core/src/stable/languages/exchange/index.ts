import type { AST, Exchange } from "../../parser";

export function getModel(
  ast: AST.TokensDocument | AST.TokenCollectionsDocument | AST.ComponentSpecDocument,
): Exchange.Model {
  switch (ast.kind) {
    case "TokenCollectionsDocument":
      return getTokenCollectionsModel(ast);
    case "TokensDocument":
      return getTokensModel(ast);
    case "ComponentSpecDocument":
      return getComponentSpecModel(ast);
  }
}

export function getTokenCollectionsModel(
  ast: AST.TokenCollectionsDocument,
): Exchange.TokenCollectionsModel {
  const idField = ast.metadata.fields.find((f) => f.key === "id");
  const nameField = ast.metadata.fields.find((f) => f.key === "name");
  const id = idField ? String(idField.value) : "";
  const name = nameField ? String(nameField.value) : "";

  return {
    kind: "TokenCollections",
    metadata: { id, name },
    data: ast.data.map((tc) => ({
      name: tc.name,
      modes: tc.modes,
    })),
  };
}

export function getTokensModel(ast: AST.TokensDocument): Exchange.TokensModel {
  const idField = ast.metadata.fields.find((f) => f.key === "id");
  const nameField = ast.metadata.fields.find((f) => f.key === "name");
  const id = idField ? String(idField.value) : "";
  const name = nameField ? String(nameField.value) : "";

  const collection = ast.data.length ? ast.data[0]!.collection : "";
  const tokens: Record<string, { values: Record<string, Exchange.Value>; description?: string }> =
    {};

  function buildValues(decl: AST.TokenDeclaration): Record<string, Exchange.Value> {
    const valueMap: Record<string, Exchange.Value> = {};
    switch (decl.kind) {
      case "ColorTokenDeclaration":
        for (const { mode, value } of decl.values) {
          valueMap[mode] = {
            type: "color",
            value: value.kind === "ColorHexLit" ? value.value : value.identifier,
          };
        }
        break;
      case "DimensionTokenDeclaration":
        for (const { mode, value } of decl.values) {
          valueMap[mode] = {
            type: "dimension",
            value:
              value.kind === "DimensionLit"
                ? { value: value.value, unit: value.unit }
                : value.identifier,
          };
        }
        break;
      case "NumberTokenDeclaration":
        for (const { mode, value } of decl.values) {
          valueMap[mode] = {
            type: "number",
            value: value.kind === "NumberLit" ? value.value : value.identifier,
          };
        }
        break;
      case "DurationTokenDeclaration":
        for (const { mode, value } of decl.values) {
          valueMap[mode] = {
            type: "duration",
            value:
              value.kind === "DurationLit"
                ? { value: value.value, unit: value.unit }
                : value.identifier,
          };
        }
        break;
      case "CubicBezierTokenDeclaration":
        for (const { mode, value } of decl.values) {
          valueMap[mode] = {
            type: "cubicBezier",
            value: value.kind === "CubicBezierLit" ? value.value : value.identifier,
          };
        }
        break;
      case "ShadowTokenDeclaration":
        for (const { mode, value } of decl.values) {
          valueMap[mode] = {
            type: "shadow",
            value:
              value.kind === "ShadowLit"
                ? value.layers.map((layer) => ({
                    color: layer.color.value,
                    offsetX: { value: layer.offsetX.value, unit: layer.offsetX.unit },
                    offsetY: { value: layer.offsetY.value, unit: layer.offsetY.unit },
                    blur: { value: layer.blur.value, unit: layer.blur.unit },
                    spread: { value: layer.spread.value, unit: layer.spread.unit },
                  }))
                : value.identifier,
          };
        }
        break;
      case "GradientTokenDeclaration":
        for (const { mode, value } of decl.values) {
          valueMap[mode] = {
            type: "gradient",
            value:
              value.kind === "GradientLit"
                ? value.stops.map((stop) => ({
                    color: stop.color.value,
                    position: stop.position.value,
                  }))
                : value.identifier,
          };
        }
        break;
      case "UnresolvedTokenDeclaration":
        throw new Error(`Cannot convert unresolved token declaration for: ${decl.kind}`);
    }
    return valueMap;
  }

  for (const decl of ast.data) {
    const tokenRef = decl.token.identifier;
    const description = decl.description;
    const valueMap = buildValues(decl);
    tokens[tokenRef] = { values: valueMap, description };
  }

  return {
    kind: "Tokens",
    metadata: { id, name },
    data: {
      collection,
      tokens,
    },
  };
}

export function getComponentSpecModel(ast: AST.ComponentSpecDocument): Exchange.ComponentSpecModel {
  const idField = ast.metadata.fields.find((f) => f.key === "id");
  const nameField = ast.metadata.fields.find((f) => f.key === "name");
  const id = idField ? String(idField.value) : "";
  const name = nameField ? String(nameField.value) : "";

  function buildValue(prop: AST.PropertyDeclaration): Exchange.Value {
    switch (prop.kind) {
      case "ColorPropertyDeclaration":
        return {
          type: "color",
          value: prop.value.kind === "ColorHexLit" ? prop.value.value : prop.value.identifier,
        };
      case "DimensionPropertyDeclaration":
        return {
          type: "dimension",
          value:
            prop.value.kind === "DimensionLit"
              ? { value: prop.value.value, unit: prop.value.unit }
              : prop.value.identifier,
        };
      case "NumberPropertyDeclaration":
        return {
          type: "number",
          value: prop.value.kind === "NumberLit" ? prop.value.value : prop.value.identifier,
        };
      case "DurationPropertyDeclaration":
        return {
          type: "duration",
          value:
            prop.value.kind === "DurationLit"
              ? { value: prop.value.value, unit: prop.value.unit }
              : prop.value.identifier,
        };
      case "CubicBezierPropertyDeclaration":
        return {
          type: "cubicBezier",
          value: prop.value.kind === "CubicBezierLit" ? prop.value.value : prop.value.identifier,
        };
      case "ShadowPropertyDeclaration":
        return {
          type: "shadow",
          value:
            prop.value.kind === "ShadowLit"
              ? prop.value.layers.map((layer) => ({
                  color: layer.color.value,
                  offsetX: { value: layer.offsetX.value, unit: layer.offsetX.unit },
                  offsetY: { value: layer.offsetY.value, unit: layer.offsetY.unit },
                  blur: { value: layer.blur.value, unit: layer.blur.unit },
                  spread: { value: layer.spread.value, unit: layer.spread.unit },
                }))
              : prop.value.identifier,
        };
      case "GradientPropertyDeclaration":
        return {
          type: "gradient",
          value:
            prop.value.kind === "GradientLit"
              ? prop.value.stops.map((stop) => ({
                  color: stop.color.value,
                  position: stop.position.value,
                }))
              : prop.value.identifier,
        };
      case "UnresolvedPropertyDeclaration":
        throw new Error(`Unresolved property declaration found: ${prop.property}`);
    }
  }

  function buildVariant(variant: AST.VariantDeclaration): Exchange.VariantDeclaration {
    const variants = variant.variants.reduce<Record<string, string>>((acc, expr) => {
      acc[expr.name] = expr.value;
      return acc;
    }, {});
    const definitions = variant.body.map((stDecl) => ({
      states: stDecl.states.map((s) => s.value),
      slots: stDecl.body.reduce<Record<string, Record<string, Exchange.Value>>>((acc, slot) => {
        acc[slot.slot] = slot.body.reduce<Record<string, Exchange.Value>>((props, p) => {
          props[p.property] = buildValue(p);
          return props;
        }, {});
        return acc;
      }, {}),
    }));
    return { variants, definitions };
  }

  return {
    kind: "ComponentSpec",
    metadata: { id, name },
    data: {
      id,
      name,
      definitions: ast.data.body.map(buildVariant),
    },
  };
}
