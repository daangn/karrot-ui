import { outdent } from "outdent";

import { escapeReservedWord } from "./reserved-words";
import type { SlotRecipeDefinition, SlotRecipeVariantRecord } from "./types";
import { booleanStringToBoolean, isBooleanString } from "./logic";
import { camelCase } from "change-case";

const prefixName = (name: string, options: { prefix?: string } = {}) =>
  options.prefix ? `${options.prefix}-${name}` : name;

export function generateJs(
  definition: SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>,
  options: { prefix?: string } = {},
): string {
  const jsName = camelCase(definition.name);

  const slotNames = definition.slots.map((slot) => [
    slot,
    `${prefixName(definition.name, options)}__${slot}`,
  ]);

  const variantMap = Object.fromEntries(
    Object.entries(definition.variants).map(([variantName, variant]) => [
      variantName,
      Object.keys(variant).map((key) => (isBooleanString(key) ? booleanStringToBoolean(key) : key)),
    ]),
  );

  const compoundVariants = definition.compoundVariants?.map(({ css, ...rest }) => rest) ?? [];

  return outdent`
  import { createClassName } from "./className.mjs";
  import { mergeVariants } from "./mergeVariants.mjs";
  import { splitVariantProps } from "./splitVariantProps.mjs";

  const ${jsName}SlotNames = ${JSON.stringify(slotNames, null, 2)};
  
  const defaultVariant = ${JSON.stringify(definition.defaultVariants ?? {}, null, 2)};

  const compoundVariants = ${JSON.stringify(compoundVariants, null, 2)};
  
  export const ${jsName}VariantMap = ${JSON.stringify(variantMap, null, 2)};
  
  export const ${jsName}VariantKeys = Object.keys(${jsName}VariantMap);
  
  export function ${escapeReservedWord(jsName)}(props) {
    return Object.fromEntries(
      ${jsName}SlotNames.map(([slot, className]) => {
        return [
          slot,
          createClassName(className, mergeVariants(defaultVariant, props), compoundVariants),
        ];
      }),
    );
  }
  
  Object.assign(${escapeReservedWord(jsName)}, { splitVariantProps: (props) => splitVariantProps(props, ${jsName}VariantMap) });
  `;
}
