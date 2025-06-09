/**
 * 진입점 페이지
 */
import GlobalHeader from "../../../components/Header/GlobalHeader";
import PostIdPageHeader from "../../List/PostIdPageHeader";
import { MessagesProvider } from "../context/MessagesProvider";
import MessagesPage from "./MessagesPage";

const PostDetailPage = () => {
  return (
    <>
      <GlobalHeader />
      <MessagesProvider>
        <PostIdPageHeader />
        <MessagesPage />
      </MessagesProvider>
    </>
  );
};

export default PostDetailPage;
