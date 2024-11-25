#!/usr/bin/env node

import {
  getJsonSchema,
  getTokenCss,
  type Model,
  parseComponentSpecData,
  getComponentSpecTs,
  validateModels,
  getTokenTs,
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

async function writeTokenTs() {
  const filesToRead = readYAMLFilesSync(artifactsDir);
  const fileContents: Model[] = await Promise.all(
    filesToRead.map((name) => fs.readFile(name, "utf-8").then((res) => YAML.parse(res))),
  );

  const validationResult = validateModels(fileContents);

  if (!validationResult.valid) {
    console.error(validationResult.message);
    process.exit(1);
  }

  const results = getTokenTs(fileContents);

  for (const result of results) {
    const writePath = path.join(process.cwd(), dir, `${result.path}.vars.ts`);

    console.log("Writing", result.path, "to", writePath);

    fs.writeFileSync(writePath, result.code);
  }
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
    const code = getComponentSpecTs(parseComponentSpecData(spec.data));
    const writePath = path.join(process.cwd(), dir, `${spec.metadata.id}.vars.ts`);

    console.log("Writing", spec.metadata.name, "to", writePath);

    fs.writeFileSync(writePath, code);
  }
}

async function writeTokenCss() {
  const filesToRead = readYAMLFilesSync(artifactsDir);
  const fileContents: Model[] = await Promise.all(
    filesToRead.map((name) => fs.readFile(name, "utf-8").then((res) => YAML.parse(res))),
  );

  const validationResult = validateModels(fileContents);

  if (!validationResult.valid) {
    console.error(validationResult.message);
    process.exit(1);
  }

  const code = getTokenCss(fileContents, {
    banner: `:root[data-seed] {
  color-scheme: light dark;
}

:root[data-seed="light-only"] {
  color-scheme: light;
}

:root[data-seed="dark-only"] {
  color-scheme: dark;
}

`,
    selectors: {
      global: {
        default: ":root[data-seed]",
      },
      color: {
        "theme-light": `:root[data-seed][data-seed="light-only"][data-seed-scale-color="dark"],
:root[data-seed][data-seed-scale-color="light"]:not([data-seed="dark-only"]),
:root[data-seed]:not([data-seed="dark-only"]) [data-seed-scale-color="light"]`,
        "theme-dark": `:root[data-seed][data-seed="dark-only"][data-seed-scale-color="light"],
:root[data-seed][data-seed-scale-color="dark"]:not([data-seed="light-only"]),
:root[data-seed]:not([data-seed="light-only"]) [data-seed-scale-color="dark"]`,
      },
    },
  });

  const writePath = path.join(process.cwd(), dir, "token.css");

  console.log("Writing token css to", writePath);

  fs.writeFileSync(writePath, code);
}

async function writeJsonSchema() {
  const filesToRead = readYAMLFilesSync(artifactsDir);
  const fileContents = await Promise.all<Model>(
    filesToRead.map((name) => fs.readFile(name, "utf-8").then((res) => YAML.parse(res))),
  );

  const validationResult = validateModels(fileContents);

  if (!validationResult.valid) {
    console.error(validationResult.message);
    process.exit(1);
  }

  const jsonSchema = getJsonSchema(fileContents.filter((model) => model.kind === "Tokens"));
  const writePath = path.join(artifactsDir, "components", "schema.json");

  console.log("Writing schema to", writePath);

  fs.writeFileSync(writePath, jsonSchema);
}

async function writeJson() {
  const filesToRead = readYAMLFilesSync(artifactsDir);
  const entries = await Promise.all(
    filesToRead.map(async (name) => ({
      file: name,
      content: await fs.readFile(name, "utf-8").then((res) => YAML.parse(res) as Model),
    })),
  );

  const validationResult = validateModels(entries.map((entry) => entry.content));

  if (!validationResult.valid) {
    console.error(validationResult.message);
    process.exit(1);
  }

  for (const { file, content } of entries) {
    const code = JSON.stringify(content, null, 2);
    const relativePath = path.relative(artifactsDir, file);
    const withoutExt = relativePath.replace(path.extname(relativePath), "");
    const writePath = path.join(process.cwd(), dir, `${withoutExt}.json`);

    console.log("Writing", withoutExt, "to", writePath);

    if (!fs.existsSync(path.dirname(writePath))) {
      fs.mkdirpSync(path.dirname(writePath));
    }

    fs.writeFileSync(writePath, code);
  }
}

if (command === "token-ts") {
  writeTokenTs().then(() => {
    console.log("Done");
  });
}

if (command === "component-spec") {
  writeComponentSpec().then(() => {
    console.log("Done");
  });
}

if (command === "token-css") {
  writeTokenCss().then(() => {
    console.log("Done");
  });
}

if (command === "json-schema") {
  writeJsonSchema().then(() => {
    console.log("Done");
  });
}

if (command === "json") {
  writeJson().then(() => {
    console.log("Done");
  });
}
