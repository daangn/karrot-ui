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
  const componentToHex = (c: number): string => {
    if (c < 0 || c > 1) return "00";

    const hex = Math.round(c * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();

    return hex;
  };

  const { r, g, b } = color;

  const rHex = componentToHex(r);
  const gHex = componentToHex(g);
  const bHex = componentToHex(b);

  const aString = "a" in color && color.a !== 1 ? ` (${(color.a * 100).toFixed(0)}%)` : "";

  return `#${rHex}${gHex}${bHex}${aString}`;
}
