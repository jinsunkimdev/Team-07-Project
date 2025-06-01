import { useState } from "react";
import DropdownSelect from "../../../components/Dropdown";
import {
  IconDeleteButton,
  IconShare24Button,
} from "../../../components/Button/IconButtons";

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
    </div>
  );
};
export default TestPage;
