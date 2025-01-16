import { clsx } from "clsx";

interface ExternalImageProps {
  value: {
    imageUrl: string;
    alt?: string;
  };
  className?: string;
}

export const ExternalImage = ({ value, className }: ExternalImageProps) => {
  const { imageUrl, alt } = value;

  return (
    <div className={clsx("relative my-4", className)}>
      <div className="relative aspect-video">
        <img
          src={imageUrl}
          alt={alt || "외부 이미지"}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};
