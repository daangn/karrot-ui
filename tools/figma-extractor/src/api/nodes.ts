import type { Node, Component, ComponentSet, ComponentSetNode } from "@figma/rest-api-spec";
import { api } from "./client";

type NodeMetadataItem = Node & Partial<Component> & Partial<ComponentSet>;

export type ComponentSetMetadataItem = ComponentSetNode &
  Partial<Component> &
  Partial<ComponentSet>;

async function getComponentSetsInFile(fileKey: string) {
  const {
    meta: { component_sets },
  } = await api.getFileComponentSets({ file_key: fileKey });

  return component_sets;
}

async function getNodeMetadataItemsInFile({
  fileKey,
  nodeIds,
}: { fileKey: string; nodeIds: string[] }): Promise<NodeMetadataItem[]> {
  const { nodes } = await api.getFileNodes({ file_key: fileKey }, { ids: nodeIds.join(",") });

  return Object.values(nodes).map(({ document, components, componentSets }) => ({
    ...document,
    ...(components[document.id] ?? {}),
    ...(componentSets[document.id] ?? {}),
  }));
}

export async function getComponentSetMetadataItemsInFile({
  fileKey,
}: { fileKey: string }): Promise<ComponentSetMetadataItem[]> {
  const componentSetsInFile = await getComponentSetsInFile(fileKey);
  const componentSetsIds = componentSetsInFile.map(({ node_id }) => node_id);

  const componentSetNodes = (
    await getNodeMetadataItemsInFile({ fileKey, nodeIds: componentSetsIds })
  ).filter((node) => node.type === "COMPONENT_SET");

  return componentSetNodes;
}
