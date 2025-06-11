import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import Button from "./Button";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;
  return (
    <Button css={buttonStyle} onClick={scrollToTop} aria-label="맨 위로">
      ↑
    </Button>
  );
};

const buttonStyle = css`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--white);
  font-size: 34px;       /* 이모지 크기 조정 */
  line-height: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

export default ScrollToTopButton;
