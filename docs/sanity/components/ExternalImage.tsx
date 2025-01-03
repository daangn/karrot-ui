interface ExternalImageProps {
  value: {
    imageUrl: string;
    alt?: string;
  };
}

const ExternalImage = ({ value }: ExternalImageProps) => {
  const { imageUrl, alt } = value;

  return (
    <div className="relative my-4">
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

export default ExternalImage;
