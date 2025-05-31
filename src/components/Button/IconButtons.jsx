/** @jsxImportSource @emotion/react */
/** 제발려 */
import iconPlus from "../../../assets/iconPlus.svg";
import iconDelete from "../../../assets/iconDeleted.svg";
import iconArrowLeft from "../../../assets/iconArrowLeft.svg";
import iconArrowRight from "../../../assets/iconArrowRight.svg";
import iconCheck from "../../../assets/iconCheck.svg";
import iconShare20 from "../../../assets/iconShare20.svg";
import iconShare24 from "../../../assets/iconShare24.svg";
import { css } from "@emotion/react";

export const IconPlusButton = ({ ...props }) => (
  <button css={plusButton} {...props}>
    <img src={iconPlus} alt="Plus button" />
  </button>
);

export const IconDeleteButton = ({ onClick, ...props }) => (
  <button css={deleteButton} onClick={onClick} {...props}>
    <img src={iconDelete} alt="delete button" />
  </button>
);

export const IconArrowLeftButton = () => (
  <button css={arrowButton}>
    <img src={iconArrowLeft} alt="ArrowLeft button" />
  </button>
);

export const IconArrowRightButton = () => (
  <button css={arrowButton}>
    <img src={iconArrowRight} alt="ArrowRight button" />
  </button>
);

export const IconCheckButton = () => (
  <button css={checkButton}>
    <img src={iconCheck} alt="Check button" />
  </button>
);

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
