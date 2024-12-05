import { outdent } from "outdent";

import { escapeReservedWord } from "./reserved-words";
import type { SlotRecipeDefinition, SlotRecipeVariantRecord, StyleObject } from "./types";

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

const isBoolean = (key: string) => ["true", "false"].includes(key);

const stringify = (key: string) => (isBoolean(key) ? key : `"${key}"`);

const generateVariantInterface = (
  variants: SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>["variants"],
  defaultVariants?: SlotRecipeDefinition<
    string,
    SlotRecipeVariantRecord<string>
  >["defaultVariants"],
) => {
  const generateVariantType = (
    variantName: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    variant: Record<any, Partial<Record<string, StyleObject>>>,
  ) => {
    const values = Object.keys(variant);
    const booleanValues = values.filter(isBoolean);
    const typeString = booleanValues.length > 0 ? "boolean" : values.map(stringify).join(" | ");
    const defaultValue = defaultVariants?.[variantName];

    if (defaultValue !== undefined) {
      return outdent`
        /**
          * @default ${defaultValue}
          */
          ${variantName}: ${typeString};
      `;
    }

    return `${variantName}: ${typeString};`;
  };

  return Object.entries(variants)
    .map(([variantName, variant]) => generateVariantType(variantName, variant))
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
