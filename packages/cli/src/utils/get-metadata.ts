import { registryComponentSchema, type RegistryComponentMachineGenerated } from "@/src/schema";

const BASE_URL =
  process.env.NODE_ENV === "prod" ? "https://v3.seed-design.io" : "http://localhost:3000";

export async function fetchRegistryComponentItem(
  fileNames?: string[],
): Promise<RegistryComponentMachineGenerated> {
  try {
    const results = await Promise.all(
      fileNames.map(async (fileName) => {
        const response = await fetch(`${BASE_URL}/__registry__/component/${fileName}.json`);
        return await response.json();
      }),
    );

    return results;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch registry from ${BASE_URL}.`);
  }
}

export async function getRegistryComponentIndex() {
  try {
    const [result] = await fetchRegistryComponentItem(["index"]);

    return registryComponentSchema.parse(result);
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch components from ${BASE_URL}.`);
  }
}
