"use client";

import { client } from "@/components/sanity/client";
import { Image } from "@/components/sanity/image";
import type { SanityImageAsset } from "@sanity/asset-utils";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  description: string;
  thumbnail: SanityImageAsset;
  slug: {
    current: string;
    _type: "slug";
  };
  publishedAt: string;
}

const BLOG_QUERY = `*[_type == "blog"] {
  title,
  description,
  thumbnail,
  slug,
  publishedAt,
}`;

export default function HomePage() {
  const [data, setData] = useState<SanityDocument<Blog>[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch<SanityDocument<Blog>[]>(BLOG_QUERY);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center text-center">
      <img src="/cover.png" alt="SEED Design" className="mt-[60px] rounded-[26px] w-[80%]" />

      <div className="flex flex-col w-[80%] my-[60px]">
        <h1 className="text-2xl font-bold text-left">Design system updates</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[20px] gap-[20px]">
          {data?.map((item) => (
            <Link href={`/blog?slug=${item.slug.current}`} key={item.slug.current}>
              <BlogCard {...item} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

function BlogCard({ title, description, thumbnail }: Blog) {
  return (
    <div className="flex flex-col items-start h-full max-h-[300px] text-left">
      <Image value={thumbnail} className="rounded-[26px] w-full min-h-[200px] object-cover" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
