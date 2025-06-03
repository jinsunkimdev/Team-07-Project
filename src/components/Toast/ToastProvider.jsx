import { useState } from "react";
import ToastContext from "./ToastContext";
import ToastContainer from "./ToastConatiner";

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]); // 토스트 목록

  const showToast = ({ message }) => {
    const id = Math.random().toString(36).substr(2, 9); // 여러 토스트가 동시에 떴을 때, 삭제할 토스트 구분용 임의 id
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => hideToast(id), 3000);
  };

  const hideToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
      {children}
      <ToastContainer toasts={toasts} hideToast={hideToast} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
