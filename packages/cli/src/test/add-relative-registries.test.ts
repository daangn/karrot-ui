import { describe, expect, test } from "vitest";
import { addRelativeRegistries } from "../utils/add-relative-registries";
import type { RegistryLib, RegistryUI } from "@/src/schema";

const libConfig: RegistryLib = [
  {
    name: "a",
    files: ["a.tsx"],
  },
];

const uiConfig: RegistryUI = [
  {
    name: "a",
    files: ["a.tsx"],
  },
  {
    name: "b",
    innerDependencies: ["ui:a"],
    files: ["b.tsx"],
  },
  {
    name: "c",
    innerDependencies: ["ui:b"],
    files: ["c.tsx"],
  },
  {
    name: "d",
    innerDependencies: ["ui:a", "ui:b"],
    files: ["d.tsx"],
  },
  {
    name: "e",
    innerDependencies: ["ui:d"],
    files: ["e.tsx"],
  },
  {
    name: "f",
    innerDependencies: ["lib:a"],
    files: ["f.tsx"],
  },
];

describe("addRelativeRegistries", () => {
  test("4 deps test", () => {
    const userSelects = ["e"];
    const result = addRelativeRegistries({
      userSelects,
      uiRegistryIndex: uiConfig,
      libRegistryIndex: [],
    });
    expect(result).toEqual(
      expect.arrayContaining([
        {
          type: "ui",
          name: "e",
        },
        {
          type: "ui",
          name: "d",
        },
        {
          type: "ui",
          name: "a",
        },
        {
          type: "ui",
          name: "b",
        },
      ]),
    );
  });

  test("3 deps test", () => {
    const userSelects = ["d"];
    const result = addRelativeRegistries({
      userSelects,
      uiRegistryIndex: uiConfig,
      libRegistryIndex: [],
    });
    expect(result).toEqual(
      expect.arrayContaining([
        {
          type: "ui",
          name: "d",
        },
        {
          type: "ui",
          name: "a",
        },
        {
          type: "ui",
          name: "b",
        },
      ]),
    );
  });

  test("3 deps test", () => {
    const userSelects = ["c"];
    const result = addRelativeRegistries({
      userSelects,
      uiRegistryIndex: uiConfig,
      libRegistryIndex: [],
    });
    expect(result).toEqual(
      expect.arrayContaining([
        {
          type: "ui",
          name: "c",
        },
        {
          type: "ui",
          name: "b",
        },
        {
          type: "ui",
          name: "a",
        },
      ]),
    );
  });

  test("2 deps test", () => {
    const userSelects = ["b"];
    const result = addRelativeRegistries({
      userSelects,
      uiRegistryIndex: uiConfig,
      libRegistryIndex: [],
    });
    expect(result).toEqual(
      expect.arrayContaining([
        {
          type: "ui",
          name: "b",
        },
        {
          type: "ui",
          name: "a",
        },
      ]),
    );
  });

  test("1 deps test", () => {
    const userSelects = ["a"];
    const result = addRelativeRegistries({
      userSelects,
      uiRegistryIndex: uiConfig,
      libRegistryIndex: [],
    });
    expect(result).toEqual(
      expect.arrayContaining([
        {
          type: "ui",
          name: "a",
        },
      ]),
    );
  });

  test("lib deps test", () => {
    const userSelects = ["f"];
    const result = addRelativeRegistries({
      userSelects,
      uiRegistryIndex: uiConfig,
      libRegistryIndex: libConfig,
    });
    expect(result).toEqual(
      expect.arrayContaining([
        {
          type: "ui",
          name: "f",
        },
        {
          type: "lib",
          name: "a",
        },
      ]),
    );
  });
});
