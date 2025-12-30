import "./ImageModal.css";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={image.urls.regular} alt="" />
        <p><b>Photographer:</b> {image.user.name}</p>
        <p><b>Likes:</b> {image.likes}</p>
        <p>{image.description || image.alt_description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
