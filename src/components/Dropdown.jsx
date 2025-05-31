import { useEffect, useRef, useState } from "react";

import iconArrowDown from "../assets/images/iconArrowDown.svg";
import iconArrowTop from "../assets/images/iconArrowTop.svg";

const DropdownSelect = ({
  value, //선택된 항목
  onChange, //선택시 실행할 함수
  options = [
    /**{label:..., value:..., ...형식} */
  ],
  placeholder,
  renderOption, //이걸 이용해 커스텀 가능
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    }; //메모리 누수 방지
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div>
          {value?.label || placeholder}
          <img src={isOpen ? iconArrowTop : iconArrowDown} alt="toggle" />
        </div>
      </button>
      {isOpen && ( //isOpen이 true일 때만 렌더링
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {renderOption ? renderOption(option) : option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;
