import * as p from "@clack/prompts";
import { cosmiconfig } from "cosmiconfig";
import { execa } from "execa";
import path from "path";
import { z } from "zod";
import { highlight } from "./color";
import { getPackageManager } from "./get-package-manager";

const MODULE_NAME = "seed-design";

const explorer = cosmiconfig(MODULE_NAME, {
  searchPlaces: [`${MODULE_NAME}.json`],
});

export const rawConfigSchema = z
  .object({
    $schema: z.string().optional(),
    rsc: z.coerce.boolean().default(false),
    tsx: z.coerce.boolean().default(true),
    css: z.coerce.boolean().default(true),
    path: z.string(),
  })
  .strict();

export type RawConfig = z.infer<typeof rawConfigSchema>;

export const configSchema = rawConfigSchema.extend({
  resolvedUIPaths: z.string(),
  resolbedHookPaths: z.string(),
  resolvedUtilPaths: z.string(),
});

export async function getConfig(cwd: string) {
  const config = await getRawConfig(cwd);

  if (!config) {
    return null;
  }

  return await resolveConfigPaths(cwd, config);
}

export type Config = z.infer<typeof configSchema>;

export async function resolveConfigPaths(cwd: string, config: RawConfig) {
  const seedComponentRootPath = path.resolve(cwd, config.path);

  return configSchema.parse({
    ...config,
    resolvedUIPaths: path.join(seedComponentRootPath, "ui"),
    resolbedHookPaths: path.join(seedComponentRootPath, "hook"),
    resolvedUtilPaths: path.join(seedComponentRootPath, "util"),
  });
}

export async function getRawConfig(cwd: string): Promise<RawConfig | null> {
  try {
    const configResult = await explorer.search(cwd);
    return rawConfigSchema.parse(configResult.config);
  } catch {
    p.log.error("프로젝트 루트 경로에 `seed-design.json` 파일이 없어요.");

    const isConfirm = await p.confirm({ message: "seed-design.json 파일을 생성하시겠어요?" });
    if (isConfirm === true) {
      const packageManager = await getPackageManager(cwd);
      await execa(packageManager, ["seed-design", "init", "--default"], { cwd });
      p.log.message("seed-design.json 파일이 생성됐어요.");
    } else {
      p.outro(highlight("작업이 취소됐어요."));
      process.exit(1);
    }
  }
}
