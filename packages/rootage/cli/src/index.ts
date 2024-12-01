#!/usr/bin/env node

import {
  buildRootage,
  getComponentSpecTs,
  getJsonSchema,
  getTokenCss,
  getTokenTs,
  validate,
  type Model,
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

async function prepare() {
  const filePaths = readYAMLFilesSync(artifactsDir);
  const fileContents: Model[] = await Promise.all(
    filePaths.map((name) => fs.readFile(name, "utf-8").then((res) => YAML.parse(res))),
  );

  const ctx = buildRootage(fileContents);
  const validationResult = validate(ctx);

  if (!validationResult.valid) {
    console.error(validationResult.message);
    process.exit(1);
  }

  return {
    ctx,
    filePaths,
    fileContents,
  };
}

async function writeTokenTs() {
  const { ctx } = await prepare();

  const results = getTokenTs(ctx);

  for (const result of results) {
    const writePath = path.join(process.cwd(), dir, `${result.path}.vars.ts`);

    console.log("Writing", result.path, "to", writePath);

    fs.writeFileSync(writePath, result.code);
  }
}

async function writeComponentSpec() {
  const { ctx } = await prepare();

  for (const spec of ctx.componentSpecs) {
    const code = getComponentSpecTs(spec.data);
    const writePath = path.join(process.cwd(), dir, `${spec.id}.vars.ts`);

    console.log("Writing", spec.name, "to", writePath);

    fs.writeFileSync(writePath, code);
  }
}

async function writeTokenCss() {
  const { ctx } = await prepare();

  const code = getTokenCss(ctx, {
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
  const { ctx } = await prepare();

  const jsonSchema = getJsonSchema(ctx);
  const writePath = path.join(artifactsDir, "components", "schema.json");

  console.log("Writing schema to", writePath);

  fs.writeFileSync(writePath, jsonSchema);
}

async function writeJson() {
  const { fileContents, filePaths } = await prepare();
  const entries = filePaths.map((file, index) => ({ file, content: fileContents[index] }));

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
