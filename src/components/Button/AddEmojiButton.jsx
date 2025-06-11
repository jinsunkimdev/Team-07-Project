import { css } from "@emotion/react";
import { ButtonStyle } from "./Button";
import { btnStyles } from "./btnStylesMap";
import { BREAKPOINTS } from "../../constants/constants";
import AddEmojiIconBlack from "../../assets/images/ic-add-emoji-black.svg";
import AddEmojiIconWhite from "../../assets/images/ic-add-emoji-white.svg";

const AddEmojiButton = ({
  type = "button",
  variant = "outlined",
  size = "md",
  children,
  disabled,
  onClick,
}) => (
  <button
    css={AddEmojiButtonStyle({ variant, size, disabled })}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    <img
      src={disabled ? AddEmojiIconWhite : AddEmojiIconBlack}
      alt="이모지 추가 아이콘"
      className="btn-icon"
    />
    <span className="btn-text">{children}</span>
  </button>
);

export default AddEmojiButton;

const AddEmojiButtonStyle = (props) => css`
  ${ButtonStyle(props)};

  width: auto;
  gap: ${btnStyles.iconTextGap[props.size]};

  .btn-icon {
    width: ${btnStyles.iconSize[props.size]};
    aspect-ratio: 1/1;
  }

  .btn-text {
    display: none;
  }

  @media (min-width: ${BREAKPOINTS.md}px) {
    .btn-text {
      display: block;
    }
  }

  @media (max-width: 767px) {
    width: 36px;
    height: 32px;
    padding: 0 !important;

    & > .btn-icon {
      width: 20px;
      object-fit: contain;
    }
  }
`;
