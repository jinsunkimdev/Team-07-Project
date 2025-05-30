/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  btnFontSizeMap,
  btnFontWeightMap,
  btnPaddingMap,
  btnIconTextGapMap,
  btnMinWidthMap,
  btnHeightMap,
} from "../constants/stylesMap";
import AddEmojiIconBlack from "../assets/images/ic-add-emoji-black.svg";
import AddEmojiIconWhite from "../assets/images/ic-add-emoji-white.svg";

export const Button = ({ variant = "primary", children, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

export const AddEmojiButton = ({
  variant = "outlined",
  children,
  ...props
}) => (
  <StyledEmojiButton variant={variant} {...props}>
    <img
      src={props.disabled ? AddEmojiIconWhite : AddEmojiIconBlack}
      alt=""
      className="btn-icon"
    />
    {children}
  </StyledEmojiButton>
);

const variantStyles = {
  primary: css`
    background-color: var(--primary);
    color: white;

    &:hover {
      background-color: var(--primary-hover);
    }
    &:active,
    &:focus {
      background-color: var(--primary-focus);
    }
  `,
  secondary: css`
    background-color: var(--white);
    color: var(--primary);
    border: 1px solid var(--primary);

    &:hover,
    &:active {
      background-color: var(--purple-100);
    }
    &:focus:not(:active) {
      background-color: var(--white);
    }
  `,
  outlined: css`
    background-color: var(--white);
    color: var(--black);
    border: 1px solid var(--border-color);

    &:hover,
    &:active {
      background-color: var(--gray-100);
    }
    &:focus:not(:active) {
      background-color: var(--white);
      border-color: var(--gray-500);
    }
  `,
  disabled: css`
    background-color: var(--gray-300);
    color: var(--white);
    pointer-events: none;
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => btnMinWidthMap[size]};
  height: ${({ size }) => btnHeightMap[size]};
  padding: ${({ size }) => btnPaddingMap[size]};
  font-size: ${({ size }) => btnFontSizeMap[size]};
  font-weight: ${({ size }) => btnFontWeightMap[size]};
  border-radius: var(--radius-sm);

  ${({ variant }) => variantStyles[variant]};
  ${({ disabled }) => disabled && variantStyles["disabled"]};
`;

const StyledEmojiButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ size }) => btnIconTextGapMap[size]};
  padding: ${({ size }) => btnPaddingMap[size]};
  font-size: ${({ size }) => btnFontSizeMap[size]};
  font-weight: ${({ size }) => btnFontWeightMap[size]};
  border-radius: var(--radius-sm);

  .btn-icon {
    width: 24px;
    aspect-ratio: 1/1;
  }

  ${({ variant }) => variantStyles[variant]};
  ${({ disabled }) => disabled && variantStyles["disabled"]};
`;
