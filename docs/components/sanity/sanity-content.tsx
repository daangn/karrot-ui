"use client";

import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "next-sanity";
import { client } from "./client";

import { useEffect, useState } from "react";
import ErrorBoundary from "../error-boundary";
import { PortableImage } from "./image";
import { Table } from "./table";
import { ImageWithTextPreview } from "@/sanity/components/ImageWithTextPreview";
import ExternalImage from "@/sanity/components/ExternalImage";

interface SanityGuidelineProps {
  title: string;
}

const GUIDELINE_QUERY = `*[_type == "guideline" && title == $title][0] {
  title,
  content,
  publishedAt
}`;

export const SanityGuideline = ({ title }: SanityGuidelineProps) => {
  const [data, setData] = useState<SanityDocument | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch<SanityDocument>(GUIDELINE_QUERY, { title });
      setData(data);
    };
    fetchData();
  }, [title]);

  if (!data) {
    return null;
  }

  return (
    <ErrorBoundary>
      <PortableContent content={data.content} />
    </ErrorBoundary>
  );
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const PortableContent = ({ content }: { content: any }) => {
  return (
    <PortableText
      components={{
        types: {
          image: (props) => <PortableImage {...props} />,
          tabelContainer: Table,
          imageWithText: ImageWithTextPreview,
          externalImageLink: ExternalImage,
        },
        block: {
          normal: (props) => <p className="min-h-4 m-0" {...props} />,
          h3: (props) => <h3 className="mt-2 mb-1" {...props} />,
        },
      }}
      value={content}
    />
  );
};
