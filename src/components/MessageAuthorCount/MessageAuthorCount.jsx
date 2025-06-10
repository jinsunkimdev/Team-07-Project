import { css } from "@emotion/react";
import AvatarList from "../Avatar/AvatarList";
import useSenderMap from "../../pages/Post/hooks/useSenderMap";
import { useMemo } from "react";

const MessageAuthorCount = ({ messages = [], customStyle }) => {
   const senderMap = useSenderMap(messages);

  const items = useMemo(
    () =>
      Object.entries(senderMap).map(([sender, { profileImageURL }]) => ({
        sender,
        profileImageURL,
      })),
    [senderMap]
  );

  if (!items.length) return null;

  return (
    <div css={[MessageAuthorCountStyle, customStyle]}>
      <AvatarList items={items} />
      <span>
        <b>{items.length}</b>명이 작성했어요!
      </span>
    </div>
  );
};

export default MessageAuthorCount;

const MessageAuthorCountStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
