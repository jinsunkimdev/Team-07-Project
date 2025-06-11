import { useState, useEffect } from "react";

const usePageLoadTransition = ({
  loadingDelay = 1200,
  fadeInDelay = 1800,
} = {}) => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showLoadingUI, setShowLoadingUI] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setShowLoadingUI(true);

      setTimeout(() => {
        setShowLoadingUI(false);
      }, loadingDelay);

      setTimeout(() => {
        setIsPageLoading(false);

        requestAnimationFrame(() => {
          setFadeIn(true);
        });
      }, fadeInDelay);
    };

    if (document.readyState === "complete") {
      setShowLoadingUI(false);
      setIsPageLoading(false);
      setFadeIn(true);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return { isPageLoading, showLoadingUI, fadeIn };
};

export default usePageLoadTransition;
