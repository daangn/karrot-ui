import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import * as React from "react";
import * as Index from "./example/index.json";

import { CodeBlock } from "./code-block";
import ErrorBoundary from "./error-boundary";

import { StackflowPreview } from "./stackflow-preview";

interface StackflowExampleProps {
  names: string[];
}

export function StackflowExample(props: StackflowExampleProps) {
  const { names } = props;

  const code = React.useMemo(() => {
    if (names.length === 0) return "";
    if (names.length === 1) return Index[names[0] as keyof typeof Index];

    return names
      .map((name) => {
        return `// ${name}.tsx\n\n${(Index as Record<string, string>)[name]}`;
      })
      .join("\n\n");
  }, [names]);

  return (
    <ErrorBoundary>
      <Tabs items={["미리보기", "코드"]}>
        <Tab value="미리보기">
          <StackflowPreview names={names} />
        </Tab>
        <Tab value="코드">
          <CodeBlock lang="tsx" wrapper={{ allowCopy: true }} code={code} />
        </Tab>
      </Tabs>
    </ErrorBoundary>
  );
}
