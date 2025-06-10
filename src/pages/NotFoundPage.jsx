import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { BREAKPOINTS } from "../constants/constants";
import { useEffect } from "react";

const REDIRECT_MS = 3000;

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, REDIRECT_MS);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section css={NotFoundPageStyle}>
      <h2>404</h2>
      <div className="not-found-content">
        페이지를 찾을 수 없어요..! 🤯
        <br /> 🌌 3초 뒤 메인 페이지로 이동합니다. 🌌
      </div>
    </section>
  );
};

export default NotFoundPage;

const NotFoundPageStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: var(--white);
  color: var(--gray-700);
  text-align: center;
  padding: 32px;

  h2 {
    font-size: 7rem;
    color: var(--primary);
    text-shadow: 0 0 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff,
      -1px 1px 0 #fff, 1px 1px 0 #fff, -2px -2px 0 #9935ff, 2px -2px 0 #9935ff,
      -2px 2px 0 #9935ff, 2px 2px 0 #9935ff;

    @media (min-width: ${BREAKPOINTS.md}px) {
      font-size: 10rem;
    }
  }

  .not-found-content {
    margin-bottom: 32px;
    font-size: var(--font-size-16);

    @media (min-width: ${BREAKPOINTS.md}px) {
      font-size: var(--font-size-20);
    }
  }
`;
