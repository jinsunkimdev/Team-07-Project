import { useState } from "react";
import ToastContext from "./ToastContext";
import ToastContainer from "./ToastConatiner";

const TOAST_VISIBLE_MS = 5000;
const TOAST_DELETE_DOM_MS = 1000;
const TOAST_ANIM_READY_MS = 10;

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]); // 토스트 리스트 (토스트를 여러개 담기 위함)

  const showToast = ({ message }) => {
    // message만 파라미터로 받고, id는 여기서 직접 생성 (여러 토스트가 동시에 떴을 때, 삭제할 토스트 구분용 임의 id)
    const id = Math.random().toString(36).substr(2, 9);

    /*
     * 토스트 show/hide 애니메이션 🌌
     */
    // Step 1: visible: false로 토스트 등장 애니메이션 준비
    setToasts((prev) => [...prev, { id, message, visible: false }]); // visible: 애니메이션 제어용

    // Step 2: visible: true로 변경 → 등장 애니메이션 시작
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, visible: true } : toast
        )
      );
    }, TOAST_ANIM_READY_MS);

    // Step 3: 일정 시간 후 퇴장 애니메이션 시작
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, visible: false } : toast
        )
      );
    }, TOAST_VISIBLE_MS);

    // Step 4: 퇴장 애니메이션 후 DOM 제거
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, TOAST_VISIBLE_MS + TOAST_DELETE_DOM_MS);
  };

  const hideToast = (id) => {
    // Step 1: 토스트 닫기 클릭 → visible: false → 퇴장 애니메이션 시작
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, visible: false } : toast
      )
    );

    // Step 2: 퇴장 애니메이션 후 DOM 제거
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, TOAST_DELETE_DOM_MS);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
      {children}
      <ToastContainer toasts={toasts} hideToast={hideToast} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
