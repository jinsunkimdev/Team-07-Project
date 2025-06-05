import { css } from "@emotion/react";
import { ScrollArrowButton } from "../../components/Button/IconButtons";

/**
 * Pagination 컴포넌트
 * - slideIndex: 현재 슬라이드 인덱스
 * - maxIndex: 최대 슬라이드 인덱스
 * - onPrev, onNext: 이전/다음 클릭 핸들러
 */
const Pagination = ({ slideIndex, maxIndex, onPrev, onNext }) => (
  <>
    <ScrollArrowButton
      direction="left"
      onClick={onPrev}
      visible={slideIndex > 0}
      css={prevBtn}
      aria-label="이전 카드 보기"
    />
    <ScrollArrowButton
      direction="right"
      onClick={onNext}
      visible={slideIndex < maxIndex}
      css={nextBtn}
      aria-label="다음 카드 보기"
    />
  </>
);

export default Pagination;

// Prev 버튼 위치 (왼쪽 중앙 바깥)
const prevBtn = css`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// Next 버튼 위치 (오른쪽 중앙 바깥)
const nextBtn = css`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
`;
