import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as styleMapper from "./btnStylesMap";

export const variantStyles = {
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
    color: var(--gray-900);
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

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => styleMapper.btnMinWidthMap[size]};
  height: ${({ size }) => styleMapper.btnHeightMap[size]};
  padding: ${({ size }) => styleMapper.btnPaddingMap[size]};
  font-size: ${({ size }) => styleMapper.btnFontSizeMap[size]};
  font-weight: ${({ size }) => styleMapper.btnFontWeightMap[size]};
  border-radius: ${({ size }) => styleMapper.btnRadiusMap[size]};

  ${({ variant }) => variantStyles[variant]};
  ${({ disabled }) => disabled && variantStyles["disabled"]};
`;

export const StyledEmojiButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ size }) => styleMapper.btnIconTextGapMap[size]};
  padding: ${({ size }) => styleMapper.btnPaddingMap[size]};
  font-size: ${({ size }) => styleMapper.btnFontSizeMap[size]};
  font-weight: ${({ size }) => styleMapper.btnFontWeightMap[size]};
  border-radius: var(--radius-sm);

  .btn-icon {
    width: ${({ size }) => styleMapper.btnIconSizeMap[size]};
    aspect-ratio: 1/1;
  }

  ${({ variant }) => variantStyles[variant]};
  ${({ disabled }) => disabled && variantStyles["disabled"]};
`;
