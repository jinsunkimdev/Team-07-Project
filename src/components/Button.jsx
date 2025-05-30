/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PrimaryButton = ({ children, ...props }) => (
  <Button {...props} css={primaryStyle}>
    {children}
  </Button>
);

export const SecondaryButton = ({ children, ...props }) => (
  <Button {...props} css={secondaryStyle}>
    {children}
  </Button>
);

export const OutlinedButton = ({ children, ...props }) => (
  <Button {...props} css={outlinedStyle}>
    {children}
  </Button>
);

export const DisabledButton = ({ children, ...props }) => (
  <Button {...props} css={disabledStyle}>
    {children}
  </Button>
);

const Button = styled.button`
  font-size: 16px;
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-weight: 600;
`;

const primaryStyle = css`
  background-color: var(--primary);
  color: white;

  &:hover {
    background-color: var(--primary-hover);
  }
  &:active,
  &:focus {
    background-color: var(--primary-focus);
  }
`;

const secondaryStyle = css`
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
`;

const outlinedStyle = css`
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
`;

const disabledStyle = css`
  background-color: var(--gray-300);
  color: var(--white);
  cursor: not-allowed;
`;
