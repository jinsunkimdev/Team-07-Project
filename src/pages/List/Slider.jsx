import { css } from "@emotion/react";
import { ScrollArrowButton } from "../../components/Button/IconButtons";
import { useState } from "react";
import { BREAKPOINTS } from "../../constants/constants";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // 고정 카드 너비 (반응형 처리할 땐 브레이크포인트로 분기)
  const CARD_WIDTH = {
    pc: 275,
    tablet: 275,
    mobile: 208,
  };
  const GAP = 20;
  const VISIBLE_COUNT = 4;
  const TOTAL_COUNT = 9;
  const maxIndex = TOTAL_COUNT - VISIBLE_COUNT;

  // 왼쪽 이동
  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  // 오른쪽 이동
  const handleNext = () => {
    if (slideIndex < maxIndex) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  // 페이지네이션 버튼 컴포넌트
  const Pagenation = () => {
    return (
      <>
        <ScrollArrowButton
          direction="left"
          onClick={handlePrev}
          visible={slideIndex > 0}
          css={[prevBtn, hide]}
        />
        <ScrollArrowButton
          direction="right"
          onClick={handleNext}
          visible={slideIndex < maxIndex}
          css={[nextBtn, hide]}
        />
      </>
    );
  };

  return (
    <div css={sliderOuter}>
      {/* 슬라이드 버튼 */}
      <Pagenation />

      {/* 슬라이드 영역 */}
      <div css={sliderWrapper}>
        <div
          css={sliderTrack}
          style={{
            transform: `translateX(-${(CARD_WIDTH.pc + GAP) * slideIndex}px)`,
            transition: "transform 0.3s ease",
          }}
        >
          {/* 카드 8개 임시 렌더링 */}
          {Array.from({ length: TOTAL_COUNT }, (_, i) => (
            <div key={i} css={card}>
              카드 {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//카드 스타일 (4개씩 보여지게 고정 너비)
const card = css`
  width: calc((1160px - 60px) / 4);
  height: 260px;
  border: 1px solid #333;
  flex-shrink: 0;
`;

//카드들을 가로로 배치하는 트랙
const sliderTrack = css`
  display: flex;
  gap: 20px;
  width: fit-content;
`;

//트랙을 감싸고 잘라내는 wrapper
const sliderWrapper = css`
  width: 100%;
  overflow: hidden;
  border: 1px solid #666;

  @media (max-width: ${BREAKPOINTS.md}px) {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    // 스크롤 바 숨기기
    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

//전체 슬라이더 컨테이너 (버튼 기준으로 position relative)
const sliderOuter = css`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
`;

//Prev 버튼 위치 (왼쪽 바깥 살짝)
const prevBtn = css`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`;

//Next 버튼 위치 (오른쪽 바깥 살짝)
const nextBtn = css`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
`;

const hide = css`
  @media (max-width: ${BREAKPOINTS.md}px) {
    display: none;
  }
`;
export default Slider;
