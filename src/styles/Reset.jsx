import { css, Global } from "@emotion/react";

// Reset.jsx
export const Reset = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        color: inherit;
        box-sizing: border-box;
      }
      *,
      :after,
      :before {
        box-sizing: border-box;
      }
      :root {
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        cursor: default;
        line-height: 1.5;
        overflow-wrap: break-word;
        -moz-tab-size: 4;
        tab-size: 4;
      }
      html {
        font-size: 14px;
      }
      body {
        font-family: "Pretendard", sans-serif;
        background: var(--background-light);
        overflow-x: hidden;
      }
      html,
      body {
        height: 100%;
        font-family: var(--main-font);
      }
      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }
      input,
      button,
      textarea,
      select {
        font-family: inherit;
      }
      button {
        background: none;
        border: 0;
        cursor: pointer;
        line-height: 1;
        transition: 0.2s;
      }
      button:disabled {
        background-color: var(--gray-300);
        border-color: var(--gray-300);
      }
      button:disabled:hover {
        background-color: var(--gray-300);
      }
      a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
      }
      input {
        border: none;
      }
      li {
        list-style: none;
      }
    `}
  />
);
