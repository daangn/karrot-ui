import path from "node:path";
import { getVariableMetadataItemsInFile, type VariableMetadataItem } from "../api/variables";
import { createContent, createIndex, getFileName, writeFile } from "../cli/write";
import { POSSIBLE_DATA_TYPES } from "../constants";
import { defaultFilter, defaultTransform, type Filter, type Transform } from "../cli/config";

export type GenerateVariablesMetadataOptions = {
  filter?: Filter<VariableMetadataItem>;
  transform?: Transform<VariableMetadataItem>;
};

export async function generateVariablesMetadata({
  fileKey,
  dir,
  options: { filter = defaultFilter, transform = defaultTransform } = {},
}: {
  fileKey: string;
  dir: string;
  options?: GenerateVariablesMetadataOptions;
}) {
  console.log("Generating variable metadata");

  const variablesMetadata = (await getVariableMetadataItemsInFile({ fileKey }))
    .filter(filter)
    .map(transform);

  for await (const data of variablesMetadata) {
    const { mjs, dts } = createContent(data);

    const mjsPath = path.join(dir, POSSIBLE_DATA_TYPES.VARIABLES, `${getFileName(data.name)}.mjs`);
    const dtsPath = path.join(dir, POSSIBLE_DATA_TYPES.VARIABLES, `${getFileName(data.name)}.d.ts`);

    await writeFile(mjsPath, mjs);
    await writeFile(dtsPath, dts);
  }

  const { mjs, dts } = createIndex(variablesMetadata);

  const mjsPath = path.join(dir, POSSIBLE_DATA_TYPES.VARIABLES, "index.mjs");
  const dtsPath = path.join(dir, POSSIBLE_DATA_TYPES.VARIABLES, "index.d.ts");

  await writeFile(mjsPath, mjs);
  await writeFile(dtsPath, dts);
}
