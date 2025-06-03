import { css } from "@emotion/react";

export const btnStyles = {
  variants: {
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
      border-color: var(--gray-300);
      color: var(--white);
      pointer-events: none;
    `,
  },
  minWidth: {
    lg: "208px",
    md: "122px",
    sm: "122px",
    xs: "122px",
  },
  height: {
    lg: "56px",
    md: "40px",
    sm: "36px",
    xs: "28px",
  },
  padding: {
    lg: "14px 16px",
    md: "8px 16px",
    sm: "6px 16px",
    xs: "2px 16px",
  },
  fontSize: {
    lg: "var(--font-size-18)",
    md: "var(--font-size-16)",
    sm: "var(--font-size-15)",
    xs: "var(--font-size-14)",
  },
  fontWeight: {
    lg: "700",
    md: "400",
    sm: "400",
    xs: "400",
  },
  iconTextGap: {
    lg: "10px",
    md: "10px",
    sm: "4px",
    xs: "4px",
  },
  radius: {
    lg: "var(--radius-lg)",
    md: "var(--radius-sm)",
    sm: "var(--radius-sm)",
    xs: "var(--radius-sm)",
  },
  iconSize: {
    lg: "24px",
    md: "24px",
    sm: "20px",
    xs: "20px",
  },
};
