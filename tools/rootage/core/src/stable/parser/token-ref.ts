import { isTokenRef } from "./is-token-ref";

/**
 * A helper to parse the tokenRef string (e.g. "$brand.primary") into a group and key.
 */
export function parseTokenRef(ref: string): { group: string[]; key: string } {
  // For demonstration, let's do something trivial:
  // e.g. "$brand.colors.primary" => group=["brand", "colors"], key="primary"
  if (!isTokenRef(ref)) {
    throw new Error(`Invalid token format: ${ref}`);
  }
  const bare = ref.slice(1); // remove leading '$'
  const segments = bare.split(".");
  if (segments.length > 1) {
    const key = segments.pop()!;
    return { group: segments, key };
  }
  // There's only one segment => no group
  return { group: [], key: bare };
}
