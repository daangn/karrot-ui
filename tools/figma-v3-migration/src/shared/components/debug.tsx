import { Button, Text } from "@create-figma-plugin/ui";
import { on } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import type { DebugEventHandler } from "../../features/design-system/types";

export const Debug = () => {
  const [debug, setDebug] = useState<{ fileName: string; mjs: string; dts: string }[]>();

  useEffect(() => {
    on<DebugEventHandler>("DEBUG", (payload) => {
      setDebug(payload);
    });
  }, []);

  const handleCopy = async (text: string) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="bg-gray-100 h-full p-4 flex flex-col gap-2">
      <Text>Debug</Text>

      {/* all mjs */}
      <div className="relative">
        <pre className="overflow-y-auto select-text max-h-[100px] p-2 bg-white rounded">
          {debug?.map((item) => item.mjs).join("\n")}
        </pre>
        <Button
          onClick={() => handleCopy(debug?.map((item) => item.mjs).join("\n") || "")}
          className="absolute top-2 right-2"
        >
          복사
        </Button>
      </div>

      {/* all dts */}
      <div className="relative">
        <pre className="overflow-y-auto select-text max-h-[100px] p-2 bg-white rounded">
          {debug?.map((item) => item.dts).join("\n")}
        </pre>
        <Button
          onClick={() => handleCopy(debug?.map((item) => item.dts).join("\n") || "")}
          className="absolute top-2 right-2"
        >
          복사
        </Button>
      </div>
    </div>
  );
};
