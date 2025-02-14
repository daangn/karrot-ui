import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import * as React from "react";
import * as Index from "./example/index.json";

import ErrorBoundary from "./error-boundary";
import { CodeBlock } from "./code-block";
import { ComponentPreview } from "./component-preview";

interface ComponentExampleProps {
  name: string;

  previewOnly?: boolean;
}

export function ComponentExample(props: ComponentExampleProps) {
  const { name } = props;

  const Code = React.useMemo(() => {
    return (Index as Record<string, string>)[name];
  }, [name]);

  if (props.previewOnly) {
    return (
      <React.Suspense fallback={null}>
        <ComponentPreview name={name} />
      </React.Suspense>
    );
  }

  return (
    <ErrorBoundary>
      <Tabs items={["미리보기", "코드"]}>
        <Tab value="미리보기">
          <ComponentPreview name={name} />
        </Tab>
        <Tab value="코드">
          <CodeBlock lang="tsx" wrapper={{ allowCopy: true }} code={Code} />
        </Tab>
      </Tabs>
    </ErrorBoundary>
  );
}
