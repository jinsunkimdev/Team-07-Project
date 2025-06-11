import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import Label from "../../../components/Form/Label";
import Input from "../../../components/Form/Input";
import SelectBackground from "../components/SelectBackground";
import GlobalHeader from "../../../components/Header/GlobalHeader";
import Button from "../../../components/Button";
import createRecipient from "../../../api/post/createRecipient";
import { BACKGROUND_COLORS, BREAKPOINTS } from "../../../constants/constants";
import useFocusFirstField from "../../../hooks/useFocusFirstField";
import useToast from "./../../../components/Toast/useToast";

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

  const { showToast } = useToast();

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
      setToError("이름을 한 글자 이상 입력해 주세요.");
    } else if (toInputValue.length > MAX_TO_LENGTH) {
      setToError(`이름은 ${MAX_TO_LENGTH}자 이상 입력할 수 없어요.`);
    } else {
      setToError("");
    }
  };

  const handleCreatePostPage = async () => {
    if (toInputValue.trim() === "") {
      setToError("이름을 한 글자 이상 입력해 주세요.");
      return;
    }

    const formData = {
      team: "16-7",
      name: toInputValue,
      backgroundColor: background.backgroundColor,
      backgroundImageURL: background.backgroundImageURL || null,
    };

    try {
      const result = await createRecipient(formData);
      showToast({ message: "롤링페이퍼를 만들었어요! 🎉" });
      navigate(`/post/${result.id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const isBackgroundSelected =
    background.backgroundColor || background.backgroundImageURL;

  const isCreateEnabled = toInputValue.trim() !== "" && isBackgroundSelected;

  // 첫번째 필드 autofocus
  useFocusFirstField();

  return (
    <section>
      <GlobalHeader />

      <form css={PostCreateFormStyle} onSubmit={(e) => e.preventDefault()}>
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

        <div css={SelectBackgroundStyle}>
          <SelectBackground onChange={setBackground} />
        </div>

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
      </form>
    </section>
  );
};

export default PostCreatePage;

const PostCreateFormStyle = css`
  max-width: 720px;
  margin: 26px auto 0;
  padding: 24px 20px;

  @media (min-width: ${BREAKPOINTS.lg}px) {
    margin: 60px auto 0;
    padding: 0 24px 60px;
  }
`;

// 배경 선택 영역
const SelectBackgroundStyle = css`
  margin: 28px 0;

  @media (min-width: ${BREAKPOINTS.md}px) {
    margin: 40px 0px;
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    margin: 46px 0px;
  }
`;
