import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main/components/MainPage.jsx";
import ListPage from "../pages/List/ListPage";
import StyleGuidePage from "../pages/StyleGuide/StyleGuidePage";
import PostCreatePage from "../pages/Post/PostCreate/PostCreatePage.jsx";
import PostMessagePage from "../pages/Post/PostMessage/PostMessagePage.jsx";
import PostDetailPage from "../pages/Post/PostDetail/PostDetailPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/post" element={<PostCreatePage />} />
      <Route path="/post/:id/*" element={<PostDetailPage />} />
      <Route path="/post/:id/message" element={<PostMessagePage />} />
      {/* 스타일 가이드 페이지: 디자인 시스템의 공통 컴포넌트 테스트 및 확인용 임시 공간입니다. */}
      <Route path="styleGuide" element={<StyleGuidePage />} />

      {/* 404 페이지 (라우터 마지막에 위치해야 함) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
