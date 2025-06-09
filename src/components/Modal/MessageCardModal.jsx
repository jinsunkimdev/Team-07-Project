import { css } from "@emotion/react";
import Button from "../Button";
import {
  MessageCardProfile,
  MessageCardContent,
  MessageCardCreatedAt,
} from "../MessageCard/MessageCard";
import Modal from "./Modal";
import useModal from "./useModal";
import getFontValueByLabel from "../../utils/getFontValueByLabel";

const MessageCardModal = ({ data }) => {
  const { profileImageURL, sender, relationship, content, font, createdAt } =
    data;
  const { hideModal, modals } = useModal();
  const fontValue = getFontValueByLabel(font);

  // 현재 컴포넌트에 해당하는 모달 ID 찾기
  const currentModal = modals.find(
    (modal) =>
      modal.element?.type === MessageCardModal &&
      modal.element?.props?.data.id === data.id
  );

  const handleClose = () => {
    if (currentModal) {
      hideModal(currentModal.id);
    }
  };

  return (
    <>
      <Modal.header>
        <MessageCardProfile
          sender={sender}
          profileImageURL={profileImageURL}
          relationship={relationship}
          font={fontValue}
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
          font={fontValue}
          customCss={css`
            display: block;
            overflow: visible;
            text-overflow: initial;
            -webkit-line-clamp: unset;
            -webkit-box-orient: initial;
            height: auto;
          `}
        />
      </Modal.body>
      <Modal.actions>
        <Button variant="primary" size="md" onClick={handleClose}>
          확인
        </Button>
      </Modal.actions>
    </>
  );
};

export default MessageCardModal;
