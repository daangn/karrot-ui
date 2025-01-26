import * as fs from "node:fs";
import * as path from "node:path";

const BUILD_LOG_PATH = path.join(
  process.cwd(),
  ".vercel/output/static/_worker.js/nop-build-log.json",
);
const WORKER_DIR_PATH = path.join(process.cwd(), ".vercel/output/static/_worker.js");

const buildLog = JSON.parse(fs.readFileSync(BUILD_LOG_PATH, "utf8"));
const nextEnv = buildLog.buildFiles.functions.edge[0].config.environment;
const processEnv = process.env;

const ENV_VARIABLES = {};

for (const key in nextEnv) {
  if (key.startsWith("__NEXT_PREVIEW_MODE")) {
    ENV_VARIABLES[key] = nextEnv[key];
  }
}

for (const key in processEnv) {
  if (key.startsWith("SANITY")) {
    ENV_VARIABLES[key] = processEnv[key];
  }
}

function traverseDirectory(directory, callback) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      traverseDirectory(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

function define(filePath) {
  if (!filePath.match(/\.js$/)) return;

  let fileContent = fs.readFileSync(filePath, "utf-8");
  let updated = false;

  for (const key in ENV_VARIABLES) {
    const regex = new RegExp(`process\\.env\\.${key}`, "g");
    const replaced = fileContent.replace(regex, JSON.stringify(ENV_VARIABLES[key]));
    if (replaced !== fileContent) {
      fileContent = replaced;
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, fileContent, "utf-8");
    console.log(`Updated: ${filePath}`);
  }
}

traverseDirectory(WORKER_DIR_PATH, define);
