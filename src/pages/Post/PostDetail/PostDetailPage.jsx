/**
 * 진입점 페이지
 */
import GlobalHeader from "../../../components/Header/GlobalHeader";
import ListPageHeader from "../../List/ListPageHeader";
import MessagesPage from "./components/MessagesPage";
import useMessagesPage from "./hooks/useMessagesPage";

const PostDetailPage = () => {
  const state = useMessagesPage();

  return (
    <>
      <GlobalHeader />
      <ListPageHeader />
      <MessagesPage {...state} />
    </>
  );
};

export default PostDetailPage;
