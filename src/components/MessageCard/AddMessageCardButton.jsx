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
      <h3>메시지 작성하기</h3>
    </div>
  );
};

export default AddMessageCardButton;

const AddMessageCardButtonStyle = css`
  ${MessageCardStyle}

  align-items: center;
  min-height: 230px;
  gap: 16px;
`;
