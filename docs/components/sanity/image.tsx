"use client";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

import type { PortableTextTypeComponentProps } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

const { projectId, dataset } = client.config();

interface SanityImage {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export const Image = async ({ value }: PortableTextTypeComponentProps<SanityImage>) => {
  if (!value || !value?.asset) {
    return null;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { aspectRatio } = getImageDimensions(value as any);
  const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });

  // Sanity CDN URL 생성
  const cdnUrl = builder.image(value).width(1400).fit("max").quality(90).auto("format").url();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const alt = (value as any)?.alt || " ";

  return (
    <img
      src={cdnUrl}
      alt={alt}
      loading="lazy"
      style={{
        display: "block",
        aspectRatio,
      }}
    />
  );
};
