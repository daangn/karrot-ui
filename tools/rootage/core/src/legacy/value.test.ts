import { describe, expect, it } from "vitest";
import type { Gradient } from "./types";
import { parseValueExpression } from "./value";

describe("parseValueExpression", () => {
  it("should parse 24bit hex colors", () => {
    const expression = "#ffffff";

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "color",
      value: expression,
    });
  });

  it("should parse 24+8bit hex colors", () => {
    const expression = "#ffffffff";

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "color",
      value: expression,
    });
  });

  it("should reject invalid hex colors", () => {
    const expression = "#ff";

    expect(() => parseValueExpression(expression)).toThrowError();
  });

  it("should parse px unit dimension", () => {
    const expression = "16px";

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "dimension",
      value: 16,
      unit: "px",
    });
  });

  it("should parse rem unit dimension", () => {
    const expression = "1rem";

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "dimension",
      value: 1,
      unit: "rem",
    });
  });

  it("should parse dimension with negative value", () => {
    const expression = "-16px";

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "dimension",
      value: -16,
      unit: "px",
    });
  });

  it("should reject invalid dimension", () => {
    const expression = "16em";

    // @ts-expect-error
    expect(() => parseValueExpression(expression)).toThrowError();
  });

  it("should parse number", () => {
    const expression = 42;

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "number",
      value: expression,
    });
  });

  it("should parse ms unit duration", () => {
    const expression = "500ms";

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "duration",
      value: 500,
      unit: "ms",
    });
  });

  it("should parse s unit duration", () => {
    const expression = "1.5s";

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "duration",
      value: 1.5,
      unit: "s",
    });
  });

  it("should reject invalid duration", () => {
    const expression = "500ns";

    // @ts-expect-error
    expect(() => parseValueExpression(expression)).toThrowError();
  });

  it("should parse cubic bezier", () => {
    const expression = { type: "cubicBezier", value: [0.25, 0.1, 0.25, 1] } as const;

    const result = parseValueExpression(expression);

    expect(result).toEqual(expression);
  });

  it("should reject invalid cubic bezier", () => {
    const expression = { type: "cubicBezier" } as const;

    // @ts-expect-error
    expect(() => parseValueExpression(expression)).toThrowError();
  });

  it("should parse shadow", () => {
    const expression = {
      type: "shadow" as const,
      value: [
        {
          color: "#000000",
          offsetX: "16px",
          offsetY: "24px",
          blur: "8px",
          spread: "0px",
        } as const,
      ],
    };

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "shadow",
      value: [
        {
          color: "#000000",
          offsetX: { value: 16, unit: "px" },
          offsetY: { value: 24, unit: "px" },
          blur: { value: 8, unit: "px" },
          spread: { value: 0, unit: "px" },
        },
      ],
    });
  });

  it("should reject invalid shadow", () => {
    const expression = {
      type: "shadow",
      value: [
        {
          color: "#aaa",
          offsetX: 0,
          offsetY: 0,
          blur: 0,
          spread: 0,
        },
      ],
    } as const;

    // @ts-expect-error
    expect(() => parseValueExpression(expression)).toThrowError();
  });

  it("should parse gradient", () => {
    const expression = {
      type: "gradient",
      value: [
        {
          color: "#000000",
          position: 0,
        },
        {
          color: "#ffffff",
          position: 1,
        },
      ],
    } satisfies Gradient;

    const result = parseValueExpression(expression);

    expect(result).toEqual({
      type: "gradient",
      value: [
        {
          color: "#000000",
          position: 0,
        },
        {
          color: "#ffffff",
          position: 1,
        },
      ],
    });
  });

  it("should reject invalid gradient", () => {
    const expression = {
      type: "gradient",
      value: [
        {
          color: "#00",
          position: 0,
        },
        {
          color: "#ff",
          position: 1,
        },
      ],
    } as const;

    // @ts-expect-error
    expect(() => parseValueExpression(expression)).toThrowError();
  });
});
