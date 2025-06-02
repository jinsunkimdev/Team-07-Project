/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useEffect, useRef, useState } from "react";

import iconArrowDown from "../assets/images/iconArrowDown.svg";
import iconArrowTop from "../assets/images/iconArrowTop.svg";

const DropdownSelect = ({
  value, // 선택된 항목
  onChange, // 선택시 실행할 함수
  options = [
    /**{label:..., value:..., ...} */
  ],
  trigger, // 버튼 커스텀?
  controlled = false, //state관리를 여기서 하느냐 부모에서 하느냐 | 기본은 여기
  dropdownWidth = "140px", //trigger를 사용한 dropdown의 너비, 기본값은 ShereButton 일 때.
}) => {
  const [internalVlaue, setInternalValue] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const selectedValue = value ? value : internalVlaue;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }; //메모리 누수 방지
  }, []);

  const handleSelect = (option) => {
    if (controlled) {
      onChange?.(option);
    } else {
      setInternalValue(option);
      onChange?.(option);
    }
    setIsOpen(false);
  };

  return (
    <div ref={ref} css={wrapper}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger ? (
          trigger
        ) : (
          <button css={selectedTrigger} disabled={false}>
            {selectedValue?.label}
            <img src={isOpen ? iconArrowTop : iconArrowDown} alt="toggle" />
          </button>
        )}
      </div>
      {isOpen && ( //isOpen이 true일 때만 렌더링
        <ul css={dropdownStyle({ trigger, width: dropdownWidth })}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              css={dropdownOption}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;

/** <-----Style-----> */

const wrapper = css`
  position: relative;
  display: inline-block;
`;

const selectedTrigger = css`
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  color: var(--gray-500);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--gray-500);
    color: var(--gray-900);
  }

  &:focus,
  :active {
    border: 2px solid var(--gray-500);
    color: var(--gray-900);
  }

  &:disabled,
  :disabled:hover,
  :disabled:focus,
  :disabled:active {
    border: 1px solid var(--gray-300);
    background-color: var(--gray-100);
    color: var(--gray-400);
    cursor: default;
  }
`;

const dropdownStyle = ({ trigger, width }) => css`
  position: absolute;
  right: 0;
  width: ${trigger ? width : "100%"};
  background-color: var(--white);
  margin-top: 4px;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-sm);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 10;
  padding: 4px 0;
`;

const dropdownOption = css`
  padding: 12px 16px;
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);

  &:hover {
    background-color: var(--gray-100);
  }
`;
