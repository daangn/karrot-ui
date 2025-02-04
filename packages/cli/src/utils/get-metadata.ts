import * as p from "@clack/prompts";
import { registryUISchema, type RegistryUIMachineGenerated } from "@/src/schema";

export async function fetchRegistryItems(
  fileNames?: string[],
  baseUrl?: string,
  type: "ui" | "lib" = "ui",
): Promise<RegistryUIMachineGenerated> {
  const results = await Promise.all(
    fileNames.map(async (fileName) => {
      try {
        const response = await fetch(`${baseUrl}/__registry__/${type}/${fileName}.json`);
        return await response.json();
      } catch (error) {
        const index = await fetch(`${baseUrl}/__registry__/${type}/index.json`).then((res) =>
          res.json(),
        );
        const parsedIndex = registryUISchema.parse(index);
        const availableComponents = parsedIndex.map((component) => component.name);

        p.log.error(`${type}:${fileName} 컴포넌트는 레지스트리에 존재하지 않아요.`);
        p.log.info(`사용 가능한 컴포넌트: ${availableComponents.join(", ")}`);
        p.log.info(
          JSON.stringify(
            {
              baseUrl,
              error: error.toString(),
            },
            null,
            2,
          ),
        );
        process.exit(1);
      }
    }),
  );

  return results;
}

export async function fetchRegistryItem(
  fileName: string,
  baseUrl: string,
  type: "ui" | "lib" = "ui",
) {
  const [result] = await fetchRegistryItems([fileName], baseUrl, type);
  return result;
}

export async function getRegistryUIIndex(baseUrl?: string) {
  try {
    const [result] = await fetchRegistryItems(["index"], baseUrl, "ui");

    return registryUISchema.parse(result);
  } catch (error) {
    p.log.error("레지스트리 인덱스를 가져오는 데 실패했어요.");
    p.log.info(
      JSON.stringify(
        {
          baseUrl,
          error: error.toString(),
        },
        null,
        2,
      ),
    );
    process.exit(1);
  }
}

export async function getRegistryLibIndex(baseUrl?: string) {
  const [result] = await fetchRegistryItems(["index"], baseUrl, "lib");

  return registryUISchema.parse(result);
}
