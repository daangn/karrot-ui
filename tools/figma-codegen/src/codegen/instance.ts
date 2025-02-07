import { traverseNodeAsync } from "@create-figma-plugin/utilities";

export async function instanceMatchesComponentKey({
  node,
  key,
}: { node: InstanceNode; key: ComponentNode["key"] | ComponentSetNode["key"] }) {
  const component = await node.getMainComponentAsync();
  if (!component) return false;

  if (component.key === key) return true;
  if (component.parent?.type === "COMPONENT_SET" && component.parent.key === key) return true;

  return false;
}

export async function findMatchingInstancesInNode<T>({
  node,
  key,
}: { node: SceneNode; key: ComponentNode["key"] | ComponentSetNode["key"] }) {
  const matches: (InstanceNode & { componentProperties: T })[] = [];

  await traverseNodeAsync(node, async (n) => {
    if (n.type !== "INSTANCE") return;
    if ((await instanceMatchesComponentKey({ node: n, key })) === false) return;

    matches.push(n as InstanceNode & { componentProperties: T });
  });

  return matches;
}
