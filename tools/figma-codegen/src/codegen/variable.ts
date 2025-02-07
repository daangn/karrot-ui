import { camelCase } from "change-case";

async function getNameFromSlashSeparatedVariableName(id: string) {
  const variable = await figma.variables.getVariableByIdAsync(id);

  if (!variable) return undefined;

  const splits = variable.name.split("/");

  const name = splits.pop() ?? "";
  const group = splits.pop() ?? "";

  switch (group) {
    case "spacing-x":
    case "spacing-y":
      return `${camelCase(group)}.${camelCase(name)}`;
    default:
      return camelCase(name);
  }
}

export const getLayoutVariableName = getNameFromSlashSeparatedVariableName;

export const getTypographyVariableName = getNameFromSlashSeparatedVariableName;

export async function getColorVariableName(id: string) {
  const variable = await figma.variables.getVariableByIdAsync(id);
  if (!variable) return undefined;

  const [group, name] = variable.name.split("/") as [string, string];

  return `${camelCase(group, { mergeAmbiguousCharacters: true })}.${camelCase(name, { mergeAmbiguousCharacters: true })}`;
}
