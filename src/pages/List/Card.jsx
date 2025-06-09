import MessageAuthorCount from "../../components/MessageAuthorCount";
import EmojiBadge from "../../components/Badge/EmojiBadge";
import { css } from "@emotion/react";

const TopReactions = ({ reactions, customStyle }) => {
  if (!reactions || reactions.length === 0) return null;

  return (
    <div css={customStyle}>
      {reactions.map((reaction) => (
        <EmojiBadge
          key={reaction.id}
          id={reaction.id}
          emoji={reaction.emoji}
          count={Number(reaction.count) > 99 ? "99+" : reaction.count}
        />
      ))}
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div css={cardStyle(item)}>
      <div css={cardWrapper}>
        <div css={textBox}>
          <h2>{item.name}</h2>
          <MessageAuthorCount
            items={item.recentMessages}
            customStyle={authorCount}
          />
        </div>
        <TopReactions
          reactions={item.topReactions}
          customStyle={topReactions}
        />
      </div>
    </div>
  );
};

export default Card;

const cardStyle = ({ backgroundColor, backgroundImageURL }) => css`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: ${backgroundColor || "transparent"};
  background-image: ${backgroundImageURL
    ? `url(${backgroundImageURL})`
    : "none"};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

const cardWrapper = css`
  height: 100%;
  padding: 30px 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const textBox = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const authorCount = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const topReactions = css`
  display: flex;
  font-size: var(--font-size-14);
  gap: 4px;
  padding: 17px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;
