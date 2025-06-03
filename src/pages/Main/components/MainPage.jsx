/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import cardPreview from "../../../assets/images/card_preview.png";
import emojiPreview from "../../../assets/images/emoji_preview.png";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import GlobalHeader from "../../../components/Header/GlobalHeader";

const MainPage = () => {
  return (
    <>
      <GlobalHeader>
        <div
          css={css`
            width: 142px;
            height: 40px;

            button {
              width: 100% !important;
              height: 100% !important;
              font-size: var(--font-size-14) !important;
            }
          `}
        >
          <Button variant="outlined" size="md" as={Link} to="/post">
            롤링 페이퍼 만들기
          </Button>
        </div>
      </GlobalHeader>
      <div css={pageWrapper}>
        <section css={pointSection}>
          <div css={pointContent}>
            <span css={pointBadge}>Point. 01</span>
            <h2 css={pointTitle}>
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </h2>
            <p css={pointDesc}>로그인 없이 자유롭게 만들어요.</p>
          </div>
          <div css={pointPreview}>
            <img src={cardPreview} alt="롤링 페이퍼 카드 예시 이미지" />
          </div>
        </section>

        <section css={pointSection}>
          <div css={pointContent}>
            <span css={pointBadge}>Point. 02</span>
            <h2 css={pointTitle}>
              서로에게 이모지로 감정을 <span css={breakLine}>표현해보세요</span>
            </h2>
            <p css={pointDesc}>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
          </div>
          <div css={pointPreview}>
            <img
              src={emojiPreview}
              alt="이모지 감정 표현 예시 이미지"
              css={css`
                width: 260px;
                height: auto;
                max-height: 113px;
                object-fit: cover;
                margin: 0 auto;
              `}
            />
          </div>
        </section>

        <Button
          as={Link}
          to="/post"
          variant="primary"
          size="lg"
          css={css`
            width: 320px;
            height: 56px;
            margin-top: 24px;
          `}
        >
          구경해보기
        </Button>
      </div>
    </>
  );
};
export default MainPage;

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: var(--bg-light);
  padding: var(--content-padding);
  margin-top: 24px;
`;

/** 각 Point 섹션 공통 스타일 */
const pointSection = css`
  max-width: 320px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--surface-0);
  border-radius: 20px;
  padding: 24px;
  gap: 48px;
  flex-direction: column;
  overflow: hidden;
`;

/** 텍스트 쪽 영역 */
const pointContent = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

/** Point 뱃지 (동그란 배경에 흰 텍스트) */
const pointBadge = css`
  width: 80px;
  display: inline-block;
  background-color: var(--purple-600);
  color: var(--white);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-bold);
  padding: 4px 12px;
  border-radius: 999px;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
`;

/** 제목 */
const pointTitle = css`
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-bold);
  color: var(--gray-900);
  letter-spacing: -1px;
`;

/** 설명 텍스트 */
const pointDesc = css`
  font-size: var(--font-size-15);
  font-weight: var(--font-weight-regular);
  color: var(--gray-500);
`;

/** 카드 미리보기나 이모지 드롭다운이 들어가는 영역 */
const pointPreview = css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  width: 354px;
  padding-bottom: 24px;
`;

const breakLine = css`
  display: block;
`;
