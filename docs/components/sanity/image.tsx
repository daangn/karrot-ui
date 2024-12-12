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

export const Image = ({ value }: PortableTextTypeComponentProps<SanityImage>) => {
  if (!value || !value?.asset) {
    return null;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { aspectRatio } = getImageDimensions(value as any);
  const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });

  // Sanity CDN URL 생성
  const cdnUrl = builder
    .image(value)
    .width(800)
    .fit("max")
    .quality(90)
    .auto("format")
    .format("webp")
    .url();

  const srcSet = [400, 600, 800, 1200]
    .map(
      (width) =>
        `${builder.image(value).width(width).quality(75).fit("max").auto("format").format("webp").url()} ${width}w`,
    )
    .join(", ");

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const alt = (value as any)?.alt || " ";

  return (
    <img
      src={cdnUrl}
      alt={alt}
      sizes="(max-width: 800px) 100vw, 800px"
      srcSet={srcSet}
      loading="lazy"
      style={{
        display: "block",
        aspectRatio,
        width: "100%",
        height: "auto",
      }}
    />
  );
};
