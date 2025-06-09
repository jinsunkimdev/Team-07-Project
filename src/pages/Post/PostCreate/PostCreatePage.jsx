import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Label from "../../../components/Form/Label";
import Input from "../../../components/Form/Input";
import SelectBackground from "../components/SelectBackground";
import GlobalHeader from "../../../components/Header/GlobalHeader";
import Button from "../../../components/Button";
import createRecipient from "../../../api/post/createRecipient";
import { BACKGROUND_COLORS } from "../../../constants/constants";

const MAX_TO_LENGTH = 20;

// 백그라운드 컬러
const AVAILABLE_COLORS = Object.keys(BACKGROUND_COLORS);

const PostCreatePage = () => {
  const [toInputValue, setToInputValue] = useState("");
  const [toError, setToError] = useState("");
  const [background, setBackground] = useState({
    backgroundColor: AVAILABLE_COLORS[0],
    backgroundImageURL: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > MAX_TO_LENGTH) {
      setToError(`이름은 ${MAX_TO_LENGTH}자 이상 입력할 수 없어요.`);
    } else {
      setToError("");
    }
    setToInputValue(value);
  };

  const handleBlur = () => {
    if (toInputValue.trim() === "") {
      setToError("값을 입력해 주세요");
    } else if (toInputValue.length > MAX_TO_LENGTH) {
      setToError(`이름은 ${MAX_TO_LENGTH}자 이상 입력할 수 없어요.`);
    } else {
      setToError("");
    }
  };

  const handleCreatePostPage = async () => {
    if (toInputValue.trim() === "") {
      setToError("값을 입력해 주세요");
      return;
    }

    const formData = {
      team: "16-7",
      name: toInputValue,
      backgroundColor: background.backgroundColor,
      backgroundImageURL: background.backgroundImageURL,
    };

    try {
      const result = await createRecipient(formData);
      console.log("롤링페이퍼 생성 성공!: ", result);
      navigate(`/post/${result.id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const isBackgroundSelected =
    background.backgroundColor || background.backgroundImageURL;

  const isCreateEnabled = toInputValue.trim() !== "" && isBackgroundSelected;

  return (
    <div>
      <HeaderWrapper>
        <GlobalHeader />
      </HeaderWrapper>

      <Container>
        <Label value="To." />
        <Input
          value={toInputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="받는사람 이름을 입력해 주세요"
          error={toError}
          maxLength={MAX_TO_LENGTH}
          autoFocus
        />

        <Background>
          <SelectBackground onChange={setBackground} />
        </Background>

        <div>
          <Button
            variant="primary"
            size="lg"
            disabled={!isCreateEnabled}
            onClick={handleCreatePostPage}
            style={{ width: "100%" }}
          >
            생성하기
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PostCreatePage;

const Container = styled.div`
  max-width: 600px;
  margin: 60px auto 0;
  padding: 0 24px 60px;
`;

// 배경 선택 영역
const Background = styled.div`
  margin: 50px 0px;
`;

const HeaderWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
