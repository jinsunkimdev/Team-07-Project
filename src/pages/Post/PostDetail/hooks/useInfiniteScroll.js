import { useEffect } from "react";

const useInfiniteScroll = ({ ref, callback, isLast }) => {
  useEffect(() => {
    if (!ref.current || isLast) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback();
      },
      { threshold: 1.0, rootMargin: "300px 0px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, callback, isLast]);
};

export default useInfiniteScroll;
