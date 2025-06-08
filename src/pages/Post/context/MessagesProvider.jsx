import useMessagesPage from "../hooks/useMessagesPage";
import { MessagesContext } from "./MessagesContext";

export const MessagesProvider = ({ children }) => {

  const state = useMessagesPage(); 
    const {
    editMode,
    selectedIds,
    setSelectedIds,
    toggleSelection,
    messages,
    showModal,
    fetchMore,
    isLast,
    error,
    handleEditButton,
    handleDeleteSelected,
    handleToggleSelectAll,
  } = useMessagesPage(); // ← 이 값들을 아래에 직접 명시해줘야 함

  const value = {
    editMode,
    selectedIds,
    setSelectedIds,
    toggleSelection,
    messages,
    showModal,
    fetchMore,
    isLast,
    error,
    handleEditButton,
    handleDeleteSelected,
    handleToggleSelectAll,
  };
  
  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};
