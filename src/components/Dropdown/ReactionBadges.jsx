import useDropdown from "./useDropdown";
import EmojiBadge from "../Badge/EmojiBadge";
import iconArrowTop from "../../assets/images/iconArrowTop.svg";
import iconArrowDown from "../../assets/images/iconArrowDown.svg";

const MockReactionOptions = [
  { id: 1, emoji: "😀", count: "13" },
  { id: 2, emoji: "🥹", count: "2" },
  { id: 3, emoji: "😊", count: "43" },
  { id: 4, emoji: "😂", count: "22" },
  { id: 5, emoji: "🥲", count: "34" },
  { id: 6, emoji: "😎", count: "51" },
  { id: 7, emoji: "⚽️", count: "10" },
  { id: 8, emoji: "🏍️", count: "6" },
  { id: 9, emoji: "🍎", count: "99" },
];

const ReactionBadges = ({ options = MockReactionOptions }) => {
  const { dropdownSelectRef, isOpen, setIsOpen } = useDropdown({
    options,
  });

  const sortReactions = [...options].sort(
    (a, b) => Number(b.count) - Number(a.count)
  );

  return (
    <div ref={dropdownSelectRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <button>
          {sortReactions.slice(0, 3).map((reaction) => (
            <EmojiBadge
              key={reaction.id}
              id={reaction.id}
              emoji={reaction.emoji}
              count={reaction.count}
            />
          ))}
          <img src={isOpen ? iconArrowTop : iconArrowDown} alt="toggle" />
        </button>
        {isOpen && (
          <div>
            {sortReactions.slice(0, 8).map((reaction) => (
              <EmojiBadge
                key={reaction.id}
                id={reaction.id}
                emoji={reaction.emoji}
                count={reaction.count}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactionBadges;
