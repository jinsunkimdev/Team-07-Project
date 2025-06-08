/**
 * 상태 및 로직만 담당
 */
import { useCallback, useState } from "react";
import { useNavigate, useMatch, useParams } from "react-router-dom";
import useInfiniteMessages from "./useInfiniteMessages";
import useModal from "../../../../components/Modal/useModal";
import { deleteMessages } from "../../../../api/delete/deleteMessages";

const useMessagesPage = () => {
  const { id: recipientId } = useParams();
  const navigate = useNavigate();
  const editMode = !!useMatch("/post/:id/edit");
  const [selectedIds, setSelectedIds] = useState([]);
  const { showModal } = useModal();
  const {
    messages,
    setMessages,
    fetchMore,
    isLast,
    error: fetchError,
  } = useInfiniteMessages({ id: recipientId, limit: editMode ? 6 : 5 });
  const [error, setError] = useState("");

  const handleSave = async () => {
    try {
      await Promise.all(selectedIds.map((id) => deleteMessages({ id })));
      setMessages((prev) =>
        prev.filter((msg) => !selectedIds.includes(msg.id))
      );
      setSelectedIds([]);
      navigate(`/post/${recipientId}`);
    } catch (err) {
      console.error("삭제 실패", err);
      setError("메시지 삭제 중 문제가 발생했습니다.");
    }
  };

  const handleEditButton = () => {
    const baseUrl = `/post/${recipientId}`;
    setSelectedIds([]);
    navigate(editMode ? baseUrl : `${baseUrl}/edit`);
  };

  const toggleSelection = useCallback((id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const handleDeleteSelected = async () => {
    try {
      await Promise.all(selectedIds.map((id) => deleteMessages({ id })));
      setMessages((prev) =>
        prev.filter((msg) => !selectedIds.includes(msg.id))
      );
      setSelectedIds([]);
    } catch (err) {
      console.error("삭제 실패", err);
      setError("메시지 삭제 중 문제가 발생했습니다.");
    }
  };

  const handleToggleSelectAll = () => {
    const allIds = messages.map((m) => m.id);
    if (selectedIds.length > 0) {
      setSelectedIds([]); // 모두 해제
    } else {
      setSelectedIds(allIds); // 모두 선택
    }
  };

  return {
    recipientId,
    editMode,
    selectedIds,
    setSelectedIds,
    toggleSelection,
    messages,
    showModal,
    fetchMore,
    isLast,
    error: fetchError || error,
    handleSave,
    handleEditButton,
    handleDeleteSelected,
    handleToggleSelectAll,
  };
};

export default useMessagesPage;
