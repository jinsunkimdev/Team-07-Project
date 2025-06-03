import { useCallback, useEffect, useRef, useState } from "react";
import { getMessages } from "../../../api/post/fetchMessages";
import { useParams } from "react-router-dom";
import MessageCardList from "../../../components/MessageCard/MessageCardList";
import { loader } from "./PostDetailPage.styles";
import { TEAM } from "../../../constants/constants";

const PostDetailPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  const LIMIT = 12;

  const loadMessages = useCallback(async () => {
    // 로딩 중이거나 더 불러올 게 없으면 중단
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      // 2) offset이 0(첫번째 fetch)일 때는 LIMIT - 1(=9) 만큼만 가져옴
      const currentLimit = offset === 0 ? LIMIT - 1 : LIMIT;

      const newMessages = await getMessages({
        id,
        team: TEAM,
        limit: currentLimit,
        offset,
      });

      // 3) 기존 메시지 뒤에 붙이기
      setMessages((prev) => [...prev, ...newMessages]);

      // 4) offset 증가: 첫 호출에는 LIMIT - 1, 이후에는 LIMIT
      setOffset((prev) => prev + currentLimit);

      // 5) 받아온 개수가 요청한 개수보다 적으면 더 이상 불러올 게 없음
      if (newMessages.length < currentLimit) setHasMore(false);
    } catch (err) {
      console.error("불러오기 실패", err);
    } finally {
      setIsLoading(false);
    }
  }, [id, offset, isLoading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!isLoading && hasMore && entry.isIntersecting) {
          loadMessages();
        }
      },
      {
        root: null,
        threshold: 1.0,
        rootMargin: "0px 0px 100px 0px", // 아래에 약간 여유
      }
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loadMessages]);

  return (
    <>
      <MessageCardList messages={messages} editMode={false} />
      {hasMore && (
        <div ref={observerRef} css={loader}>
          {isLoading ? "불러오는 중..." : "더 불러오기..."}
        </div>
      )}
    </>
  );
};

export default PostDetailPage;
