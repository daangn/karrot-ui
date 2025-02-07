import { pascalCase } from "change-case";

import { iconRecord } from "./data/icons";
import { createColorProps } from "./color";

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

export async function createIconTagNameFromId(id: string) {
  const component = (await figma.getNodeByIdAsync(id)) as ComponentNode;
  const componentKey = component.key;

  return createIconTagNameFromKey(componentKey);
}

export async function createMonochromeIconColorProps(node: InstanceNode) {
  if (node.children.length === 0) {
    throw new Error("Icon node has no children");
  }

  const icons = node.children.filter(
    (child) => child.type === "VECTOR" || child.type === "BOOLEAN_OPERATION",
  );

  const colorProps = await Promise.all(icons.map(createColorProps));

  const fills = new Set(
    colorProps.map((props) => props.color).filter((color) => color !== undefined),
  );

  if (fills.size > 1) {
    throw new Error(`Children of the icon node ${node.name} has multiple colors`);
  }

  return { color: fills.values().next().value };
}
