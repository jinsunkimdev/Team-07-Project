import { css } from "@emotion/react";
import Button from "../Button";
import {
  MessageCardProfile,
  MessageCardContent,
  MessageCardCreatedAt,
} from "../MessageCard/MessageCard";
import { BREAKPOINTS } from "../../constants/constants";

const Modal = ({ data, visible, onClose }) => {
  const { profileImageURL, sender, relationship, content, font, createdAt } =
    data;

  return (
    <div css={ModalStyle} className={`${visible && "visible"} modal`}>
      <Modal.header>
        <MessageCardProfile
          sender={sender}
          profileImageURL={profileImageURL}
          relationship={relationship}
          font={font}
        />
        <MessageCardCreatedAt
          createdAt={createdAt}
          customCss={css`
            font-size: var(--font-size-14);
          `}
        />
      </Modal.header>
      <Modal.divider />
      <Modal.body>
        <MessageCardContent
          content={content}
          customCss={css`
            overflow: visible;
            -webkit-line-clamp: initial;
          `}
        />
      </Modal.body>
      <Modal.actions>
        <Button variant="primary" size="md" onClick={onClose}>
          확인
        </Button>
      </Modal.actions>
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

const ModalStyle = css`
  position: relative;
  width: 100%;
  max-width: calc(100% - 40px);
  padding: 30px 24px;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  opacity: 0;
  transform: translateY(20px);
  transition: 0.3s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (min-width: 640px) {
    width: var(--modal-width);
    max-width: var(--modal-width);
    padding: 40px;
  }
`;

const ModalHeaderStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalDividerStyle = css`
  height: 1px;
  margin: 20px 0 4px;
  background: var(--gray-200);
  border: 0;
`;

const ModalBodyStyle = css`
  height: 180px;
  margin-bottom: 24px;
  overflow: auto;

  @media (min-width: ${BREAKPOINTS.md}px) {
    height: 240px;
  }
`;

const ModalActionsStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
