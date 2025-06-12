import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const excludedPaths = ["/post/:id"];
    const shouldExclude = excludedPaths.some((path) =>
      matchPath(path, pathname)
    );

    // 무한 스크롤 사용 페이지, 페이지 내부 앵커 클릭의 경우에는 제외
    if (!shouldExclude && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
};

export default useScrollToTop;
