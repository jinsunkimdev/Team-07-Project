import { useCallback, useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import ModalContext from "./ModalContext";
import ModalContainer from "../Modal/ModalContainer";
import { useLocation } from "react-router-dom";

const MODAL_VISIBLE_MS = 300;
const MODAL_DELETE_DOM_MS = 300;
const MODAL_ANIM_READY_MS = 10;

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);
  const modalsRef = useRef([]); // 무한 루프 방지용
  const location = useLocation(); // 페이지 이동 시 모달 닫기용

  const setModalsVisibleFn = ({ id, visible }) => {
    return setModals((prev) =>
      prev.map((modal) => (modal.id === id ? { ...modal, visible } : modal))
    );
  };

  const showModal = (modalElement) => {
    const id = nanoid();
    const newModal = { id, visible: false, element: modalElement }; // visible 기본값 false: 등장 애니메이션 준비

    // Step 1: 모달 추가
    setModals((prev) => [...prev, newModal]);

    // Step 2: visible 상태만 true로 업데이트 → 등장 애니메이션 트리거
    setTimeout(() => {
      setModalsVisibleFn({ id, visible: true });
    }, MODAL_ANIM_READY_MS);
  };

  const hideModal = useCallback((id) => {
    // Step 1: visible 상태만 false로 업데이트 → 퇴장 애니메이션 트리거
    setModalsVisibleFn({ id, visible: false });

    // Step 2: 애니메이션 끝나고 DOM에서 제거
    setTimeout(() => {
      setModals((prev) => prev.filter((modal) => modal.id !== id));
    }, MODAL_VISIBLE_MS + MODAL_DELETE_DOM_MS);
  }, []);

  // 모달 열려있으면 스크롤 잠금
  useEffect(() => {
    if (modals.some((modal) => modal.visible)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modals]);

  // ref로 최신 modals 상태 저장
  useEffect(() => {
    modalsRef.current = modals;
  }, [modals]);

  // 페이지 이동 시 모든 모달 닫기
  const hideAllModals = useCallback(() => {
    modalsRef.current.forEach((modal) => {
      hideModal(modal.id);
    });
  }, [hideModal]);

  useEffect(() => {
    hideAllModals();
  }, [location, hideAllModals]);

  return (
    <ModalContext.Provider value={{ modals, showModal, hideModal }}>
      {children}
      <ModalContainer
        modals={modals}
        hideModal={hideModal}
        visible={modals.some((modal) => modal.visible)}
      />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
