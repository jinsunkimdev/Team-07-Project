import { css } from "@emotion/react";
import AvatarList from "../Avatar/AvatarList";

const MessageAuthors = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div css={MessageAuthorsStyle}>
      <AvatarList items={items} />
      <span>
        <b>{items.length}</b>명이 작성했어요!
      </span>
    </div>
  );
};

export default MessageAuthors;

const MessageAuthorsStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
