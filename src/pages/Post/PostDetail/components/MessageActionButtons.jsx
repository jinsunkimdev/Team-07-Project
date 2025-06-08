import Button from "../../../../components/Button";
import { ButtonGroupStyle } from "./MessagesPageStyle";

const MessageActionButtons = ({
  editMode,
  selectedIds,
  handleSave,
  handleEditButton,
  handleClearSelection,
}) => {
  return (
    <div css={ButtonGroupStyle}>
      {editMode ? (
        <>
          <Button onClick={handleSave}>💾 저장하기</Button>
          <Button
            onClick={handleClearSelection}
            disabled={selectedIds.length === 0}
          >
            🚫 선택 해제 ({selectedIds.length}개)
          </Button>
          <Button onClick={handleEditButton}>❌ 편집 종료</Button>
        </>
      ) : (
        <Button onClick={handleEditButton}>✏️ 편집하기</Button>
      )}
    </div>
  );
};

export default MessageActionButtons;
