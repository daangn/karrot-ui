"use client";

import { PortableText } from "@portabletext/react";
import { type SanityDocument } from "next-sanity";
import { client } from "./client";

import { useEffect, useState } from "react";
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

export const SanityContent = ({ title }: SanityContentProps) => {
  const [data, setData] = useState<SanityDocument | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch<SanityDocument>(POST_QUERY, { title });
      setData(data);
    };
    fetchData();
  }, [title]);

  if (!data) {
    return null;
  }

  return (
    <ErrorBoundary>
      <PortableText
        components={{
          types: {
            image: (props) => <Image {...props} />,
            tabelContainer: Table,
          },
        }}
        value={data.content}
      />
    </ErrorBoundary>
  );
};
