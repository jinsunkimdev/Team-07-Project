import { useEffect, useRef, useState } from "react";

import iconArrowDown from "../assets/images/iconArrowDown.svg";
import iconArrowTop from "../assets/images/iconArrowTop.svg";

const DropdownSelect = ({
  value, //선택된 항목
  onChange, //선택시 실행할 함수
  options = [
    /**{label:..., value:..., ...} */
  ],
  trigger, //버튼 커스텀?
  controlled = false, //state관리를 여기서 하느냐 부모에서 하느냐 |기본은 여기
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
    <div ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger ? (
          trigger
        ) : (
          <button>
            {selectedValue?.label}
            <img src={isOpen ? iconArrowTop : iconArrowDown} alt="toggle" />
          </button>
        )}
      </div>
      {isOpen && ( //isOpen이 true일 때만 렌더링
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;
