import { registryUISchema, type RegistryUIMachineGenerated } from "@/src/schema";

export async function fetchRegistryUIItem(
  fileNames?: string[],
  baseUrl?: string,
): Promise<RegistryUIMachineGenerated> {
  try {
    const results = await Promise.all(
      fileNames.map(async (fileName) => {
        const response = await fetch(`${baseUrl}/__registry__/ui/${fileName}.json`);
        return await response.json();
      }),
    );

    return results;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch registry from ${baseUrl}.`);
  }
}

export async function getRegistryUIIndex(baseUrl?: string) {
  try {
    const [result] = await fetchRegistryUIItem(["index"], baseUrl);

    return registryUISchema.parse(result);
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch components from ${baseUrl}.`);
  }
}
