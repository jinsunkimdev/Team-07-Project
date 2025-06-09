<<<<<<< HEAD
/**
 * UI만 담당하는 페이지
 */
import { css } from "@emotion/react";
import { useRef } from "react";
import MessageCardList from "../../../components/MessageCard/MessageCardList";
import MessageCardModal from "../../../components/Modal/MessageCardModal";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import MessageActionButtons from "./MessageActionButtons";
import { useMessages } from "../context/MessagesContext";

const MessagesPage = () => {
  const {
    editMode,
    selectedIds,
    toggleSelection,
    messages,
    showModal,
    fetchMore,
    isLast,
    error,
  } = useMessages();

  const observerRef = useRef();

  useInfiniteScroll({ ref: observerRef, callback: fetchMore, isLast });

  return (
    <>
      <MessageActionButtons />
      <MessageCardList
        messages={messages}
        editMode={editMode}
        selectedIds={selectedIds}
        onToggle={toggleSelection}
        openMessageCardModal={(data) =>
          showModal(<MessageCardModal data={data} />)
        }
      />
=======
import { useNavigate, useMatch, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useInfiniteMessages from "./hooks/useInfiniteMessages";
import MessageCardList from "../../../components/MessageCard/MessageCardList";
import { deleteMessage } from "../../../api/post/fetchMessages";
import GlobalHeader from "../../../components/Header/GlobalHeader";
import PostIdPageHeader from "../../List/PostIdPageHeader";
import Button from "../../../components/Button";
import { ButtonGroupStyle } from "./MessagesPageStyle";
import { ErrorTextStyle } from "./MessagesPageStyle";
import { ObserverSpacerStyle } from "./MessagesPageStyle";
import useWindowWidth from "../../../utils/useWindowWidth";
import { BREAKPOINTS } from "../../../constants/constants";

const MessagesPage = () => {
  // 변수 선언
  const navigate = useNavigate();
  const { id: recipientId } = useParams();
  const editMode = !!useMatch("/post/:id/edit");
  const [selectedIds, setSelectedIds] = useState([]);
  const observerRef = useRef();
  const { messages, setMessages, fetchMore, isLast } = useInfiniteMessages({
    id: recipientId,
    limit: editMode ? 6 : 5,
  });
  const [error, setError] = useState("");

  // 함수 선언
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((msgId) => msgId !== id) : [...prev, id]
    );
  };

  const handleEditButton = () => {
    navigate(`/post/${recipientId}/edit`);
  };

  const handleSave = async () => {
    try {
      await Promise.all(selectedIds.map((id) => deleteMessage({ id })));
      // 삭제 후 메시지 상태 갱신
      setMessages((prev) =>
        prev.filter((msg) => !selectedIds.includes(msg.id))
      );
      setSelectedIds([]);
      navigate(`/post/${recipientId}`); // 일반 모드로 돌아가기
    } catch (err) {
      setError("메시지 삭제 중 문제가 발생했습니다.");
    }
  };

  useEffect(() => {
    setSelectedIds([]); // 편집모드 변경 시 선택 초기화
  }, [editMode]);

  useEffect(() => {
    if (!observerRef.current || isLast) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchMore();
        }
      },
      {
        threshold: 1.0,
        rootMargin: "300px 0px",
      }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchMore, isLast]);

  const width = useWindowWidth();

  // 화면
  return (
    <>
      {width > BREAKPOINTS.md - 1 && <GlobalHeader />}
      <PostIdPageHeader />
      <section>
        {editMode ? (
          <div css={ButtonGroupStyle}>
            <Button onClick={handleSave}>💾 저장하기</Button>
            <Button
              onClick={() => setSelectedIds([])}
              disabled={selectedIds.length === 0}
            >
              🚫 선택 해제 (항목: {selectedIds.length}개)
            </Button>
          </div>
        ) : (
          <div css={ButtonGroupStyle}>
            <Button onClick={handleEditButton}>✏️ 편집하기</Button>
          </div>
        )}

        <MessageCardList
          messages={messages}
          editMode={editMode}
          selectedIds={selectedIds}
          onToggle={toggleSelect}
        />
      </section>
>>>>>>> develop
      {error && <p css={ErrorTextStyle}>{error}</p>}
      <div ref={observerRef} css={ObserverSpacerStyle} />
    </>
  );
};

<<<<<<< HEAD
const ErrorTextStyle = css`
  color: red;
  margin-top: 12px;
  font-size: 14px;
  text-align: center;
`;

const ObserverSpacerStyle = css`
  height: 1px;
  margin-top: 40px;
`;

=======
>>>>>>> develop
export default MessagesPage;
