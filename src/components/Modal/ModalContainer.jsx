import ReactDOM from "react-dom";
import { css } from "@emotion/react";
import Modal from "./Modal";

const ModalContainer = ({ modals, visible, hideModal }) => {
  const containerEl = document.getElementById("modal-div");
  if (!containerEl) return null;

  if (modals.length === 0) return null;

  return ReactDOM.createPortal(
    <div role="dialog" aria-modal={`${visible}`} css={ModalContainerStyle}>
      <div css={ModalLayerStyle} className={visible && "visible"}></div>
      {modals?.map((modal) => (
        <Modal
          key={modal.id}
          id={modal.id}
          data={modal.data}
          visible={modal.visible}
          onClose={() => hideModal(modal.id)}
        />
      ))}
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
