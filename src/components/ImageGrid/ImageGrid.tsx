import ImageCard from "../ImageCard/ImageCard";
import "./ImageGrid.css";

const ImageGrid = ({ images, onImageClick }) => {
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
