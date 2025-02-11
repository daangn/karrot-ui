import postcss from "postcss";
import postcssJs from "postcss-js";
import postcssNested from "postcss-nested";

import { compact } from "./compact";
import type { SlotRecipeDefinition, SlotRecipeVariantRecord } from "./types";
import { transform } from "lightningcss";

type Definition = SlotRecipeDefinition<string, SlotRecipeVariantRecord<string>>;

const prefixName = (name: string, options: { prefix?: string } = {}) =>
  options.prefix ? `${options.prefix}-${name}` : name;

export function generateBaseRules(definition: Definition, options: { prefix?: string } = {}) {
  const name = prefixName(definition.name, options);
  return Object.entries(definition.base).map(([slot, style]) => {
    if (!style) {
      return undefined;
    }
    const parsed = postcssJs.parse(style);
    return postcss.rule({
      selector: `.${name}__${slot}`,
      nodes: parsed.nodes,
    });
  });
}

export function generateVariantRules(definition: Definition, options: { prefix?: string } = {}) {
  const name = prefixName(definition.name, options);
  return Object.entries(definition.variants).flatMap(([variantName, variant]) => {
    return Object.entries(variant).flatMap(([variantValue, variantStyles]) => {
      return Object.entries(variantStyles).map(([slot, style]) => {
        if (!style) {
          return undefined;
        }
        const parsed = postcssJs.parse(style);
        return postcss.rule({
          selector: `.${name}__${slot}--${variantName}_${variantValue}`,
          nodes: parsed.nodes,
        });
      });
    });
  });
}

export function generateCompoundVariantRules(
  definition: Definition,
  options: { prefix?: string } = {},
) {
  const name = prefixName(definition.name, options);
  return (
    definition.compoundVariants?.flatMap(({ css, ...selection }) => {
      return Object.entries(css).map(([slot, style]) => {
        if (!style) {
          return undefined;
        }

        const selector = `.${name}__${slot}--${Object.entries(selection)
          .map(([variantName, variantValue]) => `${variantName}_${variantValue}`)
          .join("-")}`;
        const parsed = postcssJs.parse(style);

        return postcss.rule({
          selector: selector,
          nodes: parsed.nodes,
        });
      });
    }) ?? []
  );
}

export function generateKeyframeRules(definition: Definition, options: { prefix?: string } = {}) {
  return Object.entries(definition.keyframes ?? {}).flatMap(([keyframeName, keyframe]) => {
    const name = prefixName([definition.name, keyframeName].join("-"), options);

    const parsed = postcssJs.parse(keyframe);
    return postcss.atRule({
      name: "keyframes",
      params: name,
      nodes: parsed.nodes,
    });
  });
}

export async function transpileRulesToCss(
  rules: (postcss.AtRule | postcss.Rule | undefined)[],
): Promise<string> {
  const root = postcss.root({
    nodes: compact(rules),
  });

  const css = await postcss([postcssNested()])
    // @ts-expect-error
    .process(root, { from: undefined, parser: postcssJs })
    .then((result) => {
      return result.css;
    });

  return css;
}

export function generateCssRules(
  definition: Definition,
  options: { prefix?: string } = {},
): (postcss.AtRule | postcss.Rule | undefined)[] {
  const baseRules = generateBaseRules(definition, options);
  const variantRules = generateVariantRules(definition, options);
  const compoundVariantRules = generateCompoundVariantRules(definition, options);
  const keyframeRules = generateKeyframeRules(definition);

  return [...baseRules, ...variantRules, ...compoundVariantRules, ...keyframeRules];
}

export async function generateCss(
  definition: Definition,
  options: { prefix?: string },
): Promise<string> {
  return transpileRulesToCss(generateCssRules(definition, options));
}

export async function generateCssBundle(
  definitions: Definition[],
  options: { minify?: boolean; filename?: string; prefix?: string } = {},
): Promise<string> {
  const { minify = false, filename = "component.css" } = options;
  const rules = definitions.flatMap((definition) => generateCssRules(definition, options));
  const css = await transpileRulesToCss(rules);

  return transform({
    filename,
    code: Buffer.from(css),
    minify,
  }).code.toString();
}
