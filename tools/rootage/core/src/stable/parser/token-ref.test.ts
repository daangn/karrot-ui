import { describe, expect, it } from "vitest";
import { parseTokenRef } from "./token-ref";

describe("parseTokenRef", () => {
  it("should parse token expression", () => {
    const expression = "$color.bg.layer-1";

    const result = parseTokenRef(expression);

    expect(result).toEqual({ group: ["color", "bg"], key: "layer-1" });
  });

  it("should reject invalid token expression", () => {
    const expression = "color.bg.layer-1";

    expect(() => parseTokenRef(expression)).toThrowError();
  });
});
