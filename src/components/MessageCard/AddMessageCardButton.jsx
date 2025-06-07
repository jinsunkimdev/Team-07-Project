import { css } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import MessageCardStyle from "./MessageCardStyle";
import { IconPlusButton } from "../Button/IconButtons";

const AddMessageCardButton = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const goToPostPage = () => {
    navigate(`/post/${id}/message`);
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
