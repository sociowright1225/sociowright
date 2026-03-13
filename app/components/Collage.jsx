import { useMemo } from "react";
import PhotoAlbum from "react-photo-album";

const MAX_IMAGES = 5;

export default function Collage({ images }) {
  const photos = useMemo(() => {
    return [...images]
      .sort(() => Math.random() - 0.5)
      .slice(0, MAX_IMAGES);
  }, [images]);

  return (
    <PhotoAlbum
      layout="masonry"
      photos={photos}
    />
  );
}
