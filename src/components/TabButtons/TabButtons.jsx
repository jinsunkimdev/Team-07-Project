import { css } from "@emotion/react";
import { useEffect } from "react";

const TabButtons = ({ btns, onClick }) => {
  const handleTabButtonClick = (e) => {
    const targetBtn = e.target;
    if (!targetBtn) return;

    // TabButton 클릭 애니메이션
    const indicator = document.querySelector(".indicator");
    if (indicator) {
      const buttonLeft = targetBtn.offsetLeft;
      indicator.style.transform = `translateX(${buttonLeft}px)`;
    }

    // 클릭 버튼에 active 클래스 추가
    const btns = document.querySelectorAll(".tab-btns-container button");
    btns.forEach((btn) => btn.classList.remove("active"));
    targetBtn.classList.add("active");

    // 부모 컴포넌트로 버튼 텍스트 전달
    onClick(targetBtn.value);
  };

  useEffect(() => {
    const firstTabBtn = document.querySelector(".tab-btns-container button");
    firstTabBtn.classList.add("active");
  }, []);

  return (
    <div css={TabButtonsStyle}>
      <div className="tab-btns-container">
        <span className="indicator" />
        {btns.map((btn) => (
          <button key={btn} value={btn} onClick={handleTabButtonClick}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabButtons;

const TabButtonsStyle = css`
  display: flex;
  margin-top: 12px;

  .tab-btns-container {
    position: relative;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: var(--gray-100);
  }

  .indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 112px;
    height: 100%;
    background-color: var(--white);
    transition: 0.3s ease-in-out;
    z-index: 0;
    border-radius: var(--radius-md);
    border: 2px solid var(--primary);
  }

  button {
    position: relative;
    width: 112px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    z-index: 1;

    &.active {
      color: var(--primary);
      font-weight: var(--font-weight-medium);
    }
  }
`;
