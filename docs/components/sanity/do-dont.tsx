import { SanityImageAsset } from "@sanity/asset-utils";
import { SanityImage } from "./image";
import { ExternalImage } from "./external-image";
import clsx from "clsx";
import { IconCheckmarkCircleFill, IconXmarkCircleFill } from "@daangn/react-monochrome-icon";

// TODO: typescript generate from sanity
interface DoDontProps {
  value: {
    do: {
      description: string;
      imageField: {
        alt: string;
        imageType: "upload" | "external";
        uploadImage?: SanityImageAsset;
        externalUrl?: string;
      };
    };
    dont: {
      description: string;
      imageField: {
        alt: string;
        imageType: "upload" | "external";
        uploadImage?: SanityImageAsset;
        externalUrl?: string;
      };
    };
  };
  className?: string;
}

export function DoDont({ value, className }: DoDontProps) {
  return (
    <div className={clsx("grid grid-cols-1 sm:grid-cols-2 gap-6 my-8", className)}>
      {/* Do 섹션 */}
      <div className="flex flex-col gap-5 rounded-lg">
        <div className="w-full overflow-hidden rounded-lg">
          {value.do.imageField.imageType === "upload" ? (
            value.do.imageField?.uploadImage && (
              <SanityImage value={value.do.imageField.uploadImage} className="rounded-2xl m-0" />
            )
          ) : (
            <ExternalImage
              value={{ imageUrl: value.do.imageField?.externalUrl || "" }}
              className="rounded-2xl m-0"
            />
          )}
        </div>
        <div className="flex items-start gap-3">
          <IconCheckmarkCircleFill className="text-seed-fg-positive shrink-0" size={34} />
          <span className="text-sm text-seed-fg-neutral-subtle">{value.do.description}</span>
        </div>
      </div>

      {/* Don't 섹션 */}
      <div className="flex flex-col gap-5 rounded-lg">
        <div className="relative w-full overflow-hidden rounded-lg">
          {value.dont.imageField.imageType === "upload" ? (
            value.dont.imageField?.uploadImage && (
              <SanityImage value={value.dont.imageField.uploadImage} className="rounded-2xl m-0" />
            )
          ) : (
            <ExternalImage
              value={{ imageUrl: value.dont.imageField?.externalUrl || "" }}
              className="rounded-2xl m-0"
            />
          )}
        </div>
        <div className="flex items-start gap-3">
          <IconXmarkCircleFill className="text-seed-fg-danger shrink-0" size={34} />
          <span className="text-sm text-seed-fg-neutral-subtle">{value.dont.description}</span>
        </div>
      </div>
    </div>
  );
}
