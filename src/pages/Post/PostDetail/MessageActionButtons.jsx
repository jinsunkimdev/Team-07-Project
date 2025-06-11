import { css } from "@emotion/react";
import Button from "../../../components/Button";
import { useMessages } from "../context/MessagesContext";
import { useContext } from "react";
import ToastContext from "../../../components/Toast/ToastContext";

const MessageActionButtons = () => {
  const {
    editMode,
    selectedIds,
    handleDeleteSelected,
    handleEditButton,
    handleToggleSelectAll,
  } = useMessages();

    const { showToast } = useContext(ToastContext);

     // 삭제 버튼 클릭 핸들러
  const onDeleteClick = async () => {
    try {
      await handleDeleteSelected();         // 실제 삭제 시도
      showToast({                          // 성공 토스트
        state: "success",
        message: "성공적으로 삭제 되었습니다!",
      });
    } catch (err) {
      showToast({                          // 실패 토스트
        state: "error",
        message: "삭제에 실패하였습니다.",
      });
    }
  };

  // 편집 모드 토글
  const onEditToggle = () => {
    handleEditButton();
    if (editMode) {
      // 지금 편집 모드였다가 일반 모드로
      showToast({
        state: "success",
        message: "편집 모드가 종료되었습니다.",
      });
    } else {
      // 지금 일반 모드였다가 편집 모드로
      showToast({
        state: "success",
        message: "편집 모드로 전환되었습니다.",
      });
    }
  };


  return (
    <div css={ButtonGroupStyle}>
      {editMode ? (
        <>
          <Button onClick={handleToggleSelectAll}>
            {selectedIds.length > 0 ? "🔽 전체 해제" : "🔼 전체 선택"}
          </Button>
          <Button onClick={onDeleteClick} disabled={!selectedIds.length}>
            🗑 선택 삭제 ({selectedIds.length}개)
          </Button>
          <Button onClick={onEditToggle}>❌ 편집 종료</Button>
        </>
      ) : (
        <Button onClick={onEditToggle}>✏️ 편집하기</Button>
      )}
    </div>
  );
};

const ButtonGroupStyle = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin: 0 0 16px 0;

  button {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default MessageActionButtons;
