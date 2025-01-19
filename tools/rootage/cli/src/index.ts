#!/usr/bin/env node

import {
  buildContext,
  getComponentSpecDts,
  getComponentSpecIndexDts,
  getComponentSpecIndexMjs,
  getComponentSpecMjs,
  getJsonSchema,
  getTokenCss,
  getTokenDts,
  getTokenMjs,
  parse,
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

  const fileContents = await Promise.all(filePaths.map((name) => fs.readFile(name, "utf-8")));

  const models = fileContents.map((content) => YAML.parse(content) as Model);

  const ast = parse(models);
  const ctx = buildContext(ast);

  const validationResult = validate(ctx);

  if (!validationResult.valid) {
    console.error(validationResult.message);
    process.exit(1);
  }

  return {
    ast,
    ctx,
    filePaths,
    models,
  };
}

async function writeTokenTs() {
  const { ast } = await prepare();

  const mjsResults = getTokenMjs(ast);
  const dtsResults = getTokenDts(ast);

  for (const result of mjsResults) {
    const writePath = path.join(process.cwd(), dir, result.path);

    console.log("Writing", result.path, "to", writePath);

    if (!fs.existsSync(path.dirname(writePath))) {
      fs.mkdirpSync(path.dirname(writePath));
    }
    fs.writeFileSync(writePath, result.code);
  }

  for (const result of dtsResults) {
    const writePath = path.join(process.cwd(), dir, result.path);

    console.log("Writing", result.path, "to", writePath);

    fs.writeFileSync(writePath, result.code);
  }
}

async function writeComponentSpec() {
  const { ast } = await prepare();

  for (const spec of ast.componentSpecs) {
    const mjsCode = getComponentSpecMjs(ast, spec.id);
    const mjsWritePath = path.join(process.cwd(), dir, `${spec.id}.mjs`);

    console.log("Writing", spec.name, "to", mjsWritePath);

    if (!fs.existsSync(path.dirname(mjsWritePath))) {
      fs.mkdirpSync(path.dirname(mjsWritePath));
    }
    fs.writeFileSync(mjsWritePath, mjsCode);

    const dtsCode = getComponentSpecDts(ast, spec.id);
    const dtsWritePath = path.join(process.cwd(), dir, `${spec.id}.d.ts`);

    console.log("Writing", spec.name, "to", dtsWritePath);

    fs.writeFileSync(dtsWritePath, dtsCode);
  }

  const mjsIndexCode = getComponentSpecIndexMjs(ast);
  const mjsIndexWritePath = path.join(process.cwd(), dir, "index.mjs");

  console.log("Writing index to", mjsIndexWritePath);

  fs.writeFileSync(mjsIndexWritePath, mjsIndexCode);

  const dtsIndexCode = getComponentSpecIndexDts(ast);
  const dtsIndexWritePath = path.join(process.cwd(), dir, "index.d.ts");

  console.log("Writing index to", dtsIndexWritePath);

  fs.writeFileSync(dtsIndexWritePath, dtsIndexCode);
}

async function writeTokenCss() {
  const { ast } = await prepare();

  const code = getTokenCss(ast, {
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
  const { ast } = await prepare();

  const jsonSchema = getJsonSchema(ast);
  const writePath = path.join(artifactsDir, "components", "schema.json");

  console.log("Writing schema to", writePath);

  fs.writeFileSync(writePath, jsonSchema);
}

async function writeJson() {
  const { ast, models, filePaths } = await prepare();
  const entries = filePaths.map((file, index) => ({ file, content: models[index] }));

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

  const code = JSON.stringify(ast, null, 2);
  const writePath = path.join(process.cwd(), dir, "parsed.json");

  console.log("Writing parsed.json to", writePath);

  if (!fs.existsSync(path.dirname(writePath))) {
    fs.mkdirpSync(path.dirname(writePath));
  }

  fs.writeFileSync(writePath, code);
}

if (command === "token-ts") {
  console.log("Start");
  writeTokenTs().then(() => {
    console.log("Done");
    process.exit(0);
  });
}

if (command === "component-spec") {
  console.log("Start");
  writeComponentSpec().then(() => {
    console.log("Done");
    process.exit(0);
  });
}

if (command === "token-css") {
  console.log("Start");
  writeTokenCss().then(() => {
    console.log("Done");
    process.exit(0);
  });
}

if (command === "json-schema") {
  console.log("Start");
  writeJsonSchema().then(() => {
    console.log("Done");
    process.exit(0);
  });
}

if (command === "json") {
  console.log("Start");
  writeJson().then(() => {
    console.log("Done");
    process.exit(0);
  });
}
