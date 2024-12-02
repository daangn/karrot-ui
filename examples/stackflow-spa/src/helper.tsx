// Helper function to compute the cartesian product of arrays
function cartesian<T>(arrays: T[][]): T[][] {
  let result: T[][] = [[]];
  for (const array of arrays) {
    const temp: T[][] = [];
    for (const acc of result) {
      for (const item of array) {
        temp.push(acc.concat([item]));
      }
    }
    result = temp;
  }
  return result;
}

// { size: "small", variant: "brand" } -> [{ size: "small", variant: "brand" }]
// { size: "small", variant: "ALL" } -> [{ size: "small", variant: "brand" }, { size: "small", variant: "brandSolid" }, ...]
export function getVariantCombination<T extends Record<string, string[]>>(
  variantsMap: T,
  variants: { [K in keyof T]: T[K][number] | "ALL" },
): { [K in keyof T]: T[K][number] }[] {
  const keys = Object.keys(variantsMap) as (keyof T)[];

  // Create an array of arrays containing possible values for each key
  const valuesArray = keys.map((key) => {
    const variantValue = variants[key];
    if (variantValue === "ALL") {
      // Use all possible values from variantsMap for this key
      return variantsMap[key].map((value) => ({ [key]: value }));
    }
    // Use the specific value provided
    return [{ [key]: variantValue }];
  });

  // Compute the cartesian product of the arrays
  const cartesianProduct = cartesian(valuesArray);

  // Combine the key-value pairs into single objects
  const combinations = cartesianProduct.map((combination) => {
    return Object.assign({}, ...combination);
  });

  return combinations;
}

export function getGridColumnCount<T extends Record<string, string[]>>(
  variantsMap: T,
  variants: { [K in keyof T]: T[K][number] | "ALL" },
) {
  const keys = Object.keys(variantsMap) as (keyof T)[];

  const mainAxis = keys.findLast((key) => variants[key] === "ALL");

  if (!mainAxis) {
    return 1;
  }

  return variantsMap[mainAxis].length;
}
