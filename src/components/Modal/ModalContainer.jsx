import ReactDOM from "react-dom";
import { css } from "@emotion/react";
import Modal from "./Modal";
import { useEffect, useRef } from "react";

const ModalContainer = ({ modals, visible, hideModal }) => {
  const containerEl = document.getElementById("modal-div");
  const modalRef = useRef(null);
  const modalNode = modalRef.current;

  useEffect(() => {
    if (modals.length === 0) return;

    const handleOutsideClick = (e) => {
      if (modalNode && !modalNode.contains(e.target)) {
        hideModal(modals[modals.length - 1].id);
      }
    };

    const handleEscKeyDown = (e) => {
      if (e.key === "Escape") {
        hideModal(modals[modals.length - 1].id);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [modals, modalNode, hideModal]);

  if (!containerEl || modals.length === 0) return null;

  return ReactDOM.createPortal(
    <div role="dialog" aria-modal={`${visible}`} css={ModalContainerStyle}>
      <div css={ModalLayerStyle} className={visible && "visible"}></div>
      <div ref={modalRef} className="modal-area">
        {modals?.map((modal) => (
          <Modal
            key={modal.id}
            id={modal.id}
            data={modal.data}
            visible={modal.visible}
            onClose={() => hideModal(modal.id)}
          />
        ))}
      </div>
    </div>,
    containerEl
  );
};

export default ModalContainer;

const ModalContainerStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const ModalLayerStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: 0.3s;

  &.visible {
    opacity: 1;
  }
`;
