import type { NewWeight, OldWeight } from "../types";

export function getNewVariant(oldWeight: OldWeight): NewWeight {
  if (oldWeight === "Thin") return "Line";
  if (oldWeight === "Regular") return "Line";
  if (oldWeight === "Fill") return "Fill";
  return "Line";
}
