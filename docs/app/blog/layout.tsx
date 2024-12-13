import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { Suspense, type ReactNode } from "react";
import { docsOptions } from "../layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...docsOptions}>
      <Suspense>{children}</Suspense>
    </DocsLayout>
  );
}
