import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import fs from "fs";
import path from "path";

import type { PortableTextTypeComponentProps } from "@portabletext/react";
import { getImageDimensions, getExtension } from "@sanity/asset-utils";

const { projectId, dataset } = client.config();

interface SanityImage {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface ImageProps extends PortableTextTypeComponentProps<SanityImage> {
  title: string;
}

export const Image = async ({ value, title }: ImageProps) => {
  if (!value || !value?.asset) {
    return null;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const { aspectRatio } = getImageDimensions(value as any);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const extension = getExtension(value as any);
  const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });
  const src = builder.image(value).width(1500).fit("max").quality(100).auto("format").url();

  const assetsFolder = path.join(process.cwd(), "public", "assets", title);
  const filePath = path.join(assetsFolder, `${value._key}.${extension}`);

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const alt = (value as any)?.alt || " ";

  if (!fs.existsSync(`/assets/${title}/${value._key}.${extension}`)) {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    const file = new Uint8Array(buffer);

    if (!fs.existsSync(assetsFolder)) {
      fs.mkdirSync(assetsFolder, { recursive: true });
    }

    fs.writeFileSync(filePath, file);
    console.log(`Image saved to ${filePath}`);

    return (
      <img
        src={`/assets/${title}/${value._key}.${extension}`}
        alt={alt}
        loading="lazy"
        style={{
          display: "block",
          aspectRatio,
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        display: "block",
        aspectRatio,
      }}
    />
  );
};
