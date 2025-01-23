#!/usr/bin/env node

import { cac } from "cac";
import { z } from "zod";
import { cosmiconfig } from "cosmiconfig";
import { generateComponentSetMetadata } from "../services/component-sets";
import { ENV } from "../env";
import path from "node:path";
import pkg from "../../package.json" with { type: "json" };
import { MODULE_NAME, POSSIBLE_DATA_TYPES } from "../constants";
import { generateStylesMetadata } from "../services/styles";
import { config, type Config } from "./config";
import { generateVariablesMetadata } from "../services/variables";

const cli = cac();
const paramSchema = z.object({
  dataTypes: z.array(
    z.enum([
      POSSIBLE_DATA_TYPES.COMPONENT_SETS,
      POSSIBLE_DATA_TYPES.VARIABLES,
      POSSIBLE_DATA_TYPES.STYLES,
    ]),
  ),
  dir: z.string(),
});

cli
  .command("<dir> [...data-types]", "메타데이터 생성")
  .example(
    `  $ FIGMA_FILE_KEY="foo" FIGMA_PERSONAL_ACCESS_TOKEN="bar" yarn figma-extractor ${Object.values(
      POSSIBLE_DATA_TYPES,
    )
      .slice(0, 2)
      .join(" ")} src/data`,
  )
  .action(async (paramDir, paramDataTypes) => {
    const { dataTypes, dir } = paramSchema.parse({ dataTypes: paramDataTypes, dir: paramDir });

    const resolvedDir = path.join(process.cwd(), dir);

    const generateAll = dataTypes.length === 0;

    const fileKey = config.fileKey ?? ENV.FIGMA_FILE_KEY;

    if (!fileKey) {
      throw new Error(
        "`FIGMA_FILE_KEY` 환경 변수를 제공하거나 config 파일에 `fileKey`를 설정해주세요.",
      );
    }

    if (generateAll || dataTypes.includes("component-sets")) {
      await generateComponentSetMetadata({
        fileKey,
        dir: resolvedDir,
        options: config.data.componentSet,
      });
    }

    if (generateAll || dataTypes.includes("styles")) {
      await generateStylesMetadata({
        fileKey,
        dir: resolvedDir,
        options: config.data.style,
      });
    }

    if (generateAll || dataTypes.includes("variables")) {
      await generateVariablesMetadata({
        fileKey,
        dir: resolvedDir,
        options: config.data.variable,
      });
    }
  });

cli.version(pkg.version);
cli.help();
cli.parse();
