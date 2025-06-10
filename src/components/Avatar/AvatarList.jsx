import { css } from "@emotion/react";
import Avatar from "./Avatar";

const AvatarList = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  const visibleItems = items.slice(0, 3);
  const extraCount = items.length - 3;

  return (
    <div css={AvatarListStyle}>
      {visibleItems.map((item) => (
        <Avatar
          key={item.sender}
          imgSrc={item.profileImageURL}
          size="xs"
          className="avatar-li"
        />
      ))}
      {extraCount > 0 && (
        <div className="avatar-li avatar-more">+{items.length - 3}</div>
      )}
    </div>
  );
};

export default AvatarList;

const AvatarListStyle = css`
  display: flex;

  .avatar-li {
    border: 1.4px solid var(--white);
    border-radius: 50%;
    pointer-events: none;
  }

  .avatar-li + .avatar-li {
    margin-left: -12px;
  }

  .avatar-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    height: 28px;
    aspect-ratio: 1 / 1;
    background-color: var(--white);
    border-radius: 20px;
    border: 1.4px solid var(--border-color);
    color: var(--secondary);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-medium);
  }
`;
