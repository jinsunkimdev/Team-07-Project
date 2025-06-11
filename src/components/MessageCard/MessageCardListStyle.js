import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";

const MessageCardListStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 24px;
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 24px;
  }
`;

export default MessageCardListStyle;
