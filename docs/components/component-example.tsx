import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import * as React from "react";

import * as Index from "./example/index.json";
import { CodeBlock } from "./code-block";
import ErrorBoundary from "./error-boundary";
import ExampleFrame from "./example-frame";

interface ComponentExampleProps {
  name: string;

  previewOnly?: boolean;

  height?: number;
}

export function ComponentExample(props: ComponentExampleProps) {
  const { name, height } = props;

  const Code = React.useMemo(() => {
    return (Index as Record<string, string>)[name];
  }, [name]);

  if (props.previewOnly) {
    return (
      <React.Suspense fallback={null}>
        <ExampleFrame name={name} height={height} />
      </React.Suspense>
    );
  }

  return (
    <ErrorBoundary>
      <Tabs items={["미리보기", "코드"]}>
        <Tab value="미리보기">
          <React.Suspense fallback={null}>
            <ExampleFrame name={name} height={height} />
          </React.Suspense>
        </Tab>
        <Tab value="코드">
          <CodeBlock lang="tsx" wrapper={{ allowCopy: true }} code={Code} />
        </Tab>
      </Tabs>
    </ErrorBoundary>
  );
}
