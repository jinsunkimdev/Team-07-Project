import MessageCardStyle from "./MessageCardStyle";
import Avatar from "../Avatar";
import { IconDeleteButton } from "./../Button/IconButtons";
import formatDate from "../../utils/formatDate";

const MessageCard = ({ messageData = {}, isEditable = false }) => {
  const {
    sender,
    profileImageURL,
    relationship = "친구",
    content,
    font = "Pretendard",
    createdAt,
  } = messageData;

  const handleDelete = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    alert("delete button clicked");
  };

  return (
    <div
      css={MessageCardStyle}
      onClick={() => alert("CardViewModal will be opened")}
    >
      <div className="card-header">
        <MessageCard.profile
          sender={sender}
          profileImageURL={profileImageURL}
          relationship={relationship}
          font={font}
        />
        {isEditable && <IconDeleteButton onClick={handleDelete} />}
      </div>
      <div className="card-body">
        <MessageCardContent content={content} />
      </div>
      <div className="card-footer">
        <MessageCard.createdAt createdAt={createdAt} />
      </div>
    </div>
  );
};

export default MessageCard;

export const MessageCardProfile = ({
  profileImageURL,
  sender,
  relationship,
  font,
}) => {
  return (
    <div className="sender-profile-wrap">
      <Avatar imgSrc={profileImageURL} size="md" />
      <div className="sender-profile" style={{ fontFamily: font }}>
        <span className="name">
          From. <b>{sender}</b>
        </span>
        <span className="relationship">
          {/* badge 컴포넌트로 교체 예정 */}
          {relationship}
        </span>
      </div>
    </div>
  );
};

export const MessageCardContent = ({ content }) => {
  return <p className="content">{content}</p>;
};

export const MessageCardCreatedAt = ({ createdAt }) => {
  return <span className="createdAt">{formatDate(createdAt)}</span>;
};

MessageCard.profile = MessageCardProfile;
MessageCard.content = MessageCardContent;
MessageCard.createdAt = MessageCardCreatedAt;
