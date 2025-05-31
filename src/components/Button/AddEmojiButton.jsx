/** @jsxImportSource @emotion/react */
import { StyledEmojiButton } from "../Button/Button.styles";
import AddEmojiIconBlack from "../../assets/images/ic-add-emoji-black.svg";
import AddEmojiIconWhite from "../../assets/images/ic-add-emoji-white.svg";

const AddEmojiButton = ({
  variant = "outlined",
  children,
  onClick,
  ...props
}) => (
  <StyledEmojiButton variant={variant} onClick={onClick} {...props}>
    <img
      src={props.disabled ? AddEmojiIconWhite : AddEmojiIconBlack}
      alt=""
      className="btn-icon"
    />
    {children}
  </StyledEmojiButton>
);

export default AddEmojiButton;
