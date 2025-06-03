import { css } from "@emotion/react";
import IconSuccess from "../../assets/images/ic-success.svg";
import IconClose from "../../assets/images/ic-close-gray.svg";

const Toast = ({ id, state = "success", message, onClose }) => {
  return (
    <div css={ToastStyle}>
      <div className="toast-content">
        {state === "success" && (
          <img src={IconSuccess} alt="처리 완료" className="status-icon" />
        )}
        {message}
      </div>
      <div className="toast-actions">
        <button className="btn-close" onClick={() => onClose(id)}>
          <img src={IconClose} alt="닫기" />
        </button>
      </div>
    </div>
  );
};

export default Toast;

const ToastStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: var(--radius-md);
  font-size: var(--font-size-16);

  .toast-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .status-icon {
    width: 24px;
    aspect-ratio: 1/1;
  }

  .btn-close {
    padding: 4px;
  }
`;
