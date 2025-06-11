/**
 * 진입점 페이지
 */
import GlobalHeader from "../../../components/Header/GlobalHeader";
import { BREAKPOINTS } from "../../../constants/constants";
import useWindowWidth from "../../../utils/useWindowWidth";
import PostIdPageHeader from "../../List/PostIdPageHeader";
import { MessagesProvider } from "../context/MessagesProvider";
import MessagesPage from "./MessagesPage";

const PostDetailPage = () => {
  const width = useWindowWidth();

  return (
    <>
      {width >= 768 && <GlobalHeader />}
      <MessagesProvider>
        <PostIdPageHeader />
        <MessagesPage />
      </MessagesProvider>
    </>
  );
};

export default PostDetailPage;
