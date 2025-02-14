export function mergeVariants(a, b) {
  const result = { ...a };
  for (const k in b) {
    if (b[k]) {
      result[k] = b[k];
    }
  }
  return result;
}