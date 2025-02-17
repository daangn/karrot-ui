export const createClassName = (className, variants, compoundVariants = []) => {
  const variantKeys = Object.keys(variants)

  const variantValues = variantKeys.map((key) => variants[key]);

  const variantClassName = variantKeys
    .map((key, index) => `${className}--${key}_${variantValues[index]}`)
    .join(" ");

  const compountVariantClassName = compoundVariants
    .filter((compoundVariant) =>
      Object.keys(compoundVariant).every((key) => compoundVariant[key] === variants[key]),
    )
    .map(
      (compoundVariant) =>
        `${className}--${Object.keys(compoundVariant)
          .map((key) => {
            return `${key}_${compoundVariant[key]}`;
          })
          .join("-")}`,
    )
    .join(" ");

  return [className, variantClassName, compountVariantClassName].filter(Boolean).join(" ");
};
