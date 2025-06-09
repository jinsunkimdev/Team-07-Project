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
    recipient,
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

const backgroundStyle = css`
  min-height: 100vh;
  background-color: ${recipient?.backgroundColor || "#fff"};

  ${recipient?.backgroundImageURL &&
  css`
    background-image: url(${recipient.backgroundImageURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`;



  useInfiniteScroll({ ref: observerRef, callback: fetchMore, isLast });

  return (
    <section css={backgroundStyle}>
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
      {error && <p css={errorTextStyle}>{error}</p>}
      <div ref={observerRef} css={observerSpacerStyle} />
    </section>
  );
};

const errorTextStyle = css`
  color: red;
  margin-top: 12px;
  font-size: 14px;
  text-align: center;
`;

const observerSpacerStyle = css`
  height: 1px;
  margin-top: 40px;
`;

export default MessagesPage;
