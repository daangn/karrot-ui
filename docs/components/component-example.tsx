import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import * as React from "react";
import * as Index from "./example/index.json";

import ErrorBoundary from "./error-boundary";
import { CodeBlock } from "./code-block";

interface ComponentExampleProps {
  name: string;
}

export function ComponentExample(props: ComponentExampleProps) {
  const { name } = props;

  const Preview = React.useMemo(() => {
    const Component = React.lazy(() => import(`./example/${name}.tsx`));

    if (!Component) {
      return <div>컴포넌트가 존재하지 않습니다.</div>;
    }

    return <Component />;
  }, [name]);

  const Code = React.useMemo(() => {
    return (Index as Record<string, string>)[name];
  }, [name]);

  return (
    <ErrorBoundary>
      <Tabs items={["미리보기", "코드"]}>
        <Tab value="미리보기">
          <React.Suspense fallback={null}>
            <div
              className="not-prose example-reset"
              style={{
                minHeight: "300px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--seed-v3-color-bg-layer-default)",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                borderRadius: ".75rem",
              }}
            >
              {Preview}
            </div>
          </React.Suspense>
        </Tab>
        <Tab value="코드">
          <CodeBlock lang="tsx" wrapper={{ allowCopy: true }} code={Code} />
        </Tab>
      </Tabs>
    </ErrorBoundary>
  );
}
