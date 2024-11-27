import { source } from "@/app/source";
import { ComponentExample } from "@/components/component-example";
import { Installation } from "@/components/installation";
import { StackflowExample } from "@/components/stackflow-example";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { createTypeTable } from "fumadocs-typescript/ui";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { AtomIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TokenTable } from "@/components/token-table";
import { ComponentSpecTable } from "@/components/component-spec-table";

const { AutoTypeTable } = createTypeTable();

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            Installation,
            ComponentExample,
            TokenTable,
            ComponentSpecTable,
            Tab,
            Tabs,
            Step,
            Steps,
            File,
            Folder,
            Files,
            AtomIcon,
            StackflowExample,
            AutoTypeTable,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
