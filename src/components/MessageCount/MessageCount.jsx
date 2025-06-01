import { css } from "@emotion/react";
import AvatarList from "../Avatar/AvatarList";

const MessageCount = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div css={MessageCountStyle}>
      <AvatarList items={items} />
      <span>
        <b>{items.length}</b>명이 작성했어요!
      </span>
    </div>
  );
};

export default MessageCount;

const MessageCountStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
