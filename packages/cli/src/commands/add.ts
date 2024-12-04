import { getConfig } from "@/src/utils/get-config";
import { fetchRegistryUIItem, getRegistryUIIndex } from "@/src/utils/get-metadata";
import { getPackageManager } from "@/src/utils/get-package-manager";
import { transform } from "@/src/utils/transformers";
import * as p from "@clack/prompts";
import { execa } from "execa";
import fs from "fs-extra";
import path from "path";
import color from "picocolors";
import { z } from "zod";

import type { CAC } from "cac";
import { addRelativeComponents } from "../utils/add-relative-components";
import { BASE_URL } from "../constants";
import { highlight } from "../utils/color";

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  cwd: z.string(),
  all: z.boolean(),
  baseUrl: z.string().optional(),
  // yes: z.boolean(),
  // overwrite: z.boolean(),
  // path: z.string().optional(),
});

export const addCommand = (cli: CAC) => {
  cli
    .command("add [...components]", "add component")
    .option("-a, --all", "Add all components", {
      default: false,
    })
    .option("-c, --cwd <cwd>", "the working directory. defaults to the current directory.", {
      default: process.cwd(),
    })
    .option(
      "-u, --baseUrl <baseUrl>",
      "the base url of the registry. defaults to the current directory.",
      {
        default: BASE_URL,
      },
    )
    .example("seed-design add box-button")
    .example("seed-design add alert-dialog")
    .action(async (components, opts) => {
      p.intro(color.bgCyan("컴포넌트 추가하기"));
      const options = addOptionsSchema.parse({
        components,
        ...opts,
      });
      const cwd = options.cwd;
      const baseUrl = options.baseUrl;
      const config = await getConfig(cwd);
      const registryComponentIndex = await getRegistryUIIndex(baseUrl);

      let selectedComponents: string[] = options.all
        ? registryComponentIndex.map((registry) => registry.name)
        : options.components;

      if (!options.components?.length && !options.all) {
        const selects = await p.multiselect<
          { label: string; value: string; hint: string }[],
          string
        >({
          message: "추가할 컴포넌트를 선택해주세요 (스페이스바로 여러 개 선택 가능)",
          options: registryComponentIndex.map((metadata) => {
            return {
              label: metadata.name,
              value: metadata.name,
              hint: metadata.description,
            };
          }),
        });

        if (p.isCancel(selects)) {
          p.log.error("취소되었어요.");
          process.exit(0);
        }

        selectedComponents = selects as string[];
      }

      if (!selectedComponents?.length) {
        p.log.error("컴포넌트를 찾을 수 없어요.");
        process.exit(0);
      }

      const allComponents = addRelativeComponents(selectedComponents, registryComponentIndex);
      const addedComponents = allComponents.filter((c) => !selectedComponents.includes(c));
      const registryComponentItems = await fetchRegistryUIItem(allComponents, baseUrl);

      p.log.message(`선택된 컴포넌트: ${highlight(selectedComponents.join(", "))}`);
      if (addedComponents.length) {
        p.log.message(`내부 의존성: ${highlight(addedComponents.join(", "))} 추가됩니다.`);
      }

      // 선택된 컴포넌트.json 레지스트리 파일 기반으로 컴포넌트를 추가합니다.
      for (const component of registryComponentItems) {
        for (const registry of component.registries) {
          let targetPath = "";
          switch (registry.type) {
            case "ui":
              targetPath = config.resolvedUIPaths;
              break;
            case "hook":
              targetPath = config.resolbedHookPaths;
              break;
            case "util":
              targetPath = config.resolvedUtilPaths;
              break;
            default:
              break;
          }

          if (!fs.existsSync(targetPath)) {
            await fs.mkdir(targetPath, { recursive: true });
          }

          let filePath = path.resolve(targetPath, registry.name);

          const content = await transform({
            filename: registry.name,
            config,
            raw: registry.content,
          });

          if (!config.tsx) {
            filePath = filePath.replace(/\.tsx$/, ".jsx");
            filePath = filePath.replace(/\.ts$/, ".js");
          }

          await fs.writeFile(filePath, content);
          const relativePath = path.relative(cwd, filePath);
          p.log.info(`${highlight(registry.name)} 추가됨: ${highlight(relativePath)}`);
        }

        const packageManager = await getPackageManager(cwd);

        const { start, stop } = p.spinner();

        // Install dependencies.
        if (component.dependencies?.length) {
          start(color.gray("의존성 설치중..."));

          const result = await execa(
            packageManager,
            [packageManager === "npm" ? "install" : "add", ...component.dependencies],
            {
              cwd,
            },
          );

          if (result.failed) {
            console.error(result.all);
            process.exit(1);
          } else {
            for (const deps of component.dependencies) {
              p.log.info(`- ${deps}`);
            }
            stop("의존성 설치 완료.");
          }
        }

        // Install devDependencies.
        if (component.devDependencies?.length) {
          start(color.gray("개발 의존성 설치중..."));

          const result = await execa(
            packageManager,
            [packageManager === "npm" ? "install" : "add", "-D", ...component.devDependencies],
            {
              cwd,
            },
          );

          if (result.failed) {
            console.error(result.all);
            process.exit(1);
          } else {
            for (const deps of component.devDependencies) {
              p.log.info(`- ${deps}`);
            }
            stop("개발 의존성 설치 완료.");
          }
        }
      }

      p.outro(`${components.join(", ")} 컴포넌트를 추가했어요.`);
    });
};
