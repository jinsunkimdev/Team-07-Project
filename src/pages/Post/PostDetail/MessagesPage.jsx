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
      {error && <p css={ErrorTextStyle}>{error}</p>}
      <div ref={observerRef} css={ObserverSpacerStyle} />
    </>
  );
};

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

export default MessagesPage;
