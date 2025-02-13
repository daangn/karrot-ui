import { h } from "preact";
import { createContext, type PropsWithChildren } from "preact/compat";
import { useContext, useEffect, useState } from "preact/hooks";

import type { FigmaMetadata, SendFigmaMetadataEventHandler } from "@/features/design-system/types";
import { on } from "@create-figma-plugin/utilities";

export const FigmaMetadataContext = createContext<FigmaMetadata | null>(null);

export const FigmaMetadataProvider = ({ children }: PropsWithChildren) => {
  const [figmaMetadata, setFigmaMetadata] = useState<FigmaMetadata | null>(null);

  useEffect(() => {
    on<SendFigmaMetadataEventHandler>("SEND_FIGMA_METADATA", (metadata) => {
      setFigmaMetadata(metadata);
    });
  }, []);

  return (
    <FigmaMetadataContext.Provider value={figmaMetadata}>{children}</FigmaMetadataContext.Provider>
  );
};

export function useFigmaMetadata() {
  const context = useContext(FigmaMetadataContext);

  return context;
}
