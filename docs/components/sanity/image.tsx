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

  // Sanity CDN URL 생성
  const cdnUrl = builder.image(value).width(1500).fit("max").quality(100).auto("format").url();

  // 파일 시스템 경로 설정 - public 폴더 포함
  const assetsFolder = path.join(process.cwd(), "public", "assets", title);
  const fileName = `${value._key}.${extension}`;
  const filePath = path.join(assetsFolder, fileName);

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const alt = (value as any)?.alt || " ";

  // 기본 이미지 URL을 로컬 이미지로 설정
  let imageUrl = `/assets/${title}/${fileName}`;

  const isImageExists = fs.existsSync(filePath);

  if (!isImageExists) {
    try {
      const response = await fetch(cdnUrl);
      const buffer = await response.arrayBuffer();
      const file = new Uint8Array(buffer);

      if (!fs.existsSync(assetsFolder)) {
        fs.mkdirSync(assetsFolder, { recursive: true });
      }

      fs.writeFileSync(filePath, file);
      console.log(`이미지를 ${filePath}에 저장했습니다.`);
    } catch (error) {
      console.error("이미지 저장 중 오류 발생:", error);
      // 이미지 저장에 실패하면 CDN URL을 사용
      imageUrl = cdnUrl;
    }
  }

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
