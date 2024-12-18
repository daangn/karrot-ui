"use client";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

import type { PortableTextTypeComponentProps } from "@portabletext/react";
import { getImageDimensions, SanityImageAsset } from "@sanity/asset-utils";

const { projectId, dataset } = client.config();

export interface SanityImage {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface ImageProps {
  value: SanityImageAsset;
  className?: string;
}

export const Image = ({ value, className }: ImageProps) => {
  if (!value) {
    return <div className={`${className} bg-gray-200`} />;
  }

  const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });
  const cdnUrl = builder
    .image(value)
    .width(1000)
    .fit("max")
    .quality(95)
    .auto("format")
    .format("webp")
    .url();

  return (
    <img
      src={cdnUrl}
      alt={value.originalFilename}
      className={className}
      loading="lazy"
      draggable={false}
    />
  );
};

export const PortableImage = ({ value }: PortableTextTypeComponentProps<SanityImage>) => {
  if (!value || !value?.asset) {
    return null;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { aspectRatio } = getImageDimensions(value as any);
  const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });

  // Sanity CDN URL 생성
  const cdnUrl = builder
    .image(value)
    .width(1200)
    .fit("max")
    .quality(90)
    .auto("format")
    .format("webp")
    .url();

  const srcSet = [800, 1200, 1600]
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
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      draggable={false}
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
