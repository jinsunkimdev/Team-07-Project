import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { getCardListItem } from "../../api/get/getCardListItem";
import Button from "../../components/Button/Button";
import GlobalHeader from "../../components/Header/GlobalHeader";
import Slider from "./Slider";
import { BREAKPOINTS } from "../../constants/constants";

//  슬라이더에 들어갈 목업 아이템

//  리스트 페이지 컴포넌트
function ListPage() {
  const [newCards, setNewCards] = useState([]);
  const [bestCards, setBestCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const [newest, popular] = await Promise.all([
          getCardListItem({ limit: 20, ordering: "-createdAt" }),
          getCardListItem({ limit: 20, ordering: "-reactionCount" }),
        ]);
        setNewCards(Array.isArray(newest.results) ? newest.results : []);
        setBestCards(Array.isArray(popular.results) ? popular.results : []);
      } catch (err) {
        console.error("불러오기 실패:", err);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      {/* 상단 글로벌 헤더 + CTA 버튼 */}
      <GlobalHeader>
        <Button
          as={Link}
          to="/post"
          variant="outlined"
          size="md"
          css={headerButtonStyle}
        >
          롤링 페이퍼 만들기
        </Button>
      </GlobalHeader>
      {/* 메인 콘텐츠 영역 */}
      <main css={pageWrapper} role="main">
        {/* 슬라이더 섹션 */}
        <section css={section}>
          <SliderSection title="인기 롤링 페이퍼 🔥" items={bestCards} />
          <SliderSection title="최근에 만든 롤링 페이퍼⭐️" items={newCards} />
        </section>
        {/* 하단 CTA 버튼 */}
        <div css={ctaWrapper}>
          <Button
            as={Link}
            to="/post"
            variant="primary"
            size="lg"
            css={ctaButtonStyle}
          >
            나도 만들어보기
          </Button>
        </div>
      </main>
    </div>
  );

  function SliderSection({ title, items }) {
    return (
      <div css={sliderBlock}>
        <h2 css={sliderTitle}>{title}</h2>
        <Slider items={items} />
      </div>
    );
  }
}

export default ListPage;

//  스타일 정의  //
//  스타일 정의  //

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-light);
  padding-top: 48px;
  margin: 0 auto;
  gap: 48px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    min-height: 951px;
  }
  @media (min-width: ${BREAKPOINTS.lg}px) {
    max-width: 1160px;
    gap: 72px;
  }
`;

const section = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const sliderBlock = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
  }
`;

const sliderTitle = css`
  font-size: var(--font-size-20);
  font-weight: 600;
  text-align: left;
  padding-left: 20px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: var(--font-size-24);
    font-weight: var(--font-weight-bold);
  }
`;

//버튼 style
const headerButtonStyle = css`
  width: auto;
  @media (max-width: ${BREAKPOINTS.md}px) {
    font-size: var(--font-size-14);
  }
`;

const ctaButtonStyle = css`
  width: 100%;
  @media (min-width: ${BREAKPOINTS.lg}px) {
    max-width: 280px;
  }
`;

const ctaWrapper = css`
  width: var(--content-width);
  padding: var(--content-padding);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.lg}px) {
    padding-bottom: 48px;
  }
`;
