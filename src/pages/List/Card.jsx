import React from "react";
import MessageAuthorCount from "../../components/MessageAuthorCount";
import EmojiBadge from "../../components/Badge/EmojiBadge";
import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";
import { BACKGROUND_COLORS } from "../../constants/constants";
import patternBeige from "../../assets/images/pattern_beige.png";
import patternBlue from "../../assets/images/pattern_blue.png";
import patternGreen from "../../assets/images/pattern_green.png";
import patternPurple from "../../assets/images/pattern_purple.png";

const BACKGROUND_PATTERNS = {
  beige: patternBeige,
  green: patternGreen,
  blue: patternBlue,
  purple: patternPurple,
};

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
          customStyle={css`
            @media (max-width: ${BREAKPOINTS.md}px) {
              padding: 6px 8px;
            }
          `}
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
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  color: ${backgroundImageURL ? "#fff" : "#000"};

  ${getBackgroundStyle({ backgroundColor, backgroundImageURL })}
  ${hoverStyle}

  ${!backgroundImageURL && getPatternAfterStyle(backgroundColor)}
`;

const getBackgroundStyle = ({ backgroundColor, backgroundImageURL }) => css`
  background-color: ${BACKGROUND_COLORS[backgroundColor] || "transparent"};
  background-image: ${backgroundImageURL
    ? `url(${backgroundImageURL})`
    : "none"};
  background-size: cover;
  background-position: center;
`;

const hoverStyle = css`
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  }
`;

const getPatternAfterStyle = (color) => {
  const pattern = BACKGROUND_PATTERNS[color];
  if (!pattern) return "";

  return css`
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 142px;
      height: 142px;
      background-image: url(${pattern});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 0;
    }
  `;
};

const cardWrapper = ({ backgroundImageURL }) => css`
  position: relative;
  z-index: 1;
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
