import { h } from "preact";

import { Footer } from "@/shared/components/panels";
import { Button } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { useComponentsContext } from "./context";

import type { CheckComponentEventHandler } from "../../types";
import { useMigration } from "../context";

export const ComponentsFooter = () => {
  const { targets } = useMigration();
  const { oldComponents, swapAllComponents, selectedVariants, refresh } = useComponentsContext();

  return (
    <Footer>
      <div className="grow">
        <Button
          onClick={() => {
            swapAllComponents(oldComponents, selectedVariants);
            emit<CheckComponentEventHandler>(
              "CHECK_COMPONENT",
              targets.map(({ id }) => id),
            );
          }}
          fullWidth
          disabled={oldComponents.length === 0}
        >
          {oldComponents.length}개 일괄 교체
        </Button>
      </div>
      <Button secondary onClick={refresh}>
        새로고침
      </Button>
    </Footer>
  );
};
