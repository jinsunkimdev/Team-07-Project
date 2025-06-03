import { useState } from "react";
import DropdownSelect from "../../../components/Dropdown";
import {
  IconCheckButton,
  IconDeleteButton,
  IconPlusButton,
  IconShare20Button,
  IconShare24Button,
} from "../../../components/Button/IconButtons";
import Badge from "../../../components/Badge";

const handleOptionClick = (option) => {
  alert(`${option.value} 공유`);
};

const TestPage = () => {
  const [font, setFont] = useState(null);
  const [relationship, setRelationship] = useState(null);

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
        trigger={<IconShare24Button />}
        options={[
          {
            label: "카카오톡 공유",
            value: "kakaoTalk",
            onClick: handleOptionClick,
          },
          { label: "URL 공유", value: "URL", onClick: handleOptionClick },
        ]}
      />
      <Badge relationshipLabel={"친구"}></Badge>
      <Badge relationshipLabel={"동료"}></Badge>
      <Badge relationshipLabel={"가족"}></Badge>
      <Badge relationshipLabel={"지인"}></Badge>

      <DropdownSelect
        selectedOption={relationship}
        onChange={setRelationship}
        options={[
          { label: "친구", value: "친구" },
          { label: "지인", value: "지인" },
          { label: "동료", value: "동료" },
          { label: "가족", value: "가족" },
        ]}
      />
    </div>
  );
};
export default TestPage;
