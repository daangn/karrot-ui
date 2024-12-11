import { PortableText } from "@portabletext/react";
import { type SanityDocument } from "next-sanity";
import { client } from "./client";

import ErrorBoundary from "../error-boundary";
import { Image } from "./image";
import { Table } from "./table";

interface SanityContentProps {
  title: string;
}

const POST_QUERY = `*[_type == "contents" && title == $title][0] {
  title,
  content,
  publishedAt
}`;

export const SanityContent = async ({ title }: SanityContentProps) => {
  const data = await client.fetch<SanityDocument>(POST_QUERY, { title });

  if (!data) {
    return null;
  }

  return (
    <ErrorBoundary>
      <PortableText
        components={{
          types: {
            image: (props) => <Image {...props} title={title} />,
            tabelContainer: Table,
          },
        }}
        value={data.content}
      />
    </ErrorBoundary>
  );
};
