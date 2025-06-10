import { css } from "@emotion/react";
import Button from "../../../components/Button";
import { useMessages } from "../context/MessagesContext";

const MessageActionButtons = () => {
  const {
    editMode,
    selectedIds,
    handleDeleteSelected,
    handleEditButton,
    handleToggleSelectAll,
  } = useMessages();

  return (
    <div css={ButtonGroupStyle}>
      {editMode ? (
        <>
          <Button onClick={handleToggleSelectAll}>
            {selectedIds.length > 0 ? "🔽 전체 해제" : "🔼 전체 선택"}
          </Button>
          <Button onClick={handleDeleteSelected} disabled={!selectedIds.length}>
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

const ButtonGroupStyle = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin: 0 0 16px 0;
`;

export default MessageActionButtons;
