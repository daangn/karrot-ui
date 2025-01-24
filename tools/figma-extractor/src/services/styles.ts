import path from "node:path";
import { getStylesMetadataInFile, type StyleMetadataItem } from "../api/styles";
import { createContent, createIndex, getFileName, writeFile } from "../cli/write";
import { POSSIBLE_DATA_TYPES } from "../constants";
import { defaultFilter, defaultTransform, type Filter, type Transform } from "../cli/config";

export type GenerateStylesMetadataOptions = {
  filter?: Filter<StyleMetadataItem>;
  transform?: Transform<StyleMetadataItem>;
};

export async function generateStylesMetadata({
  fileKey,
  dir,
  options: { filter = defaultFilter, transform = defaultTransform } = {},
}: {
  fileKey: string;
  dir: string;
  options?: GenerateStylesMetadataOptions;
}) {
  console.log("Generating style metadata");

  const stylesMetadata = (await getStylesMetadataInFile({ fileKey })).filter(filter).map(transform);

  for await (const data of stylesMetadata) {
    const { mjs, dts } = createContent(data);

    const mjsPath = path.join(dir, POSSIBLE_DATA_TYPES.STYLES, `${getFileName(data.name)}.mjs`);
    const dtsPath = path.join(dir, POSSIBLE_DATA_TYPES.STYLES, `${getFileName(data.name)}.d.ts`);

    await writeFile(mjsPath, mjs);
    await writeFile(dtsPath, dts);
  }

  const { mjs, dts } = createIndex(stylesMetadata);

  const mjsPath = path.join(dir, POSSIBLE_DATA_TYPES.STYLES, "index.mjs");
  const dtsPath = path.join(dir, POSSIBLE_DATA_TYPES.STYLES, "index.d.ts");

  await writeFile(mjsPath, mjs);
  await writeFile(dtsPath, dts);
}
