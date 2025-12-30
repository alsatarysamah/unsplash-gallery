import React from "react";
import "./ImageModal.css";
import type { Image } from "../../types/Image";

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={image.urls.regular} alt={image.alt_description || "Image"} />
        <p><b>Photographer:</b> {image.user.name}</p>
        <p><b>Likes:</b> {image.likes}</p>
        <p>{image.description || image.alt_description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
