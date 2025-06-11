import { css } from "@emotion/react";
import Modal from "./Modal";
import Button from "../Button";

export default function ConfirmModal({ count, onConfirm, onCancel }) {
  return (
    <div css={modalContainer}>
      <Modal.header css={headerStyle}>
        선택한 {count}개의 항목을 삭제하시겠습니까?
      </Modal.header>

      <Modal.actions css={actionsStyle}>
        <Button
          variant="primary"
          size="md"
          onClick={onCancel}
          css={buttonStyle}
        >
          취소
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={onConfirm}
          css={buttonStyle}
        >
          확인
        </Button>
      </Modal.actions>
    </div>
  );
}

const modalContainer = css`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 30px; /* ← header와 actions 사이 16px 간격 */
`;

const headerStyle = css`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray-900);
  text-align: center;
`;

const actionsStyle = css`
  display: flex;
  justify-content: center;
  gap: 8px; /* 버튼들 사이 간격 */
`;

const buttonStyle = css`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 1rem;
`;
