import { css } from "@emotion/react";
import { MessageCardStyle } from "./MessageCard";
import { IconPlusButton } from "../Button/IconButtons";
import { useNavigate } from "react-router-dom";

const AddMessageCard = () => {
  const navigate = useNavigate();

  const goToPostPage = () => {
    navigate("/post");
  };

  return (
    <div css={AddMessageCardStyle} onClick={goToPostPage}>
      <IconPlusButton />
    </div>
  );
};

export default AddMessageCard;

const AddMessageCardStyle = css`
  ${MessageCardStyle}

  align-items: center;
`;
