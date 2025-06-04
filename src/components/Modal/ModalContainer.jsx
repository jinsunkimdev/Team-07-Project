import ReactDOM from "react-dom";
import Modal from "./Modal";

const ModalContainer = ({ modals, hideModal }) => {
  const containerEl = document.getElementById("modal-div");
  if (!containerEl) return null;

  return ReactDOM.createPortal(
    <>
      {modals?.map((modal) => (
        <Modal
          key={modal.id}
          id={modal.id}
          data={modal.data}
          visible={modal.visible}
          onClose={() => hideModal(modal.id)}
        />
      ))}
    </>,
    containerEl
  );
};

export default ModalContainer;
