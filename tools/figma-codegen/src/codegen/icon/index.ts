import { pascalCase } from "change-case";

import { iconRecord } from "./data";
import { createColorProps } from "../color";

export function isIconComponent(componentKey: string) {
  return !!iconRecord[componentKey];
}

export function createIconTagNameFromKey(key: string) {
  const iconData = iconRecord[key];
  if (!iconData) {
    throw new Error(`Icon not found: ${key}`);
  }

  const { name, weight } = iconData;

  return pascalCase(`${name}${weight ? weight : ""}`);
}

export function createIconTagNameFromId(id: string) {
  const component = figma.getNodeById(id) as ComponentNode;
  const componentKey = component.key;

  return createIconTagNameFromKey(componentKey);
}

export function createMonochromeIconFillProps(node: InstanceNode) {
  if (node.children.length === 0) {
    throw new Error("Icon node has no children");
  }

  const fills = new Set(
    node.children
      .filter((child) => child.type === "VECTOR" || child.type === "BOOLEAN_OPERATION")
      .map((child) => createColorProps(child).color)
      .filter((color) => color !== undefined),
  );

  if (fills.size > 1) {
    throw new Error("Icon node has multiple colors");
  }

  // TODO: prop 수정 필요 (Icon 컴포넌트 등으로 대체될...)
  return { fills: fills.values().next().value };
}
