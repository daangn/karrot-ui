import { Live } from "@/components/live";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { type ReactNode } from "react";
import { docsOptions } from "../layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Live />
      <DocsLayout {...docsOptions}>{children}</DocsLayout>
    </>
  );
}
