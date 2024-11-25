#!/usr/bin/env node

import {
  getJsonSchema,
  type Model,
  parseComponentSpecData,
  stringifyComponentSpecTs,
  validateModels,
} from "@seed-design/rootage-core";
import fs from "fs-extra";
import path from "node:path";
import YAML from "yaml";

import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const artifactsPath = require.resolve("@seed-design/rootage-artifacts");
const artifactsDir = path.dirname(artifactsPath);

const [, , command, dir = "./"] = process.argv;

function readYAMLFilesSync(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      readYAMLFilesSync(filePath, fileList);
    } else if (stat.isFile() && (path.extname(file) === ".yaml" || path.extname(file) === ".yml")) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

async function writeComponentSpec() {
  const filesToRead = readYAMLFilesSync(artifactsDir);
  const fileContents: Model[] = await Promise.all(
    filesToRead.map((name) => fs.readFile(name, "utf-8").then((res) => YAML.parse(res))),
  );

  const validationResult = validateModels(fileContents);

  if (!validationResult.valid) {
    console.error(validationResult.message);
    process.exit(1);
  }

  const componentSpecFiles = fileContents.filter((model) => model.kind === "ComponentSpec");

  for (const spec of componentSpecFiles) {
    const code = stringifyComponentSpecTs(parseComponentSpecData(spec.data));
    const writePath = path.join(process.cwd(), dir, `${spec.metadata.id}.vars.ts`);

    console.log("Writing", spec.metadata.name, "to", writePath);

    fs.writeFileSync(writePath, code);
  }
}

async function writeJsonSchema() {
  const filesToRead = readYAMLFilesSync(artifactsDir);
  const fileContents = await Promise.all<Model>(
    filesToRead.map((name) => fs.readFile(name, "utf-8").then((res) => YAML.parse(res))),
  ).then((res) => res.filter((model) => model.kind === "Tokens"));

  // FIXME: add model validation

  const jsonSchema = getJsonSchema(fileContents);
  const writePath = path.join(artifactsDir, "components", "schema.json");

  console.log("Writing schema to", writePath);

  fs.writeFileSync(writePath, jsonSchema);
}

if (command === "component-spec") {
  writeComponentSpec().then(() => {
    console.log("Done");
  });
}

if (command === "json-schema") {
  writeJsonSchema().then(() => {
    console.log("Done");
  });
}
