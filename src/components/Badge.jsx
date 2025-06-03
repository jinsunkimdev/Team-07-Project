import { css } from "@emotion/react";

const BADGES_COLOR = {
  지인: {
    color: "var(--beige-500)",
    backgroundColor: "var(--beige-100)",
  },
  동료: {
    color: "var(--purple-600)",
    backgroundColor: "var(--purple-100)",
  },
  가족: {
    color: "var(--green-500)",
    backgroundColor: "var(--green-100)",
  },
  친구: {
    color: "var(--blue-500)",
    backgroundColor: "var(--blue-100)",
  },
};

const Badge = ({ relationshipLabel }) => {
  return (
    <span style={BADGES_COLOR?.[relationshipLabel]} css={badgeStyle}>
      {relationshipLabel}
    </span>
  );
};

const badgeStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 20px;
  border-radius: 4px;
`;

export default Badge;
