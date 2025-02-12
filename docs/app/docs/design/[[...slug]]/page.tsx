import { source } from "@/app/source";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { client } from "@/sanity/lib/client";
import { GUIDELINE_QUERY } from "@/sanity/lib/queries";
import { PortableContent } from "@/sanity/lib/sanity-content";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

function getPath(slug: string[]) {
  return slug.join("/");
}

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const fullPath = ["design", ...(params.slug ?? [])];
  const page = source.getPage(fullPath);
  if (!page) notFound();

  const MDX = page.data.body;
  const path = getPath(params.slug ?? []);
  const guideline = await client.fetch(GUIDELINE_QUERY, { path });

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} lastUpdate={page.data.lastModified}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        {guideline && <PortableContent content={guideline.content} />}
        <MDX components={mdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source
    .generateParams()
    .filter((params) => params.slug?.[0] === "design")
    .map((params) => ({
      slug: params.slug?.slice(1),
    }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const fullPath = ["design", ...(params.slug ?? [])];
  const page = source.getPage(fullPath);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
