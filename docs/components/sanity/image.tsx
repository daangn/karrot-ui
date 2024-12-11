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
  const fileName = `${value._key}.${extension}`;
  const filePath = path.join(assetsFolder, fileName);

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const alt = (value as any)?.alt || " ";

  const isImageExists = fs.existsSync(filePath);

  if (isImageExists) {
    console.log("이미 존재하는 이미지입니다.");
  } else {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    const file = new Uint8Array(buffer);

    if (!fs.existsSync(assetsFolder)) {
      fs.mkdirSync(assetsFolder, { recursive: true });
    }

    fs.writeFileSync(filePath, file);
    console.log(`Image saved to ${filePath}`);
  }

  const imageUrl = `/assets/${title}/${fileName}`;

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading="lazy"
      style={{
        display: "block",
        aspectRatio,
      }}
    />
  );
};
