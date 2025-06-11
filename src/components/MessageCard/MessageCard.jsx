import { css } from "@emotion/react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import MessageCardStyle, {
  MessageCardCreatedAtStyle,
  MessageCardContentStyle,
  MessageCardProfileStyle,
  SelectedCardStyle,
} from "./MessageCardStyle";
import Avatar from "../Avatar";
import { IconDeleteButton } from "./../Button/IconButtons";
import formatDate from "../../utils/formatDate";
import getFontValueByLabel from "../../utils/getFontValueByLabel";
import Badge from "../Badge/Badge";

const MessageCard = ({
  messageData = {},
  isEditable = false,
  isSelected = false,
  onToggleSelect = () => {},
  openModal = () => {},
}) => {
  const {
    sender,
    profileImageURL,
    relationship = "친구",
    content,
    font = "Pretendard",
    createdAt,
  } = messageData || {};
  const fontValue = getFontValueByLabel(font);

  const handleDelete = (e) => {
    e.stopPropagation();
    onToggleSelect();
  };

  return (
    <div
      css={[MessageCardStyle, isSelected && SelectedCardStyle]}
      onClick={() => {
        if (isEditable) {
          onToggleSelect();
        } else {
          openModal(messageData);
        }
      }}
    >
      <div className="card-header">
        <MessageCard.Profile
          sender={sender}
          profileImageURL={profileImageURL}
          relationship={relationship}
          font={fontValue}
        />
        {isEditable && <IconDeleteButton onClick={handleDelete} />}
      </div>
      <div className="card-body">
        <MessageCard.Content content={content} font={fontValue} />
      </div>
      <div className="card-footer">
        <MessageCard.CreatedAt createdAt={createdAt} />
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
  customCss,
}) => {
  const profileStyles = css`
    ${MessageCardProfileStyle};
    ${customCss || ""};
  `;

  return (
    <div className="sender-profile-wrap" css={profileStyles}>
      <Avatar imgSrc={profileImageURL} size="md" />
      <div className="sender-profile" style={{ fontFamily: font }}>
        <span className="sender-name">
          From. <b>{sender}</b>
        </span>
        <span className="relationship">
          <Badge relationshipLabel={relationship} />
        </span>
      </div>
    </div>
  );
};

export const MessageCardContent = ({ content, font, customCss }) => {
  const contentStyles = css`
    ${MessageCardContentStyle};
    ${customCss || ""};

    li[data-list="bullet"] {
      list-style-type: disc;
      display: list-item;
      margin-left: 1.5rem;
    }

    li[data-list="ordered"] {
      list-style-type: decimal;
      display: list-item;
      margin-left: 1.5rem;
    }
  `;

  // content === null || undefined
  const sanitizedHTML = DOMPurify.sanitize(content || "");

  return (
    <div className="content" css={contentStyles} style={{ fontFamily: font }}>
      {parse(sanitizedHTML)}
    </div>
  );
};

export const MessageCardCreatedAt = ({ createdAt, customCss }) => {
  const createdAtStyles = css`
    ${MessageCardCreatedAtStyle};
    ${customCss || ""}
  `;

  return (
    <span className="createdAt" css={createdAtStyles}>
      {formatDate(createdAt)}
    </span>
  );
};

MessageCard.Profile = MessageCardProfile;
MessageCard.Content = MessageCardContent;
MessageCard.CreatedAt = MessageCardCreatedAt;
