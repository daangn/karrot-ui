import {
  CORNER_RADIUS_VARIABLE_BINDABLE_NODE_FIELDS,
  LAYOUT_VARIABLE_BINDABLE_NODE_FIELDS,
  SIZING_VARIABLE_BINDABLE_NODE_FIELDS,
  STROKE_WEIGHT_VARIABLE_BINDABLE_NODE_FIELDS,
} from "@/features/design-system/services/get-unit-variable-suggestions";
import type {
  SerializedLayoutVariablesSuggestionsResults,
  SerializedSizingVariablesSuggestionsResults,
  SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults,
} from "@/features/design-system/types";

export async function applySizingVariable({
  oldValue,
  consumerNodeIds,
  variableId,
}: {
  oldValue: SerializedSizingVariablesSuggestionsResults[number]["oldValue"];
  consumerNodeIds: SerializedSizingVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
  variableId: SerializedSizingVariablesSuggestionsResults[number]["suggestions"][number]["variable"]["id"];
}) {
  const variable = await figma.variables.getVariableByIdAsync(variableId);
  if (!variable) return;

  const nodes = await Promise.all(consumerNodeIds.map((nodeId) => figma.getNodeByIdAsync(nodeId)));

  for (const node of nodes) {
    if (!node || node.type === "DOCUMENT" || node.type === "PAGE") continue;

    for (const field of SIZING_VARIABLE_BINDABLE_NODE_FIELDS) {
      if (!(field in node)) continue;
      if (node[field] !== oldValue) continue;

      node.setBoundVariable(field, variable);
    }
  }
}

export async function applyLayoutVariable({
  oldValue,
  consumerNodeIds,
  variableId,
}: {
  oldValue: SerializedLayoutVariablesSuggestionsResults[number]["oldValue"];
  consumerNodeIds: SerializedLayoutVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
  variableId: SerializedLayoutVariablesSuggestionsResults[number]["suggestions"][number]["variable"]["id"];
}) {
  const variable = await figma.variables.getVariableByIdAsync(variableId);
  if (!variable) return;

  const nodes = await Promise.all(consumerNodeIds.map((nodeId) => figma.getNodeByIdAsync(nodeId)));

  for (const node of nodes) {
    if (!node || node.type === "DOCUMENT" || node.type === "PAGE") continue;

    for (const field of LAYOUT_VARIABLE_BINDABLE_NODE_FIELDS) {
      if (!(field in node)) continue;
      if ((node as FrameNode)[field] !== oldValue) continue;

      node.setBoundVariable(field, variable);
    }
  }
}

export async function applyStrokeWeightOrCornerRadiusVariable({
  oldValue,
  consumerNodeIds,
  variableId,
}: {
  oldValue: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults[number]["oldValue"];
  consumerNodeIds: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
  variableId: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults[number]["suggestions"][number]["variable"]["id"];
}) {
  const variable = await figma.variables.getVariableByIdAsync(variableId);
  if (!variable) return;

  const nodes = await Promise.all(consumerNodeIds.map((nodeId) => figma.getNodeByIdAsync(nodeId)));

  for (const node of nodes) {
    if (!node || node.type === "DOCUMENT" || node.type === "PAGE") continue;

    switch (oldValue.type) {
      case "cornerRadius": {
        for (const field of CORNER_RADIUS_VARIABLE_BINDABLE_NODE_FIELDS) {
          if (!(field in node)) continue;
          if ((node as FrameNode)[field] !== oldValue.value) continue;

          node.setBoundVariable(field, variable);
        }

        break;
      }
      case "strokeWeight": {
        for (const field of STROKE_WEIGHT_VARIABLE_BINDABLE_NODE_FIELDS) {
          if (!(field in node)) continue;
          if ((node as FrameNode)[field] !== oldValue.value) continue;

          node.setBoundVariable(field, variable);
        }

        break;
      }
    }
  }
}
