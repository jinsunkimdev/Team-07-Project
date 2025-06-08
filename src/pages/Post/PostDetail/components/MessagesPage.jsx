/**
 * UI만 담당하는 페이지
 */
import { useRef, useEffect } from "react";
import MessageCardList from "../../../../components/MessageCard/MessageCardList";
import Button from "../../../../components/Button";
import MessageCardModal from "../../../../components/Modal/MessageCardModal";
import {
  ButtonGroupStyle,
  ErrorTextStyle,
  ObserverSpacerStyle,
} from "./MessagesPageStyle";

const MessagesPage = ({
  editMode,
  selectedIds,
  setSelectedIds,
  toggleSelection,
  messages,
  showModal,
  fetchMore,
  isLast,
  error,
  handleSave,
  handleEditButton,
}) => {
  const observerRef = useRef();

  useEffect(() => {
    if (!observerRef.current || isLast) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) fetchMore();
      },
      { threshold: 1.0, rootMargin: "300px 0px" }
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchMore, isLast]);

  return (
    <>
      <section>
        <div css={ButtonGroupStyle}>
          {editMode ? (
            <>
              <Button onClick={handleSave}>💾 저장하기</Button>
              <Button
                onClick={() => setSelectedIds([])}
                disabled={selectedIds.length === 0}
              >
                🚫 선택 해제 ({selectedIds.length}개)
              </Button>
              <Button onClick={handleEditButton}>❌ 편집 종료</Button>
            </>
          ) : (
            <Button onClick={handleEditButton}>✏️ 편집하기</Button>
          )}
        </div>

        <MessageCardList
          messages={messages}
          editMode={editMode}
          selectedIds={selectedIds}
          onToggle={toggleSelection}
          openMessageCardModal={(data) =>
            showModal(<MessageCardModal data={data} />)
          }
        />

        {error && <p css={ErrorTextStyle}>{error}</p>}
        <div ref={observerRef} css={ObserverSpacerStyle} />
      </section>
    </>
  );
};

export default MessagesPage;
