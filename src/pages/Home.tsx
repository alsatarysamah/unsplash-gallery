import { useEffect, useRef, useState, useCallback } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import ImageModal from "../components/Modal/ImageModal";
import { fetchImages } from "../api/unsplash";
import type { Image } from "../types/Image";

const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadImages = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const newImages: Image[] = await fetchImages(page);
      setImages((prev) => [...prev, ...newImages]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to load images:", err);
    } finally {
      setLoading(false);
    }
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
