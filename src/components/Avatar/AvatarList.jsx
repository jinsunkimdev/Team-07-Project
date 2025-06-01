import { css } from "@emotion/react";
import Avatar from "./Avatar";

const AvatarList = ({ items }) => {
  return (
    <div css={AvatarListStyle}>
      {items.slice(0, 3).map((item) => (
        <Avatar
          key={item.id}
          imgSrc={item.profileImageURL}
          size="xs"
          className="avatar-li"
        />
      ))}
      {items.length >= 4 && (
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
  }

  .avatar-li + .avatar-li {
    margin-left: -12px;
  }

  .avatar-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    aspect-ratio: 1/1;
    background-color: var(--white);
    border-radius: 50%;
    border: 1.4px solid var(--border-color);
    color: var(--secondary);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-medium);
  }
`;
