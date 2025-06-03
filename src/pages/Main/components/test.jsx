import { useState } from "react";
import DropdownSelect from "../../../components/Dropdown";
import {
  IconCheckButton,
  IconDeleteButton,
  IconPlusButton,
  IconShare20Button,
  IconShare24Button,
} from "../../../components/Button/IconButtons";

const handleOptionClick = (option) => {
  alert(`${option.value} 공유`);
};

const TestPage = () => {
  const [font, setFont] = useState(null);
  return (
    <div>
      <DropdownSelect
        selectedOption={font}
        onChange={setFont}
        options={[
          { label: "Noto Sans", value: "noto" },
          { label: "Pretendard", value: "pretendard" },
          { label: "나눔명조", value: "나눔명조" },
          { label: "나눔손글씨 손편지체", value: "나눔손글씨 손편지체" },
        ]}
        controlled={true}
      />

      <DropdownSelect
        customButton={<IconShare24Button />}
        options={[
          {
            label: "카카오톡 공유",
            value: "kakaoTalk",
            onClick: handleOptionClick,
          },
          { label: "URL 공유", value: "URL", onClick: handleOptionClick },
        ]}
      />
    </div>
  );
};
export default TestPage;
