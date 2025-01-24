import { describe, expect, it } from "vitest";
import type { Gradient } from "./shorthand-document";
import { transformValue } from "./value";
import type * as Document from "../parser/document";
import type * as Shorthand from "./shorthand-document";

describe("transformValue", () => {
  it("should transform 24bit hex colors", () => {
    const expression: Shorthand.Color = "#ffffff";

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "color",
      value: expression,
    } satisfies Document.Color);
  });

  it("should transform 24+8bit hex colors", () => {
    const expression: Shorthand.Color = "#ffffffff";

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "color",
      value: expression,
    } satisfies Document.Color);
  });

  it("should reject invalid hex colors", () => {
    const expression = "#ff";

    expect(() => transformValue(expression)).toThrowError();
  });

  it("should transform px unit dimension", () => {
    const expression: Shorthand.Dimension = "16px";

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "dimension",
      value: {
        value: 16,
        unit: "px",
      },
    } satisfies Document.Dimension);
  });

  it("should transform rem unit dimension", () => {
    const expression: Shorthand.Dimension = "1rem";

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "dimension",
      value: {
        value: 1,
        unit: "rem",
      },
    } satisfies Document.Dimension);
  });

  it("should transform dimension with negative value", () => {
    const expression: Shorthand.Dimension = "-16px";

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "dimension",
      value: {
        value: -16,
        unit: "px",
      },
    } satisfies Document.Dimension);
  });

  it("should reject invalid dimension", () => {
    const expression = "16em";

    // @ts-expect-error
    expect(() => transformValue(expression)).toThrowError();
  });

  it("should transform number", () => {
    const expression: Shorthand.Number = 42;

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "number",
      value: expression,
    } satisfies Document.Number);
  });

  it("should transform ms unit duration", () => {
    const expression: Shorthand.Duration = "500ms";

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "duration",
      value: {
        value: 500,
        unit: "ms",
      },
    } satisfies Document.Duration);
  });

  it("should transform s unit duration", () => {
    const expression: Shorthand.Duration = "1.5s";

    const result = transformValue(expression);

    expect(result).toEqual({
      type: "duration",
      value: {
        value: 1.5,
        unit: "s",
      },
    } satisfies Document.Duration);
  });

  it("should reject invalid duration", () => {
    const expression = "500ns";

    // @ts-expect-error
    expect(() => transformValue(expression)).toThrowError();
  });

  it("should transform cubic bezier", () => {
    const expression: Shorthand.CubicBezier = {
      type: "cubicBezier",
      value: [0.25, 0.1, 0.25, 1],
    } as const;

    const result = transformValue(expression);

    expect(result).toEqual(expression satisfies Document.CubicBezier);
  });

  it("should reject invalid cubic bezier", () => {
    const expression = { type: "cubicBezier" } as const;

    // @ts-expect-error
    expect(() => transformValue(expression)).toThrowError();
  });

  it("should transform shadow", () => {
    const expression: Shorthand.Shadow = {
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

    const result = transformValue(expression);

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
    } satisfies Document.Shadow);
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
    expect(() => transformValue(expression)).toThrowError();
  });

  it("should transform gradient", () => {
    const expression: Shorthand.Gradient = {
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

    const result = transformValue(expression);

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
    } satisfies Document.Gradient);
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
    expect(() => transformValue(expression)).toThrowError();
  });
});
