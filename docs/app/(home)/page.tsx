import { client } from "@/sanity/lib/client";
import { SanityImage } from "@/sanity/lib/image";
import { BLOG_QUERY } from "@/sanity/lib/queries";
import type { SanityImageAsset } from "@sanity/asset-utils";
import Link from "next/link";

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

export default async function HomePage() {
  const blogs = await client.fetch<Blog[]>(
    BLOG_QUERY,
    {},
    {
      perspective: "published",
    },
  );

  return (
    <main className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col w-[80%] xl:w-[60%] my-[80px]">
        <h1 className="text-3xl sm:text-4xl font-bold text-left">Design system updates</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-[20px] gap-[20px]">
          {blogs?.map((item) => (
            <Link href={`/blog/${item.slug.current}`} key={item.slug.current}>
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
    <div className="flex flex-col items-start h-full text-left hover:bg-gray-100 rounded-[26px] transition-all duration-200 dark:hover:bg-neutral-800">
      <SanityImage
        value={thumbnail}
        className="rounded-3xl aspect-[16/9] h-full w-full object-cover my-0"
      />
      <div className="flex flex-col gap-2 px-[10px] py-[24px]">
        <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}
