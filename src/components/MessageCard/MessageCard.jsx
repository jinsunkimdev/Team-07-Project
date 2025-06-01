import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";
import Avatar from "../Avatar";
import { IconDeleteButton } from "./../Button/IconButtons";

const MessageCard = ({ messageData = {}, isRecipient = false }) => {
  const {
    sender,
    profileImg,
    relationship = "친구",
    content,
    font = "Pretendard",
    createdAt,
  } = messageData;
  return (
    <div css={MessageCardStyle}>
      <div className="card-header">
        <div className="sender-profile-wrap">
          <Avatar imgSrc={profileImg} size="md" />
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
        {isRecipient && <IconDeleteButton />}
      </div>
      <div className="card-body">
        <p className="content">{content}</p>
      </div>
      <div className="card-footer">
        <span className="date">{createdAt}</span>
      </div>
    </div>
  );
};

export default MessageCard;

export const MessageCardStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 230px;
  padding: 28px 24px 24px;
  background-color: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  word-break: keep-all;
  cursor: pointer;

  @media (min-width: ${BREAKPOINTS.md}px) {
    max-width: calc(50% - 16px);
    height: 284px;
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    max-width: 384px;
    height: 280px;
    overflow: hidden;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--gray-200);
  }

  .sender-profile-wrap {
    display: flex;
    gap: 14px;

    .sender-profile {
      .name {
        display: block;
        font-size: var(--font-size-20);
      }
    }
  }

  .card-body {
    height: 100%;
  }

  .content {
    height: 56px;
    margin-bottom: 16px;
    padding-top: 16px;
    font-size: var(--font-size-15);
    color: var(--gray-600);
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @media (min-width: ${BREAKPOINTS.md}px) {
      height: 100px;
      font-size: var(--font-size-18);
    }
  }

  .date {
    font-size: var(--font-size-12);
    color: var(--gray-400);
  }
`;
