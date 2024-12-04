import * as p from "@clack/prompts";
import { registryUISchema, type RegistryUIMachineGenerated } from "@/src/schema";

export async function fetchRegistryUIItem(
  fileNames?: string[],
  baseUrl?: string,
): Promise<RegistryUIMachineGenerated> {
  const results = await Promise.all(
    fileNames.map(async (fileName) => {
      try {
        const response = await fetch(`${baseUrl}/__registry__/ui/${fileName}.json`);
        return await response.json();
      } catch (error) {
        const index = await fetch(`${baseUrl}/__registry__/ui/index.json`).then((res) =>
          res.json(),
        );
        const parsedIndex = registryUISchema.parse(index);
        const availableComponents = parsedIndex.map((component) => component.name);

        p.log.error(`${fileName} 컴포넌트는 레지스트리에 존재하지 않아요.`);
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

export async function getRegistryUIIndex(baseUrl?: string) {
  try {
    const [result] = await fetchRegistryUIItem(["index"], baseUrl);

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
