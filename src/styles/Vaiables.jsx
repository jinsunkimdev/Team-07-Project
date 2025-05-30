import { css, Global } from "@emotion/react";

// Variables.jsx
export const Variables = () => (
  <Global
    styles={css`
      :root {
        --main-font: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, "Helvetica Neue", sans-serif;
      }
    `}
  />
);
