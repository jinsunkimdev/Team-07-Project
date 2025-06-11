import { css } from "@emotion/react";
import Button from "../../../components/Button";
import { useMessages } from "../context/MessagesContext";
import useModal from "../../../components/Modal/useModal";
import { useContext, useEffect, useRef } from "react";
import ToastContext from "../../../components/Toast/ToastContext";
import ConfirmModal from "../../../components/Modal/ConfirmModal";
import { useNavigate } from "react-router-dom";

const MessageActionButtons = () => {
  const {
    editMode,
    selectedIds,
    handleDeleteSelected,
    handleEditButton,
    handleToggleSelectAll,
    setSelectedIds,
  } = useMessages();

  const { showModal, hideModal } = useModal();
  const { showToast } = useContext(ToastContext);
  const prevEditModeRef = useRef(editMode);
  const navigate = useNavigate(); // 네비게이트 훅
  const onDeleteRequest = () => {
    const modalId = showModal(
      <ConfirmModal
        count={selectedIds.length}
        onCancel={() => hideModal(modalId)}
        onConfirm={async () => {
          hideModal(modalId);
          try {
            await handleDeleteSelected();
            showToast({ state: "success", message: "삭제되었습니다." });
          } catch {
            showToast({ state: "error", message: "삭제에 실패했습니다." });
          }
        }}
      />
    );
  };

  useEffect(() => {
    if (prevEditModeRef.current !== editMode) {
      showToast({
        state: "success",
        message: editMode
          ? "편집 모드를 시작했습니다."
          : "편집 모드를 종료했습니다.",
      });

      if (!editMode) {
        setSelectedIds([]);
      }

      prevEditModeRef.current = editMode;
    }
  }, [editMode]);

  return (
    <div css={ButtonGroupStyle}>
      {editMode ? (
        <>
          <Button onClick={handleToggleSelectAll}>
            {selectedIds.length > 0 ? "🔽 전체 해제" : "🔼 전체 선택"}
          </Button>
          <Button onClick={onDeleteRequest} disabled={!selectedIds.length}>
            🗑 선택 삭제 ({selectedIds.length}개)
          </Button>
          <Button onClick={handleEditButton}>❌ 편집 종료</Button>
        </>
      ) : (
        <Button onClick={handleEditButton}>✏️ 편집하기</Button>
      )}
    <Button onClick={()=>{navigate("/list")}}>🔗 목록으로</Button>
    </div>
  );
};

const ButtonGroupStyle = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 16px;
`;

export default MessageActionButtons;
