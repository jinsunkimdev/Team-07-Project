/**
 * UI만 담당하는 페이지
 */
import { useRef, useEffect } from "react";
import MessageCardList from "../../../../components/MessageCard/MessageCardList";
import MessageCardModal from "../../../../components/Modal/MessageCardModal";
import {
  ErrorTextStyle,
  ObserverSpacerStyle,
} from "./MessagesPageStyle";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import MessageActionButtons from "./MessageActionButtons";

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

useInfiniteScroll({ ref: observerRef, callback: fetchMore, isLast });

  return (
    <>
        <MessageActionButtons
          editMode={editMode}
          selectedIds={selectedIds}
          handleSave={handleSave}
          handleEditButton={handleEditButton}
          handleClearSelection={() => setSelectedIds([])}
        />

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

export default MessagesPage;
