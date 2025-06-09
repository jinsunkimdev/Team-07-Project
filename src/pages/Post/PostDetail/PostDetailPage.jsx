/**
 * 진입점 페이지
 */
import GlobalHeader from "../../../components/Header/GlobalHeader";
<<<<<<< HEAD
import ListPageHeader from "../../List/ListPageHeader";
import { MessagesProvider } from "../context/MessagesProvider";
import MessagesPage from "./MessagesPage";
=======
import PostIdPageHeader from "../../List/PostIdPageHeader";
import MessagesPage from "./components/MessagesPage";
import useMessagesPage from "./hooks/useMessagesPage";
>>>>>>> develop

const PostDetailPage = () => {
  return (
    <>
      <GlobalHeader />
<<<<<<< HEAD
      <MessagesProvider>
        <ListPageHeader />
        <MessagesPage />
      </MessagesProvider>
=======
      <PostIdPageHeader />
      <MessagesPage {...state} />
>>>>>>> develop
    </>
  );
};

export default PostDetailPage;
