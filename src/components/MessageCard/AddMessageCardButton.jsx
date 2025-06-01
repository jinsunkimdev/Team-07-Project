import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import MessageCardStyle from "./MessageCardStyle";
import { IconPlusButton } from "../Button/IconButtons";

const AddMessageCardButton = () => {
  const navigate = useNavigate();

  const goToPostPage = () => {
    navigate("/post");
  };

  return (
    <div css={AddMessageCardButtonStyle} onClick={goToPostPage}>
      <IconPlusButton />
    </div>
  );
};

export default AddMessageCardButton;

const AddMessageCardButtonStyle = css`
  ${MessageCardStyle}

  align-items: center;
`;
