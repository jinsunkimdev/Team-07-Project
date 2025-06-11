import { useEffect, useState } from "react";

const useGetScrollTopPos = () => {
  const [scTop, setScTop] = useState(0);

  const handleScrollTop = () => {
    const scrollTopPos = window.pageYOffset;
    setScTop(scrollTopPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  return scTop;
};

export default useGetScrollTopPos;
