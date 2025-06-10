import MessageAuthorCount from "../../components/MessageAuthorCount";
import EmojiBadge from "../../components/Badge/EmojiBadge";
import { css } from "@emotion/react";
import React from "react";
import { BREAKPOINTS } from "../../constants/constants";

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
      <div css={cardWrapper(item)}>
        <div css={textBox}>
          <h2 css={toName}>To. {item.name}</h2>
          <MessageAuthorCount
            messages={item.recentMessages}
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

export default React.memo(Card);

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
  color: ${backgroundImageURL ? "#fff" : "#000"};
  overflow: hidden;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

const cardWrapper = ({ backgroundImageURL }) => css`
  height: 100%;
  padding: 30px 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${backgroundImageURL
    ? "rgba(0, 0, 0, 0.5)"
    : "transparent"};
`;

const textBox = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const toName = css`
  font-size: var(--font-size-18);

  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: var(--font-size-24);
  }
`;

const authorCount = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: var(--font-size-14);

  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: var(--font-size-16);
  }
`;

const topReactions = css`
  display: flex;
  font-size: var(--font-size-14);
  gap: 4px;
  padding: 17px 0;
  margin-right: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);

  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: var(--font-size-16);
  }
`;
