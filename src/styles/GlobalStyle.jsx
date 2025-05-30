// GlobalStyle.jsx
import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body {
        font-family: var(--main-font);
        margin: 0;
        padding: 0;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
