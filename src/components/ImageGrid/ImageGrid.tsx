import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGrid.css";
import type { Image } from "../../types/Image";

interface ImageGridProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="image-grid">
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          onClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
