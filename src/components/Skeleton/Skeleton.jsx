import { css } from "@emotion/react";

/**
 * 공용 Skeleton 컴포넌트
 * @param {string} width - width
 * @param {string} height - height
 * @param {string} borderRadius - 테두리 둥글기
 * @param {string} variant - "circle" | "rect"
 */
const Skeleton = ({ width, height, borderRadius, variant }) => {
  return <div css={skeletonStyle({ width, height, borderRadius, variant })} />;
};

export default Skeleton;

const skeletonStyle = ({ width, height, borderRadius, variant }) => css`
  width: ${width ? width : "100%"};
  height: ${height ? height : "100%"};
  border-radius: ${variant === "circle" ? "50%" : borderRadius};
  background-color: var(--gray-200);
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
