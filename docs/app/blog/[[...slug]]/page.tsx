import { client } from "@/components/sanity/client";
import { SanityImage } from "@/components/sanity/image";
import { PortableContent } from "@/components/sanity/sanity-content";
import { SanityImageAsset } from "@sanity/asset-utils";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Blog {
  title: string;
  description: string;
  thumbnail: SanityImageAsset;
  slug: {
    current: string;
    _type: "slug";
  };
  publishedAt: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  content: any;
}

const BLOG_QUERY = `*[_type == "blog"] {
    title,
    description,
    thumbnail,
    slug,
    publishedAt,
    content
  }`;

const SINGLE_BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    description,
    thumbnail,
    slug,
    publishedAt,
    content
  }`;

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  if (!params.slug) notFound();

  const blog = await client.fetch<Blog>(SINGLE_BLOG_QUERY, {
    slug: params.slug[0],
  });

  if (!blog) {
    return (
      <DocsPage>
        <DocsTitle> </DocsTitle>
      </DocsPage>
    );
  }

  return (
    <DocsPage>
      <DocsTitle>{blog.title}</DocsTitle>
      <DocsDescription>{blog.description}</DocsDescription>
      <DocsBody>
        <SanityImage value={blog.thumbnail} className="rounded-[26px]" />
        <PortableContent content={blog.content} />
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
    return { slug: [blog.slug.current] };
  });

  return slugs;
}

export async function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const blogs = await client.fetch<Blog[]>(
    BLOG_QUERY,
    {},
    {
      perspective: "published",
    },
  );

  const page = blogs.find((blog) => blog.slug.current === params.slug?.[0]);

  return {
    title: page?.title,
    description: page?.description,
  } satisfies Metadata;
}
