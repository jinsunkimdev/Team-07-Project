import { css } from "@emotion/react";
import { useState } from "react";
import useBreakpoint from "./hooks/useResponsive";
import Pagination from "./Pagination";

const SETTINGS = {
  desktop: {
    cardWidth: 275, //카드 너비
    visibleCount: 4, // 보이는 카드 개수
    gap: 20, // 카드 간 간격
    usePagination: true, // 페이지네이션 사용 유무
  },
  tablet: {
    cardWidth: 275,
    visibleCount: 2.5,
    gap: 20,
    usePagination: false,
  },
  mobile: {
    cardWidth: 208,
    visibleCount: 1.5,
    gap: 20,
    usePagination: false,
  },
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "desktop";

  const {
    cardWidth, // 데스크탑↔태블릿↔모바일마다 달라지는 카드 너비
    visibleCount, // 데스크탑=4, 태블릿=2.5, 모바일=1.5
    gap, // 카드 간 간격 (px)
    usePagination, // 데스크탑에서만 true
  } = SETTINGS[breakpoint] || {};

  const TOTAL_COUNT = 9;
  const maxIndex = Math.max(0, Math.ceil(TOTAL_COUNT - visibleCount));

  // 왼쪽 이동
  const handlePrev = () => {
    if (!usePagination) return;
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  // 오른쪽 이동
  const handleNext = () => {
    if (!usePagination) return;
    if (slideIndex < maxIndex) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const transformStyle = usePagination
    ? {
        transform: `translateX(-${(cardWidth + gap) * slideIndex}px)`,
      }
    : {};

  return (
    <div css={sliderOuter}>
      {/* 데스크탑 모드에서만 Pagination 버튼 보이게 */}
      {usePagination && (
        <Pagination
          slideIndex={slideIndex}
          maxIndex={maxIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* 슬라이드 영역: 데스크탑은 overflow:hidden, 나머지는 가로 스크롤 */}
      <div css={[wrapper, isDesktop ? sliderWrapper : scrollWrapper]}>
        <div css={sliderTrack} style={transformStyle}>
          {/* 카드 9개 임시 렌더링 */}
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

export default Slider;

// 전체 슬라이더 컨테이너 (버튼 기준 position: relative)
const sliderOuter = css`
  width: 100%;
  max-width: 1160px; /* 데스크탑 카드 4개(275*4) + 간격 20*3 = 1160 */
  margin: 0 auto;
  position: relative;
`;

// wrapper 공통: 테두리만 있고, 실제 overflow는 desktop↔mobile에 따라 분기
const wrapper = css`
  width: 100%;
  border: 1px solid #666;
`;

const sliderWrapper = css`
  overflow: hidden; /* 데스크탑에서만 사용 */
`;

const scrollWrapper = css`
  overflow: scroll; /* 태블릿/모바일에서만 사용 */
  -webkit-overflow-scrolling: touch;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

// 카드들을 가로로 배치하는 트랙
// gap은 SETTINGS의 gap 값과 일치하도록 숫자 20px을 하드코딩했습니다.
const sliderTrack = css`
  display: flex;
  gap: 20px;
  width: fit-content;
  transition: transform 0.3s ease;
`;

//카드 스타일 (미디어쿼리로 너비/높이 고정, 추후 CSS 변수로 변경 가능)
const card = css`
  border: 1px solid #333;
  flex-shrink: 0;

  @media (min-width: 1200px) {
    width: 275px;
    height: 260px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 275px;
    height: 260px;
  }

  @media (max-width: 767px) {
    width: 208px;
    height: 232px;
  }
`;
