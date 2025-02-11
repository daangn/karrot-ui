import { source } from "@/app/source";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { client } from "@/sanity/lib/client";
import { GUIDELINE_QUERY } from "@/sanity/lib/queries";
import { PortableContent } from "@/sanity/lib/sanity-content";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableTextBlock } from "sanity";

function getPath(slug: string[]) {
  return slug.join("/");
}

function styleToLevel(style: unknown) {
  if (typeof style !== "string") return;
  return Number.parseInt(style.split("h")[1]);
}

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const path = getPath(params.slug ?? []);
  const guideline = params.slug?.includes("design")
    ? await client.fetch(GUIDELINE_QUERY, { path })
    : null;

  const guidelineToc =
    guideline?.toc?.map((item: PortableTextBlock) => {
      return {
        depth: item.level ?? styleToLevel(item.style) ?? 0,
        title: (
          <PortableContent
            content={{
              ...item,
              style: undefined,
            }}
          />
        ),
        url: `#${item._key}`,
      };
    }) ?? [];

  return (
    <DocsPage
      toc={[...guidelineToc, ...page.data.toc]}
      full={page.data.full}
      lastUpdate={page.data.lastModified}
    >
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
