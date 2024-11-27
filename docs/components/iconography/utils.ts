export function getServiceName(metadatas: string[]): string | null {
  const SERVICE_TAG_START_WITH = "service:";
  const serviceNameTag = metadatas.find((metadata) => metadata.startsWith(SERVICE_TAG_START_WITH));
  if (!serviceNameTag) {
    return null;
  }

  return serviceNameTag.split(":")[1];
}
