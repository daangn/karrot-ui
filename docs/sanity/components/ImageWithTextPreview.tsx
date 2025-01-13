import { PortableContent } from "@/components/sanity/sanity-content";
import { PortableTextBlock } from "@portabletext/react";
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
  const imageUrl = useCallback(() => builder.image(image).width(800).url(), [image]);

  return (
    <div
      style={{
        marginTop: "24px",
      }}
      className={`flex flex-col gap-6 ${imagePosition === "right" ? "sm:flex-row-reverse" : "sm:flex-row"}`}
    >
      <div className="flex-1 w-full sm:max-w-[50%]">
        <img
          src={imageUrl()}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            margin: 0,
          }}
        />
      </div>

      <div style={{ flex: 1, padding: 4 }}>
        <PortableContent content={text} />
      </div>
    </div>
  );
}
