import { client } from "@/sanity/lib/client";
import { SanityImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_QUERY, SINGLE_BLOG_QUERY } from "@/sanity/lib/queries";
import { PortableContent } from "@/sanity/lib/sanity-content";
import { SanityImageAsset } from "@sanity/asset-utils";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableTextBlock } from "sanity";

interface Blog {
  title: string;
  description: string;
  thumbnail: SanityImageAsset;
  slug: {
    current: string;
    _type: "slug";
  };
  publishedAt: string;
  content: PortableTextBlock | PortableTextBlock[];
  toc?: {
    _key: string;
    level: number;
  }[];
}

export default async function Page({
  params,
}: {
  params: { slug?: string };
}) {
  const page = await sanityFetch({
    query: SINGLE_BLOG_QUERY,
    params: {
      slug: params.slug,
    },
  }).then((res) => res.data as Blog);

  if (!page) {
    notFound();
  }

  const toc = page.toc?.map((item) => {
    return {
      depth: item.level ?? 0,
      title: (
        <PortableContent
          content={{
            ...(item as PortableTextBlock),
            style: undefined,
          }}
        />
      ),
      url: `#${item._key}`,
    };
  });

  return (
    <DocsPage toc={toc}>
      <DocsTitle>{page.title}</DocsTitle>
      <DocsDescription>{page.description}</DocsDescription>
      <DocsBody>
        <SanityImage value={page.thumbnail} className="rounded-[26px]" />
        <PortableContent content={page.content} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const blogs = await client.fetch<Blog[]>(
    BLOG_QUERY,
    {},
    {
      perspective: "published",
    },
  );

  const slugs = blogs.map((blog) => {
    return { slug: blog.slug.current };
  });

  return slugs;
}

export async function generateMetadata({ params }: { params: { slug?: string } }) {
  const blogs = await sanityFetch({
    query: BLOG_QUERY,
    stega: false,
  }).then((res) => res.data as Blog[]);

  const page = blogs.find((blog) => blog.slug.current === params.slug);

  return {
    title: page?.title,
    description: page?.description,
  } satisfies Metadata;
}
