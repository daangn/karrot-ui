import chalk from "chalk";
import { existsSync, promises as fs, readFileSync } from "fs";
import path from "node:path";

import { match } from "ts-pattern";

import { registryUI } from "../registry/registry-ui.js";
import { registryLib } from "../registry/registry-lib.js";
import {
  type RegistryUI,
  type RegistryLib,
  registryUIItemMachineGeneratedSchema,
  registryLibItemMachineGeneratedSchema,
} from "../registry/schema.js";

const GENERATED_REGISTRY_PATH = path.join(process.cwd(), "public", "__registry__");
const REGISTRY_PATH = path.join(process.cwd(), "registry");

type RegistryType = "ui" | "lib";

interface GenerateRegistryIndexProps {
  registry: RegistryUI | RegistryLib;
  type: RegistryType;
}

async function generateRegistryIndex({ registry, type }: GenerateRegistryIndexProps) {
  const metadatasJson = JSON.stringify(registry, null, 2);
  const targetFolder = path.join(GENERATED_REGISTRY_PATH, type);
  const targetPath = path.join(targetFolder, "index.json");

  if (!existsSync(targetFolder)) {
    await fs.mkdir(targetFolder, { recursive: true });
  }

  await fs.writeFile(targetPath, metadatasJson, "utf8");
}

interface GenerateRegistryProps {
  registry: RegistryUI;
  type: RegistryType;
}

function generateRegistryFromFile(file: string) {
  const [type, name] = file.split(":");
  const filePath = path.join(REGISTRY_PATH, type, name);

  if (!existsSync(filePath)) {
    console.log(
      chalk.red(`[Generate Registry] ${type}:${chalk.bgRed(name)} file file does not exist!`),
    );
    return null;
  }

  const content = readFileSync(filePath, "utf8");

  return {
    name,
    type,
    content,
  };
}

async function generateRegistry({ registry, type }: GenerateRegistryProps) {
  const targetPath = path.join(GENERATED_REGISTRY_PATH, type);

  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  for (const item of registry) {
    const fileRegistries =
      item.files?.map((file) => generateRegistryFromFile(file)).filter(Boolean) || [];

    const removeFiles = {
      ...item,
      files: undefined,
    };

    const payload = {
      ...removeFiles,
      registries: [...fileRegistries],
    };

    const parsedPayload = match(type)
      .with("ui", () => registryUIItemMachineGeneratedSchema.parse(payload))
      .with("lib", () => registryLibItemMachineGeneratedSchema.parse(payload))
      .exhaustive();

    await fs.writeFile(
      path.join(targetPath, `${item.name}.json`),
      JSON.stringify(parsedPayload, null, 2),
      "utf8",
    );
  }
}

async function main() {
  console.log(chalk.gray("Generate Component Registry..."));

  await generateRegistryIndex({ registry: registryUI, type: "ui" });
  await generateRegistry({ registry: registryUI, type: "ui" });
  await generateRegistryIndex({ registry: registryLib, type: "lib" });
  await generateRegistry({ registry: registryLib, type: "lib" });

  console.log(chalk.green("Component Registry Generated !"));
}

main();
