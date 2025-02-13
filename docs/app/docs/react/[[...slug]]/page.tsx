import { source } from "@/app/source";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const fullPath = ["react", ...(params.slug ?? [])];
  const page = source.getPage(fullPath);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} lastUpdate={page.data.lastModified}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={mdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source
    .generateParams()
    .filter((params) => params.slug?.[0] === "react")
    .map((params) => ({
      slug: params.slug?.slice(1),
    }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const fullPath = ["react", ...(params.slug ?? [])];
  const page = source.getPage(fullPath);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
