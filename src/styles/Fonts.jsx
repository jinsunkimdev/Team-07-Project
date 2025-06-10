import { css, Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={css`
      /* Pretendard */
      @font-face {
        font-family: "Pretendard";
        src: url("/fonts/PretendardVariable.woff2") format("woff2");
        font-weight: 400 500 700;
        font-display: swap;
      }

      /* Noto Sans KR */
      @font-face {
        font-family: "Noto Sans";
        src: url("/fonts/NotoSansKR-Regular.woff") format("woff");
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Noto Sans";
        src: url("/fonts/NotoSansKR-Medium.woff") format("woff");
        font-weight: 500;
        font-display: swap;
      }
      @font-face {
        font-family: "Noto Sans";
        src: url("/fonts/NotoSansKR-Bold.woff") format("woff");
        font-weight: 700;
        font-display: swap;
      }

      /* 나눔명조 */
      @font-face {
        font-family: "NanumMyeongjo";
        src: url("/fonts/NanumMyeongjo.woff") format("woff");
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "NanumMyeongjo";
        src: url("/fonts/NanumMyeongjoBold.woff") format("woff");
        font-weight: 700;
        font-display: swap;
      }

      /* 나눔손글씨 손편지체 */
      @font-face {
        font-family: "NanumLetter";
        src: url("/fonts/NanumLetter.woff") format("woff");
        font-weight: 400;
        font-display: swap;
      }
    `}
  />
);
