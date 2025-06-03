import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";

const MessageCardListStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 24px;
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 24px;
  }

  .empty-message {
    font-size: var(--font-size-18);
  }
`;

export default MessageCardListStyle;
