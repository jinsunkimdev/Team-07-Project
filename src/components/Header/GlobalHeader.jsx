import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { BREAKPOINTS } from "../../constants/constants";
import logoImg from "../../assets/images/logo.svg";

const GlobalHeader = ({ children }) => {
  return (
    <header css={GlobalHeaderStyle}>
      <div className="header-container">
        <Link to="/">
          <img src={logoImg} alt="롤링 로고" width="106" height="30" />
        </Link>
        {children}
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
    justify-content: space-between;
    width: var(--content-width);
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    .header-container {
      margin: 0 auto;
    }
  }
`;
