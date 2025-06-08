/**
 * 진입점 페이지
 */
import GlobalHeader from "../../../components/Header/GlobalHeader";
import PostIdPageHeader from "../../List/PostIdPageHeader";
import MessagesPage from "./components/MessagesPage";
import useMessagesPage from "./hooks/useMessagesPage";

const PostDetailPage = () => {
  const state = useMessagesPage();

  return (
    <>
      <GlobalHeader />
      <PostIdPageHeader />
      <MessagesPage {...state} />
    </>
  );
};

export default PostDetailPage;
