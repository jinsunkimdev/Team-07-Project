import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Main/components/MainPage.jsx';
import ListPage from '../pages/List/ListPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        {/* <Route path="/post" element={<PostCreatePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/post/:id/edit" element={<PostEditPage />} />
        <Route path="/post/:id/message" element={<PostMessagePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
