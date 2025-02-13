import type { FigmaMetadata } from "@/features/design-system/types";

export const getFigmaMetadata = (): FigmaMetadata => {
  const currentUser = figma.currentUser;
  const currentPage = figma.currentPage;
  const currentRoot = figma.root;
  const fileKey = figma.fileKey;

  if (!currentUser || !currentPage || !currentRoot || !fileKey) {
    throw new Error("Figma metadata not found");
  }

  return {
    currentUser: {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      id: currentUser.id!,
      name: currentUser.name,
    },
    currentPage: {
      id: currentPage.id,
      name: currentPage.name,
    },
    currentRoot: {
      name: currentRoot.name,
    },
    fileKey,
  };
};
