import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useBreakpoint from "./hooks/useResponsive";
import Pagination from "./Pagination";
import {
  BREAKPOINTS,
  CARD_WIDTH_DESKTOP,
  CARD_WIDTH_TABLET,
  CARD_WIDTH_MOBILE,
  SLIDER_GAP,
  SLIDER_MAX_WIDTH,
} from "../../constants/constants";

// 브레이크포인트별 카드 설정
const SETTINGS = {
  desktop: {
    cardWidth: CARD_WIDTH_DESKTOP, // 데스크탑 카드 너비 (275px)
    visibleCount: 4, // 한 번에 보이는 카드 개수
  },
  tablet: {
    cardWidth: CARD_WIDTH_TABLET, // 태블릿 카드 너비
    visibleCount: 2.5, // 한 번에 보이는 카드 개수 (2.5개)
  },
  mobile: {
    cardWidth: CARD_WIDTH_MOBILE, // 모바일 카드 너비 (208px)
    visibleCount: 1.5, // 한 번에 보이는 카드 개수 (1.5개)
  },
};

const Slider = ({ items }) => {
  // 현재 화면 크기에 따른 브레이크포인트 가져오기
  const breakpoint = useBreakpoint();
  const { cardWidth, visibleCount } = SETTINGS[breakpoint] || SETTINGS.desktop;

  // 전체 아이템 개수, 최대 인덱스 계산
  const TOTAL_COUNT = items.length;
  const maxIndex = Math.max(0, Math.ceil(TOTAL_COUNT - visibleCount));
  const gap = SLIDER_GAP;
  const isDesktop = breakpoint === "desktop";
  const showPagination = isDesktop && items.length > visibleCount;

  // 슬라이드 인덱스 상태
  const [slideIndex, setSlideIndex] = useState(0);
  const wrapperRef = useRef(null); // 스크롤 컨테이너 접근 참조

  // 뷰포트 변경 -> slideIndex 리셋, 스크롤 위치 최상단으로 이동
  // 뷰포트 변경 시 UI 꼬이지 않도록 조절
  useEffect(() => {
    setSlideIndex(0);
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = 0;
    }
  }, [breakpoint]);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollLeft = wrapperRef.current?.scrollLeft || 0; // 현재 얼마나 스크롤되었는지지
    const idx = Math.round(scrollLeft / (cardWidth + gap)); // 몇 칸 이동했는지 계산
    setSlideIndex(idx);
  };

  // 이전 버튼 클릭 시 호출: 데스크탑 모드에서만 동작
  const handlePrev = () => {
    if (!isDesktop || slideIndex <= 0) return;
    wrapperRef.current.scrollBy({
      left: -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  // 다음 버튼 클릭 시 호출: 데스크탑 모드에서만 동작
  const handleNext = () => {
    if (!isDesktop || slideIndex >= maxIndex) return;
    wrapperRef.current.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <div css={sliderOuter}>
      {/* 데스크탑 모드에서만 Pagination 버튼 렌더링 */}
      {showPagination && (
        <Pagination
          slideIndex={slideIndex}
          maxIndex={maxIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* 슬라이드 영역:
          - 데스크탑: overflow: hidden
          - 태블릿/모바일: 가로 스크롤 */}
      <div css={sliderWrapper} ref={wrapperRef} onScroll={handleScroll}>
        <div css={sliderTrack}>
          {items.map((item) => (
            <Link key={item.id} to={`/post/${item.id}`} css={card}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

// CSS 스타일 정의
// 전체 슬라이더 컨테이너 (버튼 기준 position: relative)
const sliderOuter = css`
  width: 100%;
  max-width: ${SLIDER_MAX_WIDTH}px; /* 데스크탑 기준 최대 너비 */
  margin: 0 auto;
  position: relative;
`;

// 공통 wrapper: border만 있고, overflow는 하위 스타일에서 분기
const sliderWrapper = css`
  width: 100%;
  border: 1px solid #666;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

// 카드들을 가로로 배치하는 트랙
const sliderTrack = css`
  display: flex;
  gap: ${SLIDER_GAP}px;
`;

// 카드 스타일 (기본: 모바일, 미디어쿼리: 데스크탑)
const card = css`
  border: 1px solid #333;
  flex-shrink: 0;

  scroll-snap-align: none;
  scroll-snap-stop: normal;

  width: ${CARD_WIDTH_MOBILE}px;
  height: 232px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    width: ${CARD_WIDTH_DESKTOP}px;
    height: 260px;
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;
