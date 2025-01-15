import { camelCase } from "change-case";

function getNameFromSlashSeparatedVariableName(id: string) {
  const variable = figma.variables.getVariableById(id);
  if (!variable) {
    throw new Error(`Variable not found: ${id}`);
  }

  const name = variable.name.split("/").pop() as string;

  return camelCase(name, { mergeAmbiguousCharacters: true });
}

export const getLayoutVariableName = getNameFromSlashSeparatedVariableName;

export const getTypographyVariableName = getNameFromSlashSeparatedVariableName;

export function getColorVariableName(id: string) {
  const variable = figma.variables.getVariableById(id);
  if (!variable) {
    throw new Error(`Variable not found: ${id}`);
  }

  const [group, name] = variable.name.split("/") as [string, string];

  return `${camelCase(group, { mergeAmbiguousCharacters: true })}.${camelCase(name, { mergeAmbiguousCharacters: true })}`;
}
