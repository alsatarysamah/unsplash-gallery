import "./ImageCard.css";

interface ImageCardProps {
  image;
  onClick: (image) => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  const aspectRatio = image.width / image.height;

  return (
    <div
      className="image-card"
      style={{ aspectRatio }}
      onClick={() => onClick(image)}
    >
      <img
        src={image.urls.small}
        alt={image.alt_description ?? "Unsplash image"}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
