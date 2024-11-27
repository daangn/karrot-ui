import { Button, Container, TextboxMultiline, render } from "@create-figma-plugin/ui";
import { emit, on } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";

import type {
  RequestComponentKeyHandler,
  RequestComponentPropertyDefinitionsHandler,
  RequestRootageTokensHandler,
  ResponseHandler,
} from "./types";

function Plugin() {
  const [code, setCode] = useState<string | null>(null);

  const copy = useCallback((text: string) => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value = text;
    $textarea.select();
    document.execCommand("copy");
    document.body.removeChild($textarea);
  }, []);

  const onCopy = useCallback(() => {
    if (code) {
      copy(code);
    }
  }, [code, copy]);

  useEffect(() => {
    const handler = (code: string) => {
      setCode(code);
    };
    const unsubscribe = on<ResponseHandler>("RESPONSE", handler);
    return () => {
      unsubscribe();
    };
  });

  return (
    <Container space="medium">
      <Button
        fullWidth
        onClick={useCallback(
          () =>
            emit<RequestComponentPropertyDefinitionsHandler>(
              "REQUEST_COMPONENT_PROPERTY_DEFINITIONS",
            ),
          [],
        )}
      >
        GET ComponentPropertyDefinitions
      </Button>
      <Button
        fullWidth
        onClick={useCallback(() => emit<RequestComponentKeyHandler>("REQUEST_COMPONENT_KEY"), [])}
      >
        GET ComponentKey
      </Button>
      <Button
        fullWidth
        onClick={useCallback(
          () => emit<RequestRootageTokensHandler>("REQUEST_ROOTAGE_TOKENS", "color"),
          [],
        )}
      >
        GET Color Tokens
      </Button>
      <TextboxMultiline grow value={code ?? ""} />
      <Button fullWidth onClick={onCopy}>
        Copy
      </Button>
    </Container>
  );
}

export default render(Plugin);
