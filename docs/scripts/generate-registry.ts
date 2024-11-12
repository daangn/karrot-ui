import chalk from "chalk";
import { existsSync, promises as fs, readFileSync } from "fs";
import path from "node:path";

import { match } from "ts-pattern";

import { registryUI } from "../registry/registry-ui.js";
import { registryHook } from "../registry/registry-hook.js";
import { registryUtil } from "../registry/registry-util.js";
import {
  type RegistryUI,
  type RegistryHook,
  type RegistryUtil,
  registryUIItemMachineGeneratedSchema,
  registryHookItemMachineGeneratedSchema,
  registryUtilItemMachineGeneratedSchema,
} from "../registry/schema.js";

const GENERATED_REGISTRY_PATH = path.join(process.cwd(), "public", "__registry__");
const REGISTRY_PATH = path.join(process.cwd(), "registry");

type RegistryType = "ui" | "hook" | "util";

interface GenerateRegistryIndexProps {
  registry: RegistryUI | RegistryHook | RegistryUtil;
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
async function generateRegistry({ registry, type }: GenerateRegistryProps) {
  const targetPath = path.join(GENERATED_REGISTRY_PATH, type);

  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  for (const item of registry) {
    const registries = item.files
      ?.map((file) => {
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
      })
      .filter(Boolean);

    const removeFiles = {
      ...item,
      files: undefined,
    };

    const payload = {
      ...removeFiles,
      registries,
    };

    const parsedPayload = match(type)
      .with("ui", () => registryUIItemMachineGeneratedSchema.parse(payload))
      // TODO
      .with("hook", () => registryHookItemMachineGeneratedSchema.parse(payload))
      // TODO
      .with("util", () => registryUtilItemMachineGeneratedSchema.parse(payload))
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
  await generateRegistryIndex({ registry: registryHook, type: "hook" });
  await generateRegistry({ registry: registryHook, type: "hook" });
  await generateRegistryIndex({ registry: registryUtil, type: "util" });
  await generateRegistry({ registry: registryUtil, type: "util" });

  console.log(chalk.green("Component Registry Generated !"));
}

main();
