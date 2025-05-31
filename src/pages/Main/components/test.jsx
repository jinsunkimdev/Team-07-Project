import { useState } from "react";
import DropdownSelect from "../../../components/Dropdown";

const TestPage = () => {
  const [font, setFont] = useState(null);
  return (
    <div>
      <DropdownSelect
        value={font}
        onChange={setFont}
        options={[
          { label: "Noto Sans", value: "noto" },
          { label: "Roboto", value: "roboto" },
          { label: "Pretendard", value: "pretendard" },
        ]}
        placeholder="폰트를 선택하세요"
      />
    </div>
  );
};
export default TestPage;
