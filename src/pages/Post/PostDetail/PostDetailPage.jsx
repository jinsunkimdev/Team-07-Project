import { useCallback, useEffect, useRef, useState } from "react";
import { getMessages } from "../../../api/post/fetchMessages";
import { useParams } from "react-router-dom";
import MessageCardList from "../../../components/MessageCard/MessageCardList";
import { loader } from "./PostDetailPage.styles";

const PostDetailPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  const LIMIT = 10;

  const loadMessages = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      const newMessages = await getMessages({
        id,
        team: "1",
        limit: LIMIT,
        offset,
      });

      setMessages((prev) => [...prev, ...newMessages]);
      setOffset((prev) => prev + LIMIT);

      if (newMessages.length < LIMIT) setHasMore(false);
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
        if (entry.isIntersecting && !isLoading && hasMore) {
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
