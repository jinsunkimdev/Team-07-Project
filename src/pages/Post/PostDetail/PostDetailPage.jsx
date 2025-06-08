/**
 * 진입점 페이지
 */
import GlobalHeader from "../../../components/Header/GlobalHeader";
import ListPageHeader from "../../List/ListPageHeader";
import { MessagesProvider } from "../context/MessagesProvider";
import MessagesPage from "./MessagesPage";

const PostDetailPage = () => {
  return (
    <>
      <GlobalHeader />
      <MessagesProvider>
        <ListPageHeader />
        <MessagesPage />
      </MessagesProvider>
    </>
  );
};

export default PostDetailPage;
