import { convertRgbColorToHexColor } from "@create-figma-plugin/utilities";
import { RELAUNCH_DATA_MESSAGES } from "constants.mjs";
import type { PreviewType } from "create-variable-tables.mjs";

export function isSceneNodeVariableTablesContainer(sceneNode: SceneNode): sceneNode is FrameNode {
  return (
    sceneNode.type === "FRAME" &&
    sceneNode.getRelaunchData()?.update === RELAUNCH_DATA_MESSAGES.UPDATE
  );
}

export function isVariableAlias(variableValue: VariableValue): variableValue is VariableAlias {
  return (
    typeof variableValue === "object" &&
    "type" in variableValue &&
    variableValue.type === "VARIABLE_ALIAS"
  );
}

export function getPreviewType(variableName: Variable["name"]): PreviewType {
  if (variableName.startsWith("fg/") || variableName.endsWith("/text")) return "foreground";
  if (variableName.startsWith("bg/") || variableName.endsWith("/bg")) return "background";
  if (variableName.startsWith("stroke/")) return "stroke";

  return "background";
}

export function getHexString(color: RGB | RGBA): string {
  const hex = convertRgbColorToHexColor(color);

  const aString = "a" in color && color.a !== 1 ? ` (${(color.a * 100).toFixed(0)}%)` : "";

  return `#${hex}${aString}`;
}
