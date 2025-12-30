import { useEffect, useState, useCallback } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import ImageModal from "../components/Modal/ImageModal";
import { fetchImages } from "../api/unsplash";
// import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadImages = useCallback(async () => {
    const newImages = await fetchImages(page);
    setImages((prev) => [...prev, ...newImages]);
    setPage((prev) => prev + 1);
  }, [page]);

  useEffect(() => {
    loadImages();
  }, []);

//   useInfiniteScroll(loadImages);

  return (
    <>
      <ImageGrid images={images} onImageClick={setSelectedImage} />
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default Home;
