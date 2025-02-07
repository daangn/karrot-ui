import { getColorVariableName } from "./variable";

export async function createBackgroundProps(
  node: DefaultShapeMixin,
): Promise<Record<string, string | undefined>> {
  const fills = node.fills;
  if (fills === figma.mixed || fills.length === 0) {
    return {};
  }

  const fill = fills[0];
  if (!fill || !fill.visible || fill.type !== "SOLID") {
    return {};
  }

  if (node.boundVariables?.fills?.length === 1) {
    return {
      background: await getColorVariableName(node.boundVariables.fills[0]!.id),
    };
  }

  const color = fill.color;
  return {
    background: `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${fill.opacity})`,
  };
}

export async function createColorProps(
  node: DefaultShapeMixin,
): Promise<Record<string, string | undefined>> {
  const fills = node.fills;
  if (fills === figma.mixed || fills.length === 0) {
    return {};
  }

  const fill = fills[0];
  if (!fill || !fill.visible || fill.type !== "SOLID") {
    return {};
  }

  if (node.boundVariables?.fills?.length === 1) {
    return {
      color: await getColorVariableName(node.boundVariables.fills[0]!.id),
    };
  }

  const color = fill.color;
  return {
    color: `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${fill.opacity})`,
  };
}

export async function createBorderProps(
  node: DefaultShapeMixin,
): Promise<Record<string, string | number | undefined>> {
  const strokes = node.strokes;
  if (strokes.length === 0) {
    return {};
  }

  const stroke = strokes[0];
  if (!stroke || !stroke.visible || stroke.type !== "SOLID") {
    return {};
  }

  if (node.boundVariables?.strokes?.length === 1) {
    return {
      borderWidth: node.strokeWeight as number,
      borderColor: await getColorVariableName(node.boundVariables.strokes[0]!.id),
    };
  }

  const color = stroke.color;
  return {
    borderWidth: node.strokeWeight as number,
    borderColor: `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${stroke.opacity})`,
  };
}
