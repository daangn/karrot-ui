import { PortableText, PortableTextBlock } from "@portabletext/react";
import { SanityImageAsset } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import { useCallback } from "react";
import { client } from "./client";

const builder = imageUrlBuilder(client);

interface SanityImage {
  _type: "image";
  asset: SanityImageAsset;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

interface ImageWithTextPreviewProps {
  value: {
    image: SanityImage;
    text: PortableTextBlock[];
    imagePosition: "left" | "right";
  };
}

export function ImageWithTextPreview({ value }: ImageWithTextPreviewProps) {
  const { image, text, imagePosition } = value;

  console.log("value", value);

  const imageUrl = useCallback(() => builder.image(image).width(800).url(), [image]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: imagePosition === "right" ? "row-reverse" : "row",
        gap: 8,
      }}
    >
      <div style={{ flex: 1, maxWidth: "50%" }}>
        <img
          src={imageUrl()}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ flex: 1, padding: 4 }}>
        <PortableText value={text} />
      </div>
    </div>
  );
}
