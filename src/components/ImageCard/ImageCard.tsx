import React from "react";
import "./ImageCard.css";
import type { Image } from "../../types/Image";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const aspectRatio = image.width / image.height; // If Unsplash API provides width/height

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
