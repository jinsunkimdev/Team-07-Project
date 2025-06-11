import { css } from "@emotion/react";
import logo from "../assets/images/logo.svg";

const LoadingPage = ({ showLoading }) => {
  return (
    <section css={LoadingPageStyle({ showLoading })}>
      <img src={logo} alt="롤링 로고" width="160" height="46" />
      <p>작은 추억을 만드는 공간, 롤링</p>
    </section>
  );
};

export default LoadingPage;

const LoadingPageStyle = ({ showLoading }) => css`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
  height: 100vh;
  transition: 0.3s;
  opacity: ${showLoading ? 1 : 0};
  visibility: ${showLoading ? "visible" : "hidden"};

  p {
    color: var(--gray-500);
    font-size: var(--font-size-16);
  }
`;
