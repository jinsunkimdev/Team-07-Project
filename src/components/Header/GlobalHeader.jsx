import { css } from "@emotion/react";
import logoImg from "../../assets/images/logo.svg";
import { BREAKPOINTS } from "../../constants/constants";

const GlobalHeader = () => {
  return (
    <header css={GlobalHeaderStyle}>
      <div className="header-container">
        <img src={logoImg} alt="롤링 로고" width="106" height="30" />
      </div>
    </header>
  );
};

export default GlobalHeader;

export const GlobalHeaderStyle = css`
  position: sticky;
  top: 0;
  padding: var(--header-padding);
  background-color: var(--white);
  border-bottom: 1px solid #ededed;

  .header-container {
    display: flex;
    align-items: center;
    width: var(--content-width);
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    .header-container {
      margin: 0 auto;
    }
  }
`;
