import { css } from "@emotion/react";

const Input = ({
  id,
  placeholder = "",
  value,
  onChange,
  onBlur,
  error,
  ...props
}) => {
  return (
    <>
      <div css={InputAreaStyle({ error })}>
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          css={InputStyle}
          {...props}
        />
      </div>
      {/*p태그를 항상 랜더링하고 없을 때는 공백을 출력 (경고 텍스트 발생 시 밀림 방지)*/}
      <p css={ErrorMessageStyle}>{error || " "}</p>
    </>
  );
};

export default Input;

const InputAreaStyle = ({ error }) => css`
  display: flex;
  width: 100%;
  height: 50px;
  border: ${!error ? "1px solid var(--gray-300)" : "1px solid var(--error)"};
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const InputStyle = css`
  box-sizing: border-box;
  width: 100%;
  font-size: var(--font-size-16);
  color: var(--gray-500);
  padding: 12px;
  border: none;
  height: 100%;
  outline: none;
`;

const ErrorMessageStyle = css`
  font-size: var(--font-size-14);
  margin-top: 8px;
  color: var(--error);
  min-height: 24px; /* 미리 높이 잡아놓기 */
`;
