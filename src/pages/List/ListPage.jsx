import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import GlobalHeader from "../../components/Header/GlobalHeader";
import Slider from "./Slider";
import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";

export const mockItems = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 6" },
  { id: 7, title: "Card 7" },
  { id: 8, title: "Card 8" },
  { id: 9, title: "Card 9" },
  { id: 10, title: "Card 10" },
];

function ListPage() {
  return (
    <div>
      <GlobalHeader>
        <Button
          as={Link}
          to="/post"
          variant="outlined"
          size="md"
          css={css`
            width: auto;
            @media (max-width: ${BREAKPOINTS.md}px) {
              font-size: var(--font-size-14);
            }
          `}
        >
          롤링 페이퍼 만들기
        </Button>
      </GlobalHeader>
      <main css={pageWrapper}>
        <section css={section}>
          <div css={paper}>
            <h2 css={title}>인기 롤링 페이퍼 🔥</h2>
            <Slider items={mockItems} />
          </div>
          <div css={paper}>
            <h2 css={title}>최근에 만든 롤링 페이퍼⭐️</h2>
            <Slider items={mockItems} />
          </div>
        </section>
        <div css={padding}>
          <Button
            as={Link}
            to="/post"
            variant="primary"
            size="lg"
            css={css`
              width: 100%;
              @media (min-width: ${BREAKPOINTS.lg}px) {
                max-width: 280px;
              }
            `}
          >
            나도 만들어보기
          </Button>
        </div>
      </main>
    </div>
  );
}
export default ListPage;

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
    height: 951px;
  }
  @media (min-width: ${BREAKPOINTS.lg}px) {
    max-width: 1160px;
    height: auto;
    gap: 72px;
  }
`;

const section = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const paper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
  }
`;

const title = css`
  font-size: var(--font-size-20);
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: var(--font-size-24);
    font-weight: var(--font-weight-bold);
  }
`;

const padding = css`
  width: var(--content-width);
  padding: var(--content-padding);
  display: flex;
  justify-content: center;
  align-items: center;
`;
