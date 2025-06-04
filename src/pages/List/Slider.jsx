import { css } from "@emotion/react";
import { ScrollArrowButton } from "../../components/Button/IconButtons";

const Slider = () => {
  return (
    <>
      <div css={sliderWrapper}>
        <div css={sliderTrack}>
          <div css={card}>카드 1</div>
          <div css={card}>카드 2</div>
          <div css={card}>카드 3</div>
          <div css={card}>카드 4</div>
          <div css={card}>카드 4</div>
        </div>
      </div>
      <Pagenation />
    </>
  );
};

const Pagenation = () => {
  return (
    <div>
      <ScrollArrowButton
        direction="left"
        // onClick={handlePrev}
        // visible={pageIndex > 0}
      />
      <ScrollArrowButton
        direction="right"
        // onClick={handleNext}
        // visible={pageIndex < totalPages - 1}
      />
    </div>
  );
};

const card = css`
  width: calc((1160px - 60px) / 4);
  height: 260px;
  border: 1px solid #333;
  flex-shrink: 0;
`;
const sliderTrack = css`
  width: fit-content;
  display: flex;
  gap: 20px;
`;
const sliderWrapper = css`
  position: relative;
  width: 1160px;
  overflow: hidden;
  border: 1px solid #666;
`;

export default Slider;
