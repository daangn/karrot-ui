import { camelCase } from "change-case";

function getNameFromSlashSeparatedVariableName(id: string) {
  const variable = figma.variables.getVariableById(id);

  if (!variable) return undefined;

  const splits = variable.name.split("/");

  const name = splits.pop() ?? "";
  const group = splits.pop() ?? "";

  console.log(group, name);

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

export function getColorVariableName(id: string) {
  const variable = figma.variables.getVariableById(id);
  if (!variable) return undefined;

  const [group, name] = variable.name.split("/") as [string, string];

  return `${camelCase(group, { mergeAmbiguousCharacters: true })}.${camelCase(name, { mergeAmbiguousCharacters: true })}`;
}
