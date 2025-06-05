import { css } from "@emotion/react";
import Button from "../Button";
import {
  MessageCardProfile,
  MessageCardContent,
  MessageCardCreatedAt,
} from "../MessageCard/MessageCard";

const Modal = ({ data, visible, onClose }) => {
  const { profileImageURL, sender, relationship, content, font, createdAt } =
    data;

  return (
    <div role="dialog" aria-modal={`${visible}`} css={ModalContainerStyle}>
      <div css={ModalLayerStyle}></div>
      <div css={ModalStyle}>
        <Modal.header>
          <MessageCardProfile
            sender={sender}
            profileImageURL={profileImageURL}
            relationship={relationship}
            font={font}
          />
          <MessageCardCreatedAt createdAt={createdAt} />
        </Modal.header>
        <Modal.divider />
        <Modal.body>
          <MessageCardContent content={content} />
        </Modal.body>
        <Modal.actions>
          <Button variant="primary" size="md" onClick={onClose}>
            확인
          </Button>
        </Modal.actions>
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => {
  return <div css={ModalHeaderStyle}>{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div css={ModalBodyStyle}>{children}</div>;
};

const ModalActions = ({ children }) => {
  return <div css={ModalActionsStyle}>{children}</div>;
};

const ModalDivider = () => {
  return <hr css={ModalDividerStyle}></hr>;
};

Modal.header = ModalHeader;
Modal.body = ModalBody;
Modal.actions = ModalActions;
Modal.divider = ModalDivider;

export default Modal;

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
`;

const ModalStyle = css`
  position: relative;
  width: 100%;
  max-width: calc(100% - 40px);
  padding: 40px;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  max-width: calc(100% - 40px);

  @media (min-width: 640px) {
    width: var(--modal-width);
    max-width: var(--modal-width);
  }
`;

const ModalHeaderStyle = css``;
const ModalBodyStyle = css``;
const ModalActionsStyle = css``;
const ModalDividerStyle = css``;
