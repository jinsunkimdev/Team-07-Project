/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import iconPlus from "../../../assets/iconPlus.svg";
import iconDelete from "../../../assets/iconDeleted.svg";
import iconArrowLeft from "../../../assets/iconArrowLeft.svg";
import iconArrowRight from "../../../assets/iconArrowRight.svg";
import iconCheck from "../../../assets/iconCheck.svg";
import iconShare20 from "../../../assets/iconShare20.svg";
import iconShare24 from "../../../assets/iconShare24.svg";

import { useNavigate } from "react-router-dom";

export const IconPlusButton = ({ to, ...props }) => {
  const navigate = useNavigate(); //to 로 경로만 설정해주면 onClick으로 이동

  return (
    <button css={plusButton} onClick={() => navigate(to)} {...props}>
      <img src={iconPlus} alt="Plus button" />
    </button>
  );
};

export const IconDeleteButton = (
  { onClick, ...props } //리스트 로직 보고 판단.
) => (
  <button css={deleteButton} onClick={onClick} {...props}>
    <img src={iconDelete} alt="delete button" />
  </button>
);

export const ScrollArrowButton = ({
  direction = left, //dirction 으로 알맞은 방향 표시
  onClick,
  visible = true, //visible 프롭은 boolean으로 받고, false일 경우 null을 반환, 렌더x
  ...props
}) => {
  if (!visible) return null;

  const iconSrc = direction === left ? iconArrowLeft : iconArrowRight;
  const altText = direction === left ? "scroll left" : "scroll right";

  return (
    <button css={arrowButton} onClick={onClick} {...props}>
      <img src={iconSrc} alt={altText} />
    </button>
  );
};

export const IconCheckButton = () => (
  //로직 보고 판단.
  <button css={checkButton}>
    <img src={iconCheck} alt="Check button" />
  </button>
);

//아래 두 버튼은 추후에 합쳐서 반응형으로 만들지, 각자 렌더링할지 고민중
export const IconShare20Button = () => (
  <button css={shareButton}>
    <img src={iconShare20} alt="Share button" />
  </button>
);

export const IconShare24Button = () => (
  <button css={share24Button}>
    <img src={iconShare24} alt="Share button" />
  </button>
);

/** 버튼 공통 css */
const whiteButton = css`
  background-color: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-900);

  &:hover,
  :active {
    background-color: var(--gray-100);
  }

  &:disabled {
    background-color: var(--gray-300);
    color: var(--white);
  }

  &:focus:not(:active) {
    background-color: var(--white);
    border: 1px solid var(--gray-500);
  }
`;

const grayButton = css`
  background-color: var(--gray-500);
  border-radius: var(--radius-xlg);
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: var(--gray-300);
  }

  &:hover {
    background-color: var(--gray-600);
  }

  &:active {
    background-color: var(--gray-700);
  }

  &:focus:not(:active) {
    background-color: var(--gray-700);
    border: 1px solid var(--gray-800);
  }
`;

/** ----------- */

const plusButton = css`
  ${grayButton}
  width: 56px;
  height: 56px;
`;

const deleteButton = css`
  ${whiteButton}
  width: 40px;
  height: 40px;
  gap: 10px;
`;

const arrowButton = css`
  ${whiteButton}
  border-radius: var(--radius-xlg);
  width: 40px;
  height: 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const checkButton = css`
  ${grayButton}
  width: 44px;
  height: 44px;
`;

const shareButton = css`
  ${whiteButton}
  width: 36px;
  height: 32px;
`;

const share24Button = css`
  ${whiteButton}
  width: 56px;
  height: 36px;
`;
