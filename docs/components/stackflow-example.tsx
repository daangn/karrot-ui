import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import * as React from "react";
import * as Index from "./example/index.json";

import ErrorBoundary from "./error-boundary";
import { CodeBlock } from "./code-block";

import { Stackflow } from "./stackflow/Stackflow";
import type { ActivityComponentType } from "@stackflow/react/future";
import type { RegisteredActivityName } from "@stackflow/config";

interface StackflowExampleProps {
  names: string[];
}

export function StackflowExample(props: StackflowExampleProps) {
  const { names } = props;

  const activities = React.useMemo(() => {
    const Components = names.map((name) => {
      const Component = React.lazy(() => import(`./example/${name}.tsx`));

      if (!Component) {
        throw new Error(`Component not found: ${name}`);
      }

      return {
        name: name as RegisteredActivityName,
        component: Component,
      };
    });

    return Components;
  }, [names]);

  const Code = React.useMemo(() => {
    return (Index as Record<string, string>)[names[0]];
  }, [names]);

  return (
    <ErrorBoundary>
      <React.Suspense fallback={null}>
        <Tabs items={["미리보기", "코드"]}>
          <Tab value="미리보기">
            <Stackflow activities={activities} />
          </Tab>
          <Tab value="코드">
            <CodeBlock lang="tsx" wrapper={{ allowCopy: true }} code={Code} />
          </Tab>
        </Tabs>
      </React.Suspense>
    </ErrorBoundary>
  );
}
