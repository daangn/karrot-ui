"use client";

import { withAuth } from "@/components/auth/with-auth";
import { client } from "@/components/sanity/client";
import { Image } from "@/components/sanity/image";
import { PortableContent } from "@/components/sanity/sanity-content";
import { SanityImageAsset } from "@sanity/asset-utils";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { SanityDocument } from "next-sanity";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  description: string;
  thumbnail: SanityImageAsset;
  slug: string;
  publishedAt: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  content: any;
}

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
  title,
  description,
  thumbnail,
  slug,
  publishedAt,
  content
}`;

function BlogPage() {
  const [data, setData] = useState<SanityDocument<Blog> | null>(null);
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") || "";

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch<SanityDocument<Blog>>(BLOG_QUERY, { slug });
      setData(data);
    };
    fetchData();
  }, [slug]);

  if (!data) {
    return (
      <DocsPage>
        <DocsTitle> </DocsTitle>
      </DocsPage>
    );
  }

  return (
    <DocsPage>
      <DocsTitle>{data?.title}</DocsTitle>
      <DocsDescription>{data?.description}</DocsDescription>
      <DocsBody>
        <Image value={data?.thumbnail} className="rounded-[26px]" />
        <PortableContent content={data?.content} />
      </DocsBody>
    </DocsPage>
  );
}

export default withAuth(BlogPage);
