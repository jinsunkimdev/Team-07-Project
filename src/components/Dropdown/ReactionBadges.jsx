import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";
import useDropdown from "./useDropdown";
import EmojiBadge from "../Badge/EmojiBadge";
import iconArrowTop from "../../assets/images/iconArrowTop.svg";
import iconArrowDown from "../../assets/images/iconArrowDown.svg";
import { useEffect, useState } from "react";
import ReactionsApi from "../../api/ReactionApi";
import { useParams } from "react-router-dom";

const ReactionBadges = ({ refreshTrigger }) => {
  const { id } = useParams();
  const [reactions, setReactions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const { dropdownSelectRef, isOpen, toggle } = useDropdown({});

  useEffect(() => {
    if (!id) return;
    const fetchReactions = async () => {
      try {
        const data = await ReactionsApi.get({
          id,
          limit: 100,
          offset: 0,
        });
        setReactions(data.results);
      } catch (error) {
        console.log("emoji get 실패:", error);
      }
    };

    fetchReactions();
  }, [id, refreshTrigger]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleCount(width <= BREAKPOINTS.md ? 6 : 8);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortReactions = [...reactions].sort(
    (a, b) => Number(b.count) - Number(a.count)
  );
  // 리액션이 하나도 없으면 disable
  const disableToggle = sortReactions.length === 0;

  return (
    <div ref={dropdownSelectRef} css={ReactionsWrapper}>
      <div
        css={[topCountReaction(disableToggle)]}
        onClick={() => {
          if (!disableToggle) toggle();
        }}
      >
        {sortReactions.slice(0, 3).map((reaction) => (
          <EmojiBadge
            key={reaction.id}
            id={reaction.id}
            emoji={reaction.emoji}
            count={Number(reaction.count) > 99 ? "99+" : reaction.count}
          />
        ))}
        <img src={isOpen ? iconArrowTop : iconArrowDown} alt="toggle" />
        {isOpen && (
          <div css={reactionDropdown}>
            {sortReactions.slice(0, visibleCount).map((reaction) => (
              <EmojiBadge
                key={reaction.id}
                id={reaction.id}
                emoji={reaction.emoji}
                count={Number(reaction.count) > 99 ? "99+" : reaction.count}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactionBadges;

/**     Style     */
const ReactionsWrapper = css`
  display: inline-block;
  position: relative;
  padding: 0 6px 0 6px;
`;

const topCountReaction = (disabled) => css`
  display: flex;
  gap: 8px;
  font-size: var(--font-size-14);
  cursor: ${disabled ? "not-allowed" : "pointer"};
  opacity: ${disabled ? 0.2 : 1};
  img {
    width: 24px;
    padding: 2px;
  }
  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: var(--font-size-16);
  }
`;

const reactionDropdown = css`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  right: 0;
  margin-top: 12px;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 24px;
  gap: 10px;
  z-index: 100;
  background-color: var(--white);
  font-size: var(--font-size-14);

  @media (min-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(4, 1fr);
    font-size: var(--font-size-16);
  }
`;
