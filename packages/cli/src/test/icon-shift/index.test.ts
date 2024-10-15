import {
  getFirstNode,
  migrateIdentifiers,
  migrateImportDeclarations,
  type ImportTransformers,
} from "../../utils/migrate";
import jscodeshift from "jscodeshift";
import { describe, expect, test } from "vitest";
import { Biome, Distribution } from "@biomejs/js-api";
import fs from "fs";
import path from "path";

const biome = await Biome.create({ distribution: Distribution.NODE });
biome.applyConfiguration({ formatter: { indentStyle: "space", lineWidth: 100 } });

describe("shiftingIcons", () => {
  const j = jscodeshift.withParser("tsx");

  const importTransformers: ImportTransformers = {
    source: [{ startsWith: "some-package", replaceWith: "some-new-package" }],
    identifier: {
      IconLike: "IconHeart",
      IconFavorite: "IconStar",
      IconHot: "IconFlame",
      IconNight: "IconMoon",
    },
  };

  const cases: Record<string, ("migrateImportDeclarations" | "migrateIdentifiers")[]> = {
    migrateImportDeclarations: ["migrateImportDeclarations"],
    migrateImportDeclarationsVariousTypes: ["migrateImportDeclarations"],
    migrateIdentifiers: ["migrateIdentifiers"],
    migrateImportDeclarationsWithMigrateIdentifiers: [
      "migrateImportDeclarations",
      "migrateIdentifiers",
    ],
    migrateImportDeclarationsVariousTypesWithMigrateIdentifiers: [
      "migrateImportDeclarations",
      "migrateIdentifiers",
    ],
  };

  // migrateImportDeclarations
  for (const name in cases) {
    test(name, () => {
      const input = fs.readFileSync(path.resolve(__dirname, `./cases/${name}/input.tsx`), "utf-8");
      const expected = fs.readFileSync(
        path.resolve(__dirname, `./cases/${name}/expected.tsx`),
        "utf-8",
      );

      const tree = j(input);
      const firstNode = getFirstNode({ tree, jscodeshift: j });

      if (cases[name].includes("migrateImportDeclarations")) {
        const importDeclarations = tree.find(j.ImportDeclaration, {
          source: {
            value: (value: unknown) => {
              if (typeof value !== "string") return false;

              return importTransformers.source.some(({ startsWith }) =>
                value.startsWith(startsWith),
              );
            },
          },
        });
        migrateImportDeclarations({ importDeclarations, importTransformers });
      }

      if (cases[name].includes("migrateIdentifiers")) {
        const identifiers = tree.find(j.Identifier, {
          name: (value) => Object.keys(importTransformers.identifier).includes(value),
        });
        migrateIdentifiers({ identifiers, identifierTransformers: importTransformers.identifier });
      }

      const firstNodeAfterModification = getFirstNode({ tree, jscodeshift: j });

      if (firstNode !== firstNodeAfterModification) {
        firstNodeAfterModification.comments = firstNode.comments;
      }

      const { content } = biome.formatContent(tree.toSource(), {
        filePath: `${name}.tsx`,
      });

      expect(content).toBe(expected);
    });
  }
});
