import { outdent } from "outdent";

import { escapeReservedWord } from "./reserved-words";
import type { SlotRecipeDefinition, SlotRecipeVariantRecord } from "./types";

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

const generateVariantInterface = (
  variants: SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>["variants"],
  defaultVariants?: SlotRecipeDefinition<
    string,
    SlotRecipeVariantRecord<string>
  >["defaultVariants"],
) => {
  if (!defaultVariants) {
    return Object.entries(variants)
      .map(([variantName, variant]) => {
        return `${variantName}: ${Object.keys(variant)
          .map((key) => (["true", "false"].includes(key) ? key : `"${key}"`))
          .join(" | ")}`;
      })
      .join(";\n  ");
  }

  return Object.entries(variants)
    .map(([variantName, variant]) => {
      const values = Object.keys(variant)
        .map((key) => (["true", "false"].includes(key) ? key : `"${key}"`))
        .join(" | ");
      const defaultValue = defaultVariants[variantName];
      if (defaultValue === undefined) {
        return `${variantName}: ${values};`;
      }
      return outdent`
        /**
          * @default ${defaultVariants[variantName]}
          */
          ${variantName}: ${values};
      `;
    })
    .join("\n");
};

export function generateDts(
  definition: SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>,
): string {
  const capitalizedName = capitalize(definition.name);
  const variantInterface = generateVariantInterface(
    definition.variants,
    definition.defaultVariants,
  );
  const slotNameType = definition.slots.map((slot) => `"${slot}"`).join(" | ");

  return outdent`
  interface ${capitalizedName}Variant {
    ${variantInterface}
  }
  
  type ${capitalizedName}VariantMap = {
    [key in keyof ${capitalizedName}Variant]: Array<${capitalizedName}Variant[key]>;
  };
  
  export type ${capitalizedName}VariantProps = Partial<${capitalizedName}Variant>;
  
  export type ${capitalizedName}SlotName = ${slotNameType};
  
  export const ${definition.name}VariantMap: ${capitalizedName}VariantMap;
  
  export function ${escapeReservedWord(definition.name)}(
    props?: ${capitalizedName}VariantProps,
  ): Record<${capitalizedName}SlotName, string>;
  `;
}
