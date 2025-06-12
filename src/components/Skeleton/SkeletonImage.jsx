import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

const SkeletonImage = ({ src, borderRadius }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return loaded ? (
    <img src={src} alt={src} />
  ) : (
    <Skeleton borderRadius={borderRadius} />
  );
};

export default SkeletonImage;
