import { useEffect, useRef, useState, useCallback } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import ImageModal from "../components/Modal/ImageModal";
import { fetchImages } from "../api/unsplash";

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] =
    useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadImages = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    const newImages = await fetchImages(page);
    setImages((prev) => [...prev, ...newImages]);
    setPage((prev) => prev + 1);
    setLoading(false);
  }, [page, loading]);

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadImages();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadImages]);

  return (
    <>
      <ImageGrid images={images} onImageClick={setSelectedImage} />

      <div ref={observerRef} style={{ height: 1 }} />

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default Home;
