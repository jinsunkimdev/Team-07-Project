import { css } from "@emotion/react";
import MessageCardListStyle from "./MessageCardListStyle";
import MessageCard from "./MessageCard";
import AddMessageCardButton from "./AddMessageCardButton";

/**
 * @param {boolean} editMode - 편집 모드
 */
const MessageCardList = ({
  messages = [],
  editMode = false,
  openMessageCardModal = () => {},
  selectedIds = [],
  onToggle = () => {},
}) => {
  if (!messages || messages.length === 0) {
    return <EmptyMessageCardList editMode={editMode} />;
  }

  // 메시지가 1개 이상이고, 편집 모드가 아니면 메시지 리스트 보여주기
  return (
    <CardListResult
      messages={messages}
      editMode={editMode}
      openModal={openMessageCardModal}
      selectedIds={selectedIds}
      onToggle={onToggle}
    />
  );
};

function CardListResult({
  messages,
  editMode,
  openModal,
  selectedIds,
  onToggle,
}) {
  return (
    <div css={MessageCardListStyle}>
      {!editMode && <AddMessageCardButton />}
      {messages.map((message) => (
        <MessageCard
          key={message.id}
          id={message.id}
          messageData={message}
          isEditable={editMode}
          openModal={openModal}
          isSelected={selectedIds.includes(message.id)}
          onToggleSelect={() => onToggle(message.id)}
        />
      ))}
    </div>
  );
}

function EmptyMessageCardList({ editMode }) {
  if (!editMode) {
    return (
      <div css={MessageCardListStyle}>
        <AddMessageCardButton />
      </div>
    );
  }

  return (
    <div css={EmptyMessageListStyle}>
      <div className="empty-message">등록된 메시지가 없습니다.</div>
    </div>
  );
}

export default MessageCardList;

const EmptyMessageListStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  .empty-message {
    font-size: var(--font-size-18);
  }
`;
