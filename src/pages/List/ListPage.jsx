import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import GlobalHeader from "../../components/Header/GlobalHeader";
import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";

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
          <div>
            <h2 css={title}>인기 롤링 페이퍼 🔥</h2>
            <div css={slider}>슬라이드</div>
          </div>
          <div>
            <h2 css={title}>최근에 만든 롤링 페이퍼⭐️</h2>
            <div css={slider}>슬라이드</div>
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

  gap: 48px;
  background-color: var(--bg-light);
  margin-top: 48px;

  overflow: hidden;
`;

const section = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const title = css`
  font-size: var(--font-size-20);
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
`;

const slider = css`
  width: 100%;
  height: 232px;
  background-color: #555;
  @media (min-width: ${BREAKPOINTS.md}px) {
    height: 260px;
  }
`;

const padding = css`
  width: var(--content-width);
  padding: var(--content-padding);
`;
