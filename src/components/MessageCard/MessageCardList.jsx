import MessageCardListStyle from "./MessageCardListStyle";
import MessageCard from "./MessageCard";
import AddMessageCardButton from "./AddMessageCardButton";

/**
 * @param {boolean} editMode - 편집 모드
 */
const MessageCardList = ({ messages = [], editMode = false }) => {
  if (!messages || messages.length === 0) {
    return <EmptyMessageCardList editMode={editMode} />;
  }

  // 메시지가 1개 이상이고, 편집 모드가 아니면 메시지 리스트 보여주기
  return <CardListResult messages={messages} editMode={editMode} />;
};

function CardListResult({ messages, editMode }) {
  // const displayMessages = editMode ? messages : messages.slice(0, 5);
  // 💥 slice 없애고 전체 표시
  const displayMessages = messages;

  return (
    <div css={MessageCardListStyle}>
      {!editMode && <AddMessageCardButton />}
      {displayMessages.map((message) => (
        <MessageCard
          key={message.id}
          messageData={message}
          isEditable={editMode}
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
    <div css={MessageCardListStyle}>
      <p className="empty-message">아직 등록된 메시지가 없어요!</p>
    </div>
  );
}

export default MessageCardList;
