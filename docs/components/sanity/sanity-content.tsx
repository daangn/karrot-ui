"use client";

import imageUrlBuilder from "@sanity/image-url";
import { type SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { client } from "./client";

import { getImageDimensions, SanityImageAsset } from "@sanity/asset-utils";
import { useEffect, useState } from "react";

const { projectId, dataset } = client.config();

// Barebones lazy-loaded image component
const SampleImageComponent = ({
  value,
  isInline,
}: { value: SanityImageAsset; isInline: boolean }) => {
  if (!projectId || !dataset) {
    return null;
  }

  const { width, height } = getImageDimensions(value);
  const builder = imageUrlBuilder({ projectId, dataset });
  const src = builder
    .image(value)
    .width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const alt = (value as any)?.alt || " ";

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

interface SanityContentProps {
  title: string;
}

const POST_QUERY = `*[_type == "post" && title == $title][0]`;

export const SanityContent = ({ title }: SanityContentProps) => {
  const [data, setData] = useState<SanityDocument | null>(null);

  useEffect(() => {
    client.fetch<SanityDocument>(POST_QUERY, { title }).then(setData);
  }, [title]);

  if (!data) {
    return null;
  }

  return (
    <PortableText
      components={{
        types: {
          image: SampleImageComponent,
        },
        marks: {
          highlight: (props) => <span style={{ backgroundColor: "#0f0" }}>{props.children}</span>,
        },
      }}
      value={data.body}
    />
  );
};
