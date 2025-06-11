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
import { BACKGROUND_COLORS, BREAKPOINTS } from "../../../constants/constants";
import ScrollToTopButton from "../../../components/Button/ScrollToTopButton";

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

  useInfiniteScroll({ ref: observerRef, callback: fetchMore, isLast });

  return (
    <section css={MessagesPageStyle({ recipient })}>
      <div className="messages-container">
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
      </div>
        <div ref={observerRef} css={observerSpacerStyle} />
        <ScrollToTopButton/>
    </section>
  );
};

const MessagesPageStyle = ({ recipient }) => css`
  position: relative;
  min-height: 100vh;
  background-color: ${BACKGROUND_COLORS[recipient?.backgroundColor] || "#fff"};

  ${recipient?.backgroundImageURL &&
  css`
    background-image: url(${recipient.backgroundImageURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  `}

  &:before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    ${recipient?.backgroundImageURL && "display: block"};
  }

  .messages-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 64px 20px;

    @media (min-width: ${BREAKPOINTS.md}px) {
      padding: 64px 24px;
    }
    @media (min-width: ${BREAKPOINTS.lg}px) {
      width: var(--content-width);
      padding: 64px 0;
    }
  }
`;

const errorTextStyle = css`
  color: red;
  margin-top: 12px;
  font-size: 14px;
  text-align: center;
`;

const observerSpacerStyle = css`
  height: 1px;
  margin-top: 60px;
    @media (min-width: ${BREAKPOINTS.md}px) {
      margin-top: 100px; 
    }
    @media (min-width: ${BREAKPOINTS.lg}px) {
      margin-top: 150px; 
    }
`;

export default MessagesPage;
