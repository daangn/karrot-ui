"use client";

import type { PortableTextTypeComponentProps } from "@portabletext/react";
import { getImageDimensions, SanityImageAsset } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import clsx from "clsx";
import { client } from "./client";
import { SanityImageType } from "./types";

const builder = imageUrlBuilder(client);

interface ImageProps {
  value: SanityImageAsset;
  className?: string;
}

export const SanityImage = ({ value, className }: ImageProps) => {
  if (!value) {
    return <div className={`${className} bg-gray-200`} />;
  }

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
      className={clsx("w-full rounded-2xl overflow-hidden object-cover", className)}
      loading="lazy"
      draggable={false}
    />
  );
};

export const PortableImage = ({ value }: PortableTextTypeComponentProps<SanityImageType>) => {
  if (!value || !value?.asset) {
    return null;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { aspectRatio } = getImageDimensions(value as any);

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
      className="w-full h-auto rounded-2xl overflow-hidden my-4 object-cover"
      style={{
        aspectRatio,
      }}
    />
  );
};
