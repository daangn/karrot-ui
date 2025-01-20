import { emit, on, showUI } from "@create-figma-plugin/utilities";
import type {
  RequestComponentKeyHandler,
  RequestComponentPropertyDefinitionsHandler,
  RequestCurrentPageComponentSetDefinitionHandler,
  RequestRootageTokensHandler,
  ResponseHandler,
} from "./types";
import { getColorRootageTokens } from "./rootage";
import { getCurrentPageComponentSetDefinition } from "./component";

export default function () {
  on<RequestCurrentPageComponentSetDefinitionHandler>(
    "REQUEST_CURRENT_PAGE_COMPONENT_SET_DEFINITION",
    () => {
      const result = getCurrentPageComponentSetDefinition();
      emit<ResponseHandler>("RESPONSE", JSON.stringify(result, null, 2));
    },
  );

  on<RequestComponentPropertyDefinitionsHandler>("REQUEST_COMPONENT_PROPERTY_DEFINITIONS", () => {
    const result = (figma.currentPage.selection[0] as ComponentSetNode)
      ?.componentPropertyDefinitions;

    if (!result) {
      return;
    }

    emit<ResponseHandler>("RESPONSE", JSON.stringify(result, null, 2));
  });

  on<RequestComponentKeyHandler>("REQUEST_COMPONENT_KEY", () => {
    const result = (figma.currentPage.selection[0] as ComponentSetNode)?.key;

    if (!result) {
      return;
    }

    emit<ResponseHandler>("RESPONSE", result);
  });

  on<RequestRootageTokensHandler>("REQUEST_ROOTAGE_TOKENS", (scope) => {
    if (scope === "color") {
      emit<ResponseHandler>("RESPONSE", getColorRootageTokens());
    }
  });

  showUI({
    height: 640,
    width: 480,
  });
}
