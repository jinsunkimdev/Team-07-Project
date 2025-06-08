import Button from "../../../../components/Button";
import { ButtonGroupStyle } from "./MessagesPageStyle";

const MessageActionButtons = ({
  editMode,
  selectedIds,
  handleDeleteSelected,
  handleEditButton,
  handleToggleSelectAll,
}) => {
  return (
    <div css={ButtonGroupStyle}>
      {editMode ? (
        <>
          <Button onClick={handleToggleSelectAll}>
            {selectedIds.length > 0 ? "🔽 전체 해제" : "🔼 전체 선택"}
          </Button>
          <Button
            onClick={handleDeleteSelected}
            disabled={selectedIds.length === 0}
          >
            🗑 선택 삭제 ({selectedIds.length}개)
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
